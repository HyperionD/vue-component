<template>
    <div class="slider">
        <!-- slider-window 宽度设置为一张图片宽度，overflow: hidden 仅能看到一张图片-->
        <div class="slider-window" :style="sliderWindowStyle">
            <!-- slider-container 宽度设置为其下所有图片总和(imageWidth * virtualImageList.length)，相对定位，通过设置不同的left移动图片达到轮播效果-->
            <div class="slider-container" :style="sliderContainerStyle" ref="sliderContainer">
                <img v-if="imageLoaded" v-for="image in virtualImageList" :src="image" class="slider-item"/>
            </div>
        </div>
        <div class="dot">
            <div v-for="index in imageList.length"
                 class="dot-item" :class="{ active: dotActiveList[index - 1] }"
                 @click="clickDot(index - 1)">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        /**
         *  @imageWidth     图片宽度
         *  @imageLoaded    宽度属性设置完成后为true，显示图片
         *  @sliderWindowStyle  对应class绑定的style, 用于设定width属性
         *  @sliderContainerStyle  对应class绑定的style, 用于设定width, transition, left 属性
         *  @dotActiveList  圆点激活状态列表, true表示对应的当前图片处于激活状态
         *  @currentIndex   当前激活图片的索引编号，从0开始
         *  @timer  定时器，当点击圆点收到跳转图片时取消计时器，当图片跳转完成时重新启用计时器，自动轮播图片
         */
        data: function () {
            return {
                imageWidth: "",
                imageLoaded: false,
                sliderWindowStyle: {},
                sliderContainerStyle: {},
                dotActiveList: [],
                currentIndex: 0,
                invID: "",
                timeID: ""
            }
        },
        props: {
            /**
             * @imageList 轮播的图片路径列表
             */
            imageList: {
                type: Array,
                default: [],
                required: true
            },
            /**
             * @during 每张图片切换的时间，单位为毫秒
             */
            during: {
                default: 2000
            }
        },
        beforeMount: function () {
            this.init();
        },
        computed: {
            /**
             * 为了实现最后一张到第一张无缝切换，将第一张图片在最后一张图片后再添加一次
             * @returns {Array}
             */
            virtualImageList: function () {
                let virtual = [];
                this.imageList.forEach((value) => {
                    virtual.push(value);
                });
                virtual.push(this.imageList[0]);
                return virtual;
            }
        },
        methods: {
            /**
             * 获取图片宽度，认为所有图片宽度相同
             * @returns {Promise}
             */
            getImageWidth: function () {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = this.imageList[0];
                    img.onload = () => {
                        this.imageWidth = img.width;
                        resolve();
                    };
                })
            },
            /**
             * 根据图片宽度设置slider-window, slider-container宽度
             */
            setWidthStyle: function () {
                this.getImageWidth().then(() => {
                    this.$set(this.sliderWindowStyle, "width", `${this.imageWidth}px`);
                    this.$set(this.sliderContainerStyle, "width", `${this.imageWidth * this.virtualImageList.length}px`);
                    this.imageLoaded = true;
                })
            },
            /**
             * 初始化dotActiveList, 第一项为true, 其余false
             */
            initDotActiveList: function () {
                this.dotActiveList[0] = true;
                for (let i = 1; i < this.imageList.length; i++) {
                    this.dotActiveList[i] = false;
                }
            },
            init: function () {
                this.setWidthStyle();
                this.initDotActiveList();
                this.inv();
            },
            /**
             * 跳转图片
             * @param index 要跳转的图片索引, 从0开始
             */
            goto: function (index) {
                return new Promise((resolve) => {
                    clearTimeout(this.timeID);
                    this.$set(this.sliderContainerStyle, "left", `-${this.imageWidth * index}px`);
                    this.$set(this.sliderContainerStyle, "transition", `left ${this.during}ms`);
                    this.currentIndex = index;
                    if (index === this.imageList.length) {
                        this.initDotActiveList();
                    } else {
                        for (let i = 0; i < this.dotActiveList.length; i++) {
                            if (index === i) {
                                this.dotActiveList[i] = true;
                            } else {
                                this.dotActiveList[i] = false;
                            }
                        }
                    }
                    this.timeID = setTimeout(() => {
                        resolve();
                    }, this.during);
                });
            },
            clickDot: function (index) {
                clearInterval(this.invID);
                this.goto(index).then(() => {
                    this.inv();
                });
            },
            /**
             * 下一张图片
             */
            next: function () {
                // 当下一张为第一张时，跳转到额外添加到最后的第一张图片，当图片跳转完成后，直接left=0切换到真正的第一张图片以达到无缝切换的效果
                if (this.currentIndex === this.imageList.length - 1) {
                    this.goto(this.imageList.length).then(() => {
                        this.currentIndex = 0;
                        this.$set(this.sliderContainerStyle, "left", "0px");
                        this.$set(this.sliderContainerStyle, "transition", "left 0s");
                    });
                } else {
                    this.goto(this.currentIndex + 1);
                }
            },
            inv: function () {
                this.invID = setInterval(() => {
                    this.next();
                }, this.during + 1000);
            }
        }
    }
</script>

<style scoped>
    .slider {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: inherit;
        margin: auto;
    }

    .slider-window {
        height: inherit;
        overflow: hidden;
    }

    .slider-container {
        height: inherit;
        position: relative;
        left: 0;
    }

    .slider-item {
        margin: 0;
        padding: 0;
        float: left;
    }

    .dot {
        position: relative;
        margin-top: -25px;
    }

    .dot-item {
        margin: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.3);
        float: left;
        cursor: pointer;
    }

    .active {
        background-color: rgba(0, 0, 0, 0.6);
    }
</style>
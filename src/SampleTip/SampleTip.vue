<template>
    <div class="sample-tip" v-show="show" :class="direction">
        <div class="tip-content">{{ text }}</div>
    </div>
</template>

<script>
    export default {
        name: "sample-tip",
        data: function () {
            return {
                show: false
            }
        },
        props: {
            text: "",
            tipEl: null,
            direction: ""
        },
        mounted: function () {
            this.showTip();
        },
        methods: {
            showTip: function () {
                this.tipEl.addEventListener("mouseover", () => {
                    this.show = true;
                });
                this.tipEl.addEventListener("mouseout", this.hideTip);
            },
            hideTip: function () {
                this.show = false;
            }
        }
    }
</script>

<style scoped>
    .sample-tip {
        position: absolute;
        background-color: #303133;
        color: #fff;
        border-radius: 5px;
        padding: 5px;
        font-size: smaller;
        white-space: nowrap;
        z-index: 1;
        width: fit-content;
        margin: 0;
    }

    .top {
        bottom: 100%;
        margin-bottom: 5px;
    }

    .top:after {
        content: "";
        width: 0;
        height: 0;
        border-top: 10px solid #303133;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        position: absolute;
        top: 100%;
        left: 15px;
    }

    .right {
        left: 100%;
        top: -50%;
        margin-left: 5px;
    }

    .right:after {
        content: "";
        width: 0;
        height: 0;
        border-right: 10px solid #303133;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        position: absolute;
        right: 100%;
        bottom: 15px;
    }

    .bottom {
        top: 100%;
        margin-top: 5px;
    }

    .bottom:after {
        content: "";
        width: 0;
        height: 0;
        border-bottom: 10px solid #303133;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        position: absolute;
        bottom: 100%;
        left: 15px;
    }

    .left {
        right: 100%;
        top: -50%;
        margin-right: 5px;
    }

    .left:after {
        content: "";
        width: 0;
        height: 0;
        border-left: 10px solid #303133;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        position: absolute;
        left: 100%;
        top: 25%;
    }
</style>
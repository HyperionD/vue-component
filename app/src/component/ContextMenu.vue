<template>
    <transition name="fade">
        <!-- mousedown.stop 阻止事件传播, 防止触发document中绑定的hideMenu事件 -->
        <div v-show="show" class="context-menu" :style="style" @mousedown.stop @click.stop="hideMenu" ref="contextMenu">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "context-menu",
        data: function () {
            return {
                show: false,
                style: {
                    left: 0,
                    top: 0
                }
            };
        },
        props: {
            el: null
        },
        computed: {
            screenWidth: function () {
                return document.body.offsetWidth;
            },
            screenHeight: function () {
                return document.body.offsetHeight
            }
        },
        mounted: function () {
            this.init();
        },
        watch: {
            el: function () {
                this.init();
            }
        },
        methods: {
            init: function () {
                if (this.el !== null) {
                    this.el.addEventListener("contextmenu", this.showMenu);
                }
            },
            showMenu: function (e) {
                this.show = true;
                // 屏幕边缘检测
                this.$nextTick(() => {
                    const menuWidth = this.$refs.contextMenu.offsetWidth;
                    const menuHeight = this.$refs.contextMenu.offsetHeight;
                    if (e.clientX + menuWidth > this.screenWidth) {
                        this.style.left = `${this.screenWidth - menuWidth}px`;
                    } else {
                        this.style.left = `${e.clientX}px`;
                    }
                    if (e.clientY + menuHeight > this.screenHeight) {
                        this.style.top = `${this.screenHeight - menuHeight}px`;
                    } else {
                        this.style.top = `${e.clientY}px`;
                    }
                });
                // 阻止浏览器的右键菜单
                e.preventDefault();
                // 在其它位置点击鼠标隐藏菜单
                document.addEventListener("mousedown", this.hideMenu);
            },
            hideMenu: function () {
                this.show = false;
                document.removeEventListener("mousedown", this.hideMenu);
            }
        }
    }
</script>

<style scoped>
    .context-menu {
        position: absolute;
        cursor: pointer;
        border-radius: 2px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.12), 0 0 3px rgba(0, 0, 0, 0.6);
        background-color: #fff;
        min-width: 100px;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
</style>

<style>
    .context-menu > * {
        padding: 5px 10px;
    }

    .context-menu > *:hover {
        background-color: #f0f0f0;
    }
</style>
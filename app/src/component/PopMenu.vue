<template>
    <div class="pop-menu" ref="popMenu">
        <div class="item" @click.stop="clickPopMenu">
            <div class="text">{{ text }}</div>
            <div v-show="triangle" class="triangle"></div>
        </div>
        <transition name="fade">
            <!-- 不使用.stop，允许事件冒泡，点击弹出菜单中的项目后触发document上绑定的click事件，使全部层级菜单自动隐藏而不是只隐藏本级菜单-->
            <div class="menu" :class="direction" v-show="show" :style="style" @click="hideMenu">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "pop-menu",
        data: function () {
            return {
                show: false,
                style: {}
            }
        },
        props: {
            text: {
                type: String,
                default: "",
                required: true
            },
            direction: {
                type: String,
                default: "right"
            },
            triangle: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            hideMenu: function () {
                this.show = false;
                document.removeEventListener("click", this.hideMenu);
            },
            clickPopMenu: function () {
                if (this.show === false) {
                    this.show = true;
                    // 在页面其它位置点击后隐藏
                    document.addEventListener("click", this.hideMenu);
                } else {
                    this.hideMenu();
                }
            }
        }
    }
</script>

<style scoped>
    .pop-menu {
        cursor: pointer;
        position: relative;
    }

    .item {
        display: flex;
        align-items: center;
    }

    .item .text {
        flex-grow: 1;
    }

    .triangle {
        margin-left: 10px;
        width: 0;
        height: 0;
        border-left: 10px solid #4b4b4b;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
    }

    .menu {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.12), 0 0 3px rgba(0, 0, 0, 0.6);
        border-radius: 2px;
        background-color: #fff;
        position: absolute;
        white-space: nowrap;
        z-index: 1;
    }

    .right {
        left: 100%;
        top: 0;
    }

    .bottom {
        left: 0;
        top: 100%;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
</style>

<style>
    .menu > * {
        padding: 5px;
    }

    .menu > *:hover {
        background-color: #f0f0f0;
    }
</style>
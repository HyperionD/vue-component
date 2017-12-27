<template>
    <div class="popmenu" ref="popMenu">
        <!-- @mouseup.stop 在右键菜单组件contextmenu中嵌套popmenu时，点击菜单不触发mouseup事件隐藏右键菜单 -->
        <div class="item" @click.stop="clickPopMenu" @mouseup.stop>
            <div class="text">{{ text }}</div>
            <div class="triangle"></div>
        </div>
        <transition name="fade">
            <!-- 不使用.stop，允许事件冒泡，点击弹出菜单中的项目后触发document上绑定的click事件，使全部层级菜单自动隐藏而不是只隐藏本级菜单-->
            <div class="menu" v-show="show" :style="style" @click="hideMenu">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "PopMenu",
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
                    const popItemWidth = this.$refs.popMenu.offsetWidth;
                    const popItemHeight = this.$refs.popMenu.offsetHeight;
                    this.style.marginLeft = `${popItemWidth - 6}px`;
                    this.style.marginTop = `-${popItemHeight}px`;
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
    .popmenu {
        cursor: pointer;
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
        border-left: 10px solid #000;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
    }

    .menu {
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12), 1px 1px 2px rgba(0, 0, 0, 0.24);
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        background-color: #fff;
        position: absolute;
        white-space: nowrap;
    }

    .menu > * {
        padding: 5px;
    }

    .menu > *:hover {
        background-color: #e0e0e0;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
</style>
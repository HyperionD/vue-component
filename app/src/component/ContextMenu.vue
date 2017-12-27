<template>
    <transition name="fade">
        <!-- mousedown.stop 阻止事件传播, 点击弹出的菜单项不触发hideMenu事件, 而是触发菜单项绑定的事件 -->
        <div v-show="show" class="contextmenu" :style="style" @mousedown.stop>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "contextMenu",
        data: function () {
            return {
                show: false,
                style: {}
            };
        },
        props: {
            el: null
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
                    // 在其它位置点击鼠标隐藏菜单, 通过.stop 修饰符阻止传播到弹出菜单
                    document.addEventListener("mousedown", this.hideMenu);
                    // 点击菜单项目后隐藏菜单
                    document.addEventListener("click", this.hideMenu);
                }
            },
            showMenu: function (e) {
                this.show = true;
                this.style.left = `${e.clientX}px`;
                this.style.top = `${e.clientY}px`;
                // 阻止浏览器的右键菜单
                e.preventDefault();
                // 在其它位置点击鼠标隐藏菜单, 通过.stop 修饰符阻止传播到弹出菜单
                document.addEventListener("mousedown", this.hideMenu);
                // 点击菜单项目后隐藏菜单
                document.addEventListener("click", this.hideMenu);
            },
            hideMenu: function () {
                this.show = false;
                document.removeEventListener("mousedown", this.hideMenu);
                document.removeEventListener("click", this.hideMenu);
            }
        }
    }
</script>

<style scoped>
    .contextmenu {
        position: absolute;
        cursor: pointer;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        background-color: #fff;
        padding: 5px 10px;
        min-width: 100px;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
</style>
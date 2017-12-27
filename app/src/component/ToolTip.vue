<template>
    <div class="tool-tip" @mouseover.stop="showTip" @mouseout.stop="hideTip" ref="toolTip">
        <slot></slot>
        <transition name="fade">
            <div v-show="toolTipShow" class="tip" :class="position">{{ content }}</div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "tool-tip",
        data: function () {
            return {
                toolTipShow: false
            }
        },
        props: {
            content: {
                type: [String, Number],
                required: true
            },
            position: {
                default: "top"
            }
        },
        methods: {
            showTip: function () {
                this.toolTipShow = true;
            },
            hideTip: function () {
                this.toolTipShow = false;
            }
        }
    }
</script>

<style scoped>
    .tool-tip {
        position: relative;
        width: fit-content;
    }

    .tip {
        position: absolute;
        background-color: #303133;
        color: #fff;
        border-radius: 5px;
        padding: 5px;
        font-size: smaller;
        white-space: nowrap;
        z-index: 1;
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
        top: 0;
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
        top: 0;
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

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
</style>
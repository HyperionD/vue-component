<template>
    <div class="base-badge">
        <p class="content"><slot></slot></p>
        <span class="badge" ref="badge" :style="badgeStyle">{{ finalContent }}</span>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                badgeStyle: {
                    top: "",
                    right: ""
                }
            }
        },
        props: {
            content: [Number, String],
            max: {
                type: [Number, String],
                default: 99
            }
        },
        computed: {
            // 超过max值则显示 max+ 例如：99+
            finalContent: function () {
                if (this.content > this.max) {
                    return `${this.max}+`;
                } else {
                    return this.content;
                }
            }
        },
        mounted: function () {
            // 设置badge位置在右上角
            const badgeEl = this.$refs.badge;
            const badgeElWidth = badgeEl.clientWidth;
            const badgeElHeight = badgeEl.clientHeight;
            this.badgeStyle.right = `-${badgeElWidth / 2}px`;
            this.badgeStyle.top = `-${badgeElHeight / 2}px`;
        }
    }
</script>

<style scoped>
    .base-badge {
        position: relative;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .badge {
        min-width: 15px;
        min-height: 15px;
        padding: 2px 2px;
        border-radius: 15px;
        background-color: #66b0ff;
        position: absolute;
        text-align: center;
        color: #fff;
        font-size: smaller;
    }
</style>
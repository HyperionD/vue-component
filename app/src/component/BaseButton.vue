<template>
    <div class="base-button">
        <button @click="handleClick" :class="type"><slot></slot></button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        props: {
            // type="text" 则为文字按钮
            type: {
                default: "normal"
            }
        },
        methods: {
            handleClick: function (e) {
                this.$emit("click", e);
            }
        }
    }
</script>

<style scoped>
    .base-button button {
        padding: 5px 5px;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .normal {
        background-color: #66b0ff;
        color: #fff;
        border-radius: 5px;
    }

    .normal:hover {
        background-color: #3395ff;
    }

    .text {
        background-color: transparent;
        color: #3395ff;
    }

    .text:hover {
        color: #66b0ff;
    }
</style>

<template>
    <div class="sample-button">
        <button @click="handleClick" :class="type"><slot></slot></button>
    </div>
</template>

<script>
    export default {
        name: "sample-button",
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
    .sample-button button {
        padding: 8px;
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: bold;
    }

    .normal {
        background-color: #3395ff;
        color: #fff;
        border-radius: 2px;
    }

    .normal:hover {
        background-color: #66b0ff;
    }

    .text {
        background-color: transparent;
        color: #3395ff;
    }

    .text:hover {
        color: #66b0ff;
        text-decoration: underline;
    }
</style>

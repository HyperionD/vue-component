<template>
    <div class="sample-button">
        <button @click="handleClick" :class="type" :open="clicked"><slot></slot></button>
    </div>
</template>

<script>
    export default {
        name: "sample-button",
        data: function () {
            return {
                clicked: false
            }
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
                if (this.type === "menu") {
                    this.clicked = !this.clicked;
                }
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

    .close {
        background-color: transparent;
        color: #66b0ff;
    }

    .close::before {
        content: "\2716";
    }

     .close:hover {
        transform: rotate(360deg);
        transition: transform 1s;
    }

    .menu {
        width: 20px;
        height: 15px;
        background: repeating-linear-gradient(#3395ff, #3395ff 3px, transparent 3px, transparent 6px);
    }

    .menu[open] {
        transform: rotate(90deg);
        transition: transform .5s;
    }
</style>

<template>
    <transition name="fade">
        <div v-show="show" class="popBox">
            <div class="box">
                <div class="title">
                    <div class="title_text">{{ popBoxOpt.title }}</div>
                    <div class="close" @click="cancelBox"></div>
                </div>
                <div class="message">
                    {{ popBoxOpt.message }}
                </div>
                <div class="btn">
                    <input type="button" :value="popBoxOpt.buttonText" class="confirm" @click="clickButton"/>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ConfirmBox",
        data: function () {
            return {
                show: false,
                popBoxOpt: {
                    title: "消息框",
                    message: "Hello",
                    buttonText: "确认",
                    callbakFunc: function () {}
                }
            }
        },
        mounted: function () {
            this.$bus.$on("popBox", (options) => {
                if (options !== undefined) {
                    this.popBoxOpt = {...this.popBoxOpt, ...options};
                }
                this.showBox();
            })
        },
        methods: {
            prevent: function (e) {
                e.preventDefault()
            },
            showBox: function () {
                this.show = true;
                document.addEventListener("mousewheel", this.prevent);
            },
            cancelBox: function () {
                this.show = false;
                document.removeEventListener("mousewheel", this.prevent);
            },
            clickButton: function () {
                this.cancelBox();
                this.popBoxOpt.callbakFunc();
            }
        }
    }
</script>

<style scoped>
    .popBox {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    .box {
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 30%;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.24);
    }

    .title {
        display: flex;
        justify-content: flex-start;
        background-color: #66b0ff;
        padding: 10px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        color: #fff;
    }

    .title_text {
        flex-grow: 1;
    }

    .close:before {
        content: "\2716";
    }

    .close:hover {
        transform: rotate(360deg);
        transition: transform 1s;
    }

    .message {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 20px;
    }

    .btn {
        display: flex;
        justify-content: flex-end;
        padding: 10px;
    }

    .btn input {
        margin: 0 10px;
        padding: 5px 10px;
    }

    .confirm {
        border: none;
        border-radius: 3px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.24);
        outline: none;
        background-color: #66b0ff;
        color: #fff;
    }

    .confirm:hover {
        background-color: #3395ff;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
</style>
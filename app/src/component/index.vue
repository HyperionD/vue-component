<template>
    <div id="index">
        <div class="component">
            <p>右键菜单</p>
            <div id="context-test">点击弹出右键菜单</div>
        </div>
        <context-menu :el="context">
            <p @click="hello">Hello</p>
            <p @click="hello">Hello Again</p>
            <pop-menu text="Test">
                <p>Pop in context menu</p>
            </pop-menu>
        </context-menu>

        <div class="component">
            <p>弹出菜单</p>
            <div id="popmenu-test">
                <pop-menu text="File" direction="bottom" :triangle="false">
                    <p @click="hello">New</p>
                    <pop-menu text="Save">
                        <p>Save as ...</p>
                        <pop-menu text="Export">
                            <p>Export to html</p>
                            <p @click="hello">Export to pdf</p>
                            <pop-menu text="Test">
                                <p>Test Pop</p>
                            </pop-menu>
                        </pop-menu>
                    </pop-menu>
                    <p>Exit</p>
                </pop-menu>
                <pop-menu text="Edit" direction="bottom" :triangle="false">
                    <p>Modify</p>
                    <p>Update</p>
                </pop-menu>
            </div>
        </div>

        <div class="component">
            <div>弹出消息框</div>
            <input type="button" value="弹出" @click="testPopBox"/>
            <confirm-box></confirm-box>
        </div>

        <div class="component slider-test">
            <slider :imageList="imageList"></slider>
        </div>

        <div class="component">
            <base-badge class="badge-test" content="100"><div>大于99</div></base-badge>
            <base-badge class="badge-test" content="10">小于99</base-badge>
        </div>

        <div class="component">
            <base-button class="button-test">按钮</base-button>
            <base-button class="button-test" @click="hello" type="text">文字按钮</base-button>
        </div>

        <div class="component" id="tooltip">
            <tool-tip content="ToolTip提示-上">
                <div class="tooltip-test">上方提示</div>
            </tool-tip>

            <tool-tip content="ToolTip提示-右" position="right">
                <div class="tooltip-test">右侧提示</div>
            </tool-tip>

            <tool-tip content="ToolTip提示-下" position="bottom">
                <div class="tooltip-test">下方提示</div>
            </tool-tip>

            <tool-tip content="ToolTip提示-左" position="left">
                <div class="tooltip-test">左侧提示</div>
            </tool-tip>
        </div>

        <div class="component">
            <p>zzzzzzzzzzzzzzzz</p>
            <p>zzzzzzzzzzzzzzzz</p>
        </div>
    </div>
</template>

<script>
    import ContextMenu from "./ContextMenu.vue";
    import PopMenu from "./PopMenu.vue";
    import ConfirmBox from "./ConfirmBox.vue";
    import Slider from "./Slider.vue";
    import BaseBadge from "./BaseBadge.vue";
    import BaseButton from "./BaseButton.vue";
    import ToolTip from "./ToolTip.vue";

    export default {
        data: function () {
            return {
                context: null,
                imageList: ["static/1.jpg", "static/2.jpg", "static/3.jpg", "static/4.jpg"]
            };
        },
        components: {ContextMenu, PopMenu, ConfirmBox, Slider, BaseBadge, BaseButton, ToolTip},
        mounted: function () {
            this.context = document.querySelector("#context-test");
        },
        methods: {
            hello: function () {
                console.log("hello");
            },
            testPopBox: function () {
                this.$bus.$emit("popBox", {
                    callbakFunc: function () {
                        console.log("click");
                    }
                });
            }
        }
    };
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .component {
        margin: 10px 10px;
    }

    #context-test {
        border: 1px solid #bdbdbd;
        padding: 5px 5px;
    }

    #popmenu-test {
        display: flex;
        border: 1px solid #bdbdbd;
        padding: 5px 5px;
    }

    #popmenu-test > div {
        margin: 10px;
    }

    .slider-test {
        width: 100%;
    }

    .badge-test {
        width: 100px;
        height: 30px;
        background-color: #bdbdbd;
        margin: 20px;
    }

    .button-test {
        margin: 20px;
    }

    #tooltip {
        display: flex;
    }

    .tooltip-test {
        padding: 10px;
        border: 1px solid #bdbdbd;
    }
</style>

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
                <pop-menu text="File">
                    <p>New</p>
                    <pop-menu text="Save">
                        <p>Save as ...</p>
                        <pop-menu text="Export">
                            <p>Export to html</p>
                            <p>Export to pdf</p>
                        </pop-menu>
                    </pop-menu>
                    <p>Exit</p>
                </pop-menu>
                <pop-menu text="Edit">
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
    </div>
</template>

<script>
    import ContextMenu from "./ContextMenu.vue";
    import PopMenu from "./PopMenu.vue";
    import ConfirmBox from "./ConfirmBox.vue";
    import Slider from "./Slider.vue";

    export default {
        data: function () {
            return {
                context: null,
                imageList: ["static/1.jpg", "static/2.jpg", "static/3.jpg", "static/4.jpg"]
            };
        },
        components: {ContextMenu, PopMenu, ConfirmBox, Slider},
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
</style>

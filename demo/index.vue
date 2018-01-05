<template>
    <div id="index">
        <sample-tab>
            <tab-item title="按钮组件">
                <div class="code">
                    <div class="source">
                        <div class="code-item">
                            <div>
                                <span class="code-title">常规按钮</span>
                            </div>
                            <div class="code-content">
                                <p>&ltsample-button&gtButton&lt/sample-button&gt</p>
                            </div>
                        </div>
                        <div class="code-item">
                            <div>
                                <span class="code-title">文字按钮</span>
                            </div>
                            <div class="code-content">
                                <p>&ltsample-button type="text"&gt文字按钮&lt/sample-button&gt</p>
                            </div>
                        </div>
                        <div class="code-item">
                            <div>
                                <span class="code-title">关闭按钮</span>
                            </div>
                            <div class="code-content">
                                <p>&ltsample-button type="close"&gt&lt/sample-button&gt</p>
                            </div>
                        </div>
                        <div class="code-item">
                            <div>
                                <span class="code-title">菜单按钮</span>
                            </div>
                            <div class="code-content">
                                <p>&ltsample-button type="menu"&gt&lt/sample-button&gt</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-show">
                        <sample-button>Button</sample-button>
                        <sample-button type="text">文字按钮</sample-button>
                        <sample-button type="close"></sample-button>
                        <sample-button type="menu"></sample-button>
                    </div>
                </div>
            </tab-item>
            <tab-item title="ToolTip组件">
                <div class="code">
                    <div class="source">
                        <div class="code-item">
                            <div>
                                <span class="code-title">上方提示</span>
                            </div>
                            <div class="code-content">
                                <p>&ltp v-tip="tip"&gt上方Tip&lt/p&gt</p>
                            </div>
                        </div>
                        <div class="code-item">
                            <div>
                                <span class="code-title">右方提示</span>
                            </div>
                            <div class="code-content">
                                <p>&ltp v-tip.right="tipRight"&gt右方Tip&lt/p&gt</p>
                            </div>
                        </div>
                        <div class="code-item">
                            <div>
                                <span class="code-title">下方提示</span>
                            </div>
                            <div class="code-content">
                                <p>&ltp v-tip.bottom="tipBottom"&gt下方Tip&lt/p&gt</p>
                            </div>
                        </div>
                        <div class="code-item">
                            <div>
                                <span class="code-title">左方提示</span>
                            </div>
                            <div class="code-content">
                                <p>&ltp v-tip.left="tipLeft"&gt左方Tip&lt/p&gt</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-show">
                        <p class="tip-show" v-tip="tip">上方Tip</p>
                        <p class="tip-show" v-tip.right="tipRight">右方Tip</p>
                        <p class="tip-show" v-tip.bottom="tipBottom">下方Tip</p>
                        <p class="tip-show" v-tip.left="tipLeft">左方Tip</p>
                    </div>
                </div>
            </tab-item>
            <tab-item title="Testabcdefghijklmnopqrstuvwxyz">
                <p>I am Tap Two lalala....</p>
                <sample-button>Button Two</sample-button>
            </tab-item>
        </sample-tab>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tip: "Top",
                tipRight: "Right",
                tipBottom: "Bottom",
                tipLeft: "Lefttttttttttttt"
            };
        },
        methods: {
            test: function () {
                alert("test");
            }
        }
    };
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .code {
        display: flex;
        border: 1px solid #dfdfdf;
        margin: 10px;
    }

    .code-item {
        padding: 10px;
        border-right: 1px solid #dfdfdf;
    }

    .code-title {
        border-bottom: 1px solid #66b0ff;
    }

    .code-content {
        margin-top: 10px;
    }

    .code-show {
        padding: 10px;
        display: flex;
        align-items: center;
    }

    .code-show * {
        margin: 10px;
    }

    .tip-show {
        border: 1px solid #bdbdbd;
    }
</style>

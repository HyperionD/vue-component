<template>
    <div id="index">
        <div class="component">
            <div class="code">
                <div class="code-item">
                    <div>
                        <span class="code-title">常规按钮</span>
                    </div>
                    <div class="code-content">
                        <p>&ltsample-button&gtButton&lt/sample-button&gt</p>
                    </div>
                </div>
                <div class="code-show">
                    <sample-button>Button</sample-button>
                </div>
            </div>

            <div class="code">
                <div class="code-item">
                    <div>
                        <span class="code-title">文字按钮</span>
                    </div>
                    <div class="code-content">
                        <p>&ltsample-button type="text"&gt文字按钮&lt/sample-button&gt</p>
                    </div>
                </div>
                <div class="code-show">
                    <sample-button type="text">文字按钮</sample-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {};
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
        align-items: center;
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
    }
</style>

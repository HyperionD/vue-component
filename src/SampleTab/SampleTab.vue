<template>
    <div class="sample-tab">
        <div class="tab-title-group">
            <div v-for="item in tabList"
                 @click.stop="activeTab(item.id)"
                 class="tab-title-item"
                 :active="$children[item.id].$data.active" v-tip.bottom="item.title">
                <div class="tab-title-text">{{ item.title }}</div>
            </div>
        </div>
        <div class="tab-content-group">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sample-tab",
        data: function () {
            return {
                tabList: []
            }
        },
        mounted: function () {
            this.init();
        },
        methods: {
            init: function () {
                this.$children.forEach((item, index) => {
                    const componentName = this.$children[0].$options.name;
                    if (componentName === "tab-item") {
                        // 生成tabList
                        this.tabList.push({title: item.title, id: index});
                        // 赋予tabItem子组件id
                        item.$data.id = index;
                    }
                });
                this.activeTab(0);
            },
            activeTab: function (id) {
                this.$children.forEach((item) => {
                    item.$emit("clickTab", id);
                })
            },
        }
    }
</script>

<style scoped>
    .tab-title-group {
        display: flex;
        margin-left: 14px;
    }

    .tab-title-item {
        position: relative;
        padding: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .tab-title-item::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: #e2e2e2;
        border: 1px solid rgba(0, 0, 0, .4);
        border-bottom: none;
        border-radius: .5em .5em 0 0;
        transform: scale(1.1, 1.3) perspective(.8em) rotateX(5deg);
        transform-origin: bottom;
    }

    .tab-title-text {
        width: 150px;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.5);
        padding-left: 1em;
        font-size: smaller;
        flex-grow: 1;
    }

    .tab-title-item[active] {
        margin-bottom: -1px;
        z-index: 1;
    }

    .tab-title-item[active] .tab-title-text {
        color: #000;
    }

    .tab-title-item[active]::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: #fff;
        border: 1px solid #3395ff;
        border-bottom: none;
        margin-bottom: -1px;
        border-radius: .5em .5em 0 0;
        transform: scale(1.1, 1.3) perspective(.8em) rotateX(5deg);
        transform-origin: bottom;
    }

    .tab-content-group {
        border-top: 1px solid #3395ff;
        padding-top: 20px;
        z-index: -1;
    }
</style>
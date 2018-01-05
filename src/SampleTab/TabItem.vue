<template>
    <div class="tab-item">
        <div class="content" v-if="active"><slot></slot></div>
    </div>
</template>

<script>
    export default {
        name: "tab-item",
        data: function () {
            return {
                active: false,
                id: ""
            }
        },
        props: [ "title" ],
        mounted: function () {
            this.$on("clickTab", (id) => {
                if (this.id === id) {
                   this.active = true;
                } else {
                    this.active = false;
                }
            })
        }
    }
</script>

<style scoped>

</style>
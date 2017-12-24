import Vue from "../../node_modules/vue/dist/vue";
import index from "./component/index.vue";

const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", { value: bus });

new Vue({
    el: "#app",
    template: "<index />",
    components: {index},
});
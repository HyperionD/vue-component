import Vue from "../../node_modules/vue/dist/vue";
import sampleComponent from "../src/index";
import index from "./index.vue";

Vue.use(sampleComponent);

const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", { value: bus });

new Vue({
    el: "#app",
    template: "<index />",
    components: {index},
});
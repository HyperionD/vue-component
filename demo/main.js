import Vue from "../node_modules/vue/dist/vue";
import index from "./index.vue";

// 每个组件的单独引用
// import sampleButton from "../src/SampleButton/index.js";
// import sampleTab from "../src/SampleTab/index.js";
// import sampleTip from "../src/SampleTip/index.js";
// Vue.use(sampleButton);
// Vue.use(sampleTab);
// Vue.use(sampleTip);

// 引用总组件
import sampleComponent from "../src/index";
Vue.use(sampleComponent);

const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", { value: bus });

new Vue({
    el: "#app",
    template: "<index />",
    components: {index},
});
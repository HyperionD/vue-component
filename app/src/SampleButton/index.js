import sampleButton from "./SampleButton.vue";

sampleButton.install = function (Vue) {
    Vue.component(sampleButton.name, sampleButton);
};

export default sampleButton;
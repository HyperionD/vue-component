import sampleButton from "./SampleButton/index.js";

const components = [
    sampleButton
];

const sampleComponent = {};

sampleComponent.install = function (Vue) {
    components.forEach((component) => {
        Vue.component(component.name, component);
    });
};

export default sampleComponent;
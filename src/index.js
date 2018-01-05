import sampleButton from "./SampleButton/index.js";
import sampleTab from "./SampleTab/index.js";
import sampleTip from "./SampleTip/index.js";

const components = [
    sampleButton,
    sampleTab,
    sampleTip
];

const sampleComponent = {};

sampleComponent.install = function (Vue) {
    components.forEach((component) => {
        // Vue.component(component.name, component);
        Vue.use(component);
    });
};

export default sampleComponent;
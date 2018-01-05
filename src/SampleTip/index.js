import TipDirective from "./directive.js";

const sampleTip = {};

sampleTip.install = function (Vue) {
    Vue.use(TipDirective);
};

export default sampleTip;
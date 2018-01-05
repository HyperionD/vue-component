import sampleTab from "./SampleTab.vue";
import tabItem from "./TabItem.vue";

sampleTab.install = function (Vue) {
    Vue.component(sampleTab.name, sampleTab);
    Vue.component(tabItem.name, tabItem);
};

export default sampleTab;
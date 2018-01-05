import tip from "./SampleTip.vue";

function createChildrenNode(el, idAttr) {
    const childrenEl = document.createElement("div");
    childrenEl.id = idAttr;
    el.appendChild(childrenEl);
    return childrenEl;
}

export default {
    install: function (Vue) {
        Vue.directive("tip", {
            bind: function (el) {
                el.style.position = "relative";
                //生成实例的挂载节点
                createChildrenNode(el, "tipVNode");
            },
            inserted: function (el, binding) {
                // 创建SampleTip.vue 的构造器
                const tipInstance = Vue.extend(tip);

                // 通过修饰器传入方向参数，默认为top
                const modifiers = binding.modifiers;
                let direction = "top";
                if (modifiers.right) {
                    direction = "right";
                } else if (modifiers.bottom) {
                    direction = "bottom";
                } else if (modifiers.left) {
                    direction = "left";
                }

                // 创建实例并挂载实例，传递实例所需的prpps
                new tipInstance({
                    propsData: {
                        text: binding.value,
                        tipEl: el,
                        direction: direction
                    }
                }).$mount("#tipVNode");
            }
        });
    }
}


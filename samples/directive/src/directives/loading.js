import Vue from 'vue';

Vue.directive('loading', {
  /**
   * 指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
   * @param el - 绑定指令的组件渲染元素
   * @param bindings - 指令的参数
   * @param vNode - 绑定指令的vNode
   * @param oldVnode
   */
  bind(el, bindings, vNode, oldVnode) {
    console.error(el, bindings, vNode, oldVnode)
  },
  inserted(el, bindings, vNode, oldVnode) {

  },
  update(el, bindings, vNode, oldVnode) {

  },
  componentUpdated(el, bindings, vNode, oldVnode) {

  },
  unbind(el, bindings, vNode, oldVnode) {

  },
})

### vue 框架

1. 生产环境与开发环境有什么区别?
   我们使用`process.env.NODE_ENV`来区别生产和开发环境，在`vue-cli3`中使用`.env.xxx`来表示不同的构建环境

2. `Vue.extend`方法是做什么用的？什么场景下我们会用到这个api
   `Vue.extend`的参数是一个`组件构造类`， 那么什么是`组件构造类`呢？通常我们再项目中`import xxx from 'xxx.vue'`, 那么我们可以认为这个`xxx`就是一个`组件构造类`, `Vue.extend(CClass)`会创建一个子类，包含`CClass`组件所有的方法属性
   那么我们什么时候会用到这个api呢？通常我们的组件渲染逻辑都在`render()`方法中或者`template`标签中，但是如果我们想通过调用方法的形式在DOM树中插入一个组件，例如通过`this.$message`(element ui框架中)方法，会在DOM树种插入一个提示框，这种情况我们可以通过类似下列的代码来实现

   ```js
   import MessageTemplate from './message-template';
   import Vue from 'vue';
   const MessageConstructor = Vue.extend(MessageTemplate);
   
   function showMessage() {
     instance = new MessageConstructor({
       el: document.createElement('div'),
       data: options
     });
     document.body.appendChild(instance.$el)
   }
   ```

   在了解以上代码的时候，你要知道什么是`VueComponent`以及`VNode`:
   	`VueComponent`即是我们在`xxx.vue`文件中常常用到的`this`, 就是上面代码中的`instance`, 而`VNode`则是挂载在`VueComponent`对象`$vnode`属性下的对象的构造类，就是我们vue框架中常常讲到的`虚拟节点`, 我们学习的过程中，可以在`chrome console`控制台中打印出来，看看他们具有什么样的方法以及属性

3. `Vue.nextTick(callback)`
   这个方法等同于`.vue`文件中的`this.$nextTick(callback)`, `callback`回调时表示上次的数据修改所带来的的DOM变化已经结束，所以我们在`callback`中来 获取更新后的 DOM

4. `Vue.set(obj, property, value)`
   这个方法等同于`this.$set(obj, property, value)`

   ```html
   <template>
   	<p>
       {{obj && obj.text}}
     </p>
   </template>
   ```

   

   ```js
   data() {
     return {
       obj: {}
     }
   }
   ```

   以上代码中，当我们尝试`this.obj.text = '测试'`的时候，我们不能在页面上看到`测试`的显示，在Vue尝试实例化组件的时候并不知道`obj`下面有什么属性, 所以我们应该通过`this.$set(obj, 'text', '测试')`来渲染页面

5. 什么是自定义指令？我们什么情况下需要用到自定义指令？怎么写自定义指令

6. 什么是过滤器？什么场景下我们才会用到过滤器？怎么编写过滤器？
7. 什么是插件？什么场景下我们才会用到插件？怎么写插件？
8. `Vue.mixin`是什么？我们能用它来做些什么？
9. 了解`Vue.Observable`
10. `vue-devtools`的安装与使用
11. vue项目的调试技巧
12. `__vue__`是什么
13. `props`以及`propsData`的关联以及`propsData`的使用
14. 十一个生命周期的意义
15. `provide`、`inject`谈谈vue组件的沟通方式
    `vuex`
    `event-bus`
16. `$parent`
17. `model`属性的意义以及使用
18. `$slots`和`$scopedSlots`的区别以及使用
19. `$refs`的使用
20. `<component v-bind:is="currentView"></component>` is指令的学习
21. `transition`组件的应用
22. `keep-alive`又是个什么鬼？


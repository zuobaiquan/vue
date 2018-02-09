import Vue from 'vue'
import msgBoxComponent from './msgbox.vue'

let msgBox = (options={}) => {
    let msgBoxConstructor = Vue.extend(msgBoxComponent);
    let instance= new msgBoxConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
    // 将单个 confirm instance 的配置合并到默认值中
    Object.assign(instance.$data, options);
    return new Promise((resolve, reject)=>{
        instance.show = true;
        let successBtn = instance.successBtn;
        let cancelBtn = instance.cancelBtn;
        instance.successBtn = () => {
          resolve();
          successBtn();
        }
        instance.cancelBtn = () => {
          reject();
          cancelBtn();
        }
    });
}

export default function(Vue) {
    // //添加全局API
    Vue.prototype.$msgbox = msgBox
}

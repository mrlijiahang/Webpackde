import Vue from './vue.js'
import App from './app.js'
import ljh from './test1.js'
// const jq =require('./test1.js');

// 引入css
// import './main.css'
// import './main.less'

// require('style-loader!css-loader!./main.css');
// import './main.less'
// console.log(jq)
console.log(ljh)
//lijiahang
const num =2

const a=()=>{}

new Vue({
    el: '#app', //挂在到哪上？对应 indexhtml中的id=app
    components: {
        app: App //声明有那些组件
    },
    template: '<app/>' //使用了哪个组件

})


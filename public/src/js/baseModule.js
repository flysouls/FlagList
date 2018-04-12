import '../scss/base.scss';
// import '../scss/module.scss';
// import '../scss/unit.scss';
// import 'element-ui/lib/theme-default/index.css';

import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
// import '../scss/iview.scss';
// import "babel-polyfill";
import Vue from 'vue';
import "./util/filter";
import _ from 'lodash';
import RequestPlugin from './plugin/requestPlugin';
import Cookies from 'js-cookie';
// import VuePreview  from "vue-preview";
// Vue.use(VuePreview);
Vue.use(RequestPlugin);
// Vue.use(iView);
// Vue.use(ElementUI);

//全局混合
Vue.mixin({
    methods:{
        //求和函数
        sum(list){
            return _.sumBy(list,this.parseNumber);
        },
        parseNumber(value){
            let num=value;
            if(!value){
                num=0;
            }else if(value&&isNaN(new Number(value))){
                num=0;
            }
            return new Number(num);
        },
        //获取当前用户
        getLoginInfo () {
            let _loginInfo = Cookies.get("loginInfo") || "";
            _loginInfo=_loginInfo?JSON.parse(_loginInfo):"";
            if(_loginInfo){
                _loginInfo.roleName=unescape(_loginInfo.roleName);
            }
            return _loginInfo;
        },
        //是否登录
        isLogin () {
            return !!this.getLoginInfo();
        },
        //重置弹框loading
        resetLoading(obj){
            obj.loading = false;
            setTimeout(()=>{
                obj.loading = true;
            },50)
        },
        //处理日期选择组件小BUG
        dealTime(times){
            let arr = [];
            arr[0] = new Date(times[0].getFullYear(),times[0].getMonth(),times[0].getDate(),'00','00','00').getTime();
            arr[1] = new Date(times[1].getFullYear(),times[1].getMonth(),times[1].getDate(),'00','00','00').getTime() + (60*60*24-1)*1000;
            return arr;
        },
    }
})
export default class BaseModule{
    options={};
    constructor(){
        console.log('constructor');
    }
    
    init(...vueConfigs){
       _.each(vueConfigs,(item)=>{
       new Vue(item);
       });
    }
}
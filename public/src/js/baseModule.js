import '../scss/base.scss';
import Vue from 'vue';
import _ from 'lodash';

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
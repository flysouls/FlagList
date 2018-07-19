import BaseModule from '../../baseModule';
import App from './app';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

class Main extends BaseModule{}
let store = new Vuex.Store({
    state: {
        testval: '444444',
    },
    mutations: {
        uptestval (state, str) {
            state.testval = str;
        },
    }
})


new Main().init({
    template:'<app :options="options"></app>',
    el:'#app',
    store,
    data:function(){
        return {
            options:{}
        }
    },
    components:{App}
})
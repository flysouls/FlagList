<template>
    <div id="app">
        <h1>Vuex初探</h1>
        <show :value="testval"></show>
        <test :value="testval" @changeVal="changeTestVal"></test>
    </div>
</template>
<script>
    import test from '../../plugin/testVuex';
    import show from '../../plugin/showVuex';

    export default {
        name:'App',
        data:()=>{
            return {
                testval:"111111",
            }
        },
        methods:{
            changeTestVal(val){
                this.testval = val
            }
        },
        components:{
            test,
            show,
        }
    }
</script>
<style>
    .props{
        background: skyblue
    }
    .vuex{
        background: pink
    }
</style>

<template>
    <div id="app">
        <h1>我的个人简历</h1>
    </div>
</template>
<script>

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

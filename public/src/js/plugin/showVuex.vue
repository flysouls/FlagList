<template>
    <div>
        <div>
            <span>对照组</span>
            <p>{{value}}</p>
            <p>{{testval}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        name:"testshow",
        props:['value'],
        data:()=>{
            return {
                //
            }
        },
        computed:{
            testval(){
                return this.$store.state.testval
            },
        }
    }
</script>
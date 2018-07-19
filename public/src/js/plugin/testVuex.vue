<template>
    <div>
        <div class="props">
            <p>props</p>
            <p>{{value}}</p>
            <input type="text" v-model="value">
        </div>
        <div class="vuex">
            <p>vuex</p>
            <p>{{valuex}}</p>
            <input type="text" v-model="valuex" @input="uptestval">
        </div>
    </div>
</template>
<script>
    export default{
        name:"testvuex",
        props:['value'],
        data:()=>{
            return {
                //
            }
        },
        watch:{
            value(newval,oldval){
                this.$emit("changeVal",newval);
            }
        },
        computed:{
            valuex(){
                return this.$store.state.testval
            }
        },
        methods:{
            uptestval(ev){
                let val = ev.currentTarget.value;
                this.$store.commit('uptestval',val);
            }
        }
    }
</script>
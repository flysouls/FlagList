<template>
  <div id="app">
    <h2>我的测试网站1234567890-</h2>
    <h1>{{a}}</h1>
    <a @click="show">点我</a>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data: () => {
    return {
      a:"aaaa"
    }
  },
  watch:{
  },
  computed: {
  },
  mounted(){
    console.log("页面通了");
  },
  methods:{
    show(){
      var xx = [1,2,3,4,5,6,7,7];
      alert(this.sum(xx))
    }
  },
  components: {
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

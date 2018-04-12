<template>
  <div id="app">
    <h2>我的个人网站-</h2>
    <h1>{{a}}</h1>
    <h3>生活就像在黑屋子里洗衣服，你不知道洗干净没有，只能一遍一遍的洗。</h3>
    <h3>直到那一天到来，你会发现认真洗过的衣服很干净，以后你每次穿都会感谢当初洗衣服的日子。</h3>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {
      a:"male"
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

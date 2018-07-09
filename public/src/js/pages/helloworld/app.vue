<template>
  <div id="app">
    <canvas id="canvas"></canvas>
    <h2>{{title}}</h2>
    <h5>{{a}}</h5>
    <h3>遍一遍的洗。&lt;br&gt;直到那</h3>
    <h3 v-html='text'></h3>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {
      a: "对，你没看错，就是空白页面",
      text: window.p_text,
      title: window.p_title,
      PR: window.devicePixelRatio || 1, // dpr
      WIDTH: window.innerWidth,
      HEIGHT: window.innerHeight,
      F: 90,
      q: [], // 俩个点（三角形的一条边）
      r: 0, // 取色sin(r)*256
      u: Math.PI*2,
      v: Math.sin,
      context: undefined
    }
  },
  watch:{
  },
  computed: {
  },
  mounted(){
    var canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');
    canvas.width = this.WIDTH * this.PR;
    canvas.height = this.HEIGHT * this.PR;
    this.context.scale(this.PR, this.PR);
    this.context.globalAlpha = 0.6;
    document.onclick = this.i;
    // document.ontouchstart = this.i;
    this.i();
  },
  methods:{
    i(){
      this.r = this.random();
      this.context.clearRect(0, 0, this.WIDTH, this.HEIGHT);
      //定义最左边俩个点的纵向跨度为2F
      this.q=[{x: 0,y: this.HEIGHT * 0.7 + this.F},{x: 0,y: this.HEIGHT * 0.7 - this.F}];
      while(this.q[1].x < this.WIDTH + this.F) this.draw(this.q[0], this.q[1]);
    },
    random(){
      return Math.random();
    },
    y(p){
      // z()*2-1 小于0的几率较大 => y将减小
      var t = p + (this.random()*2 - 1.1) * this.F;
      return (t > this.HEIGHT || t < 0) ? y(p) : t;
    },
    c2c(cn){
      //将10进制转为16进制
      return Math.floor(Math.abs(cn)).toString(16);
    },
    draw(i,j){
        this.context.beginPath()
        this.context.moveTo(i.x, i.y);
        this.context.lineTo(j.x, j.y);
        var k = j.x + (this.random()*2-0.25)*this.F,
            n = this.random(j.y);
        this.context.lineTo(k, n);
        this.context.closePath();
        this.r += 0.2;
        // x.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16)
        // 尤大原版获取颜色的方法...需要理解位运算(保证了每个色值最小为127).以下是简化版
        this.context.fillStyle = `#${this.c2c(this.v(this.r)*256)}${this.c2c(this.v(this.r+this.u/4)*256)}${this.c2c(this.v(this.r+(this.u/2))*256)}`;
        this.context.fill();
        this.q[0] = this.q[1];
        this.q[1] = {x:k,y:n};
    }
  },
  components: {
  }
}
</script>

<style>
  #canvas{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:0;
    pointer-events:none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

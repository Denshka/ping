<template>
  <div style="margin-top: 72px;">
    <b-container>
      <div ref="canvas"></div>
      <b-btn>Change color</b-btn>
    </b-container>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      script: null,
      ps: null,
      x: 0,
      y: 0,
      canvas: null
    }
  },
  mounted () {
    this.script = p => {
      this.x = 100
      this.y = 100

      p.setup = _ => {
        this.canvas = p.createCanvas(600, 420)
        this.canvas.parent(this.$refs.canvas)
        p.frameRate(60)
      }

      p.draw = _ => {
        p.background(0)
        p.fill(255)
        p.rect(this.x, this.y, 50, 50)
        this.x += 1
      }
    }
    const P5 = require('p5')
    this.ps = new P5(this.script)
    console.log(this.ps)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

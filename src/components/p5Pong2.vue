
<template>
<div class='sketch' id="sketch">
<header>
<h1>Pong</h1>
</header> 
</div>
</template>


<script>
import sketch from './sketch.js'
import p5 from 'p5'
export default {
  name: 'p5Pong2',
  data () {
    return {
      p5Pong2: null,
    }
  }, 
  mounted() {
        this.p5Pong2 = new p5(sketch, document.getElementById('sketch'))
  },
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
    font-weight: normal;
    font-family: Verdana;
    text-align: center;
    color: #FA0303;
    border: 3px solid red;
    background-color: orange;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0px;
}
a {
  color: #FF0000;
}
#sketch {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0%;
    top: 0%;
    border: 0px solid black;
}
</style>


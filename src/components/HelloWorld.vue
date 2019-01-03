<template>
  <div class="hello">
    <h3><font size="+7">NQD Games</font></h3>
    <h1>{{ msg }}</h1>
    <h2><font size="+7">Jeux :</font> </h2>
    <ul>
      <li>
        <a
          style="text-decoration:none"
          href="http://localhost:8080/#/p5Pong"
          target="_blank"
        >
          Pong-game
        </a>
      </li>
    </ul>
    <ul id="menu">
      <li>
        <a
          style="text-decoration:none"
          href="http://localhost:8080/#/snake"
          target="_blank"
        >
          Snake
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }.hello
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  border: 1px solid blue;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  background-color: blue;
  text-align: center;
  padding: 10px;
}
  h1, h2, h3 {
  font-weight: normal;
  font-family: Verdana;
  text-align: center;
  color: #FA0303;
  border: 3px solid red;
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
  color: #0000FF;
}
ul {
 padding:0;
 margin:0;
 list-style-type:none;
 }
li {
 text-align: center;
 }
ul li a {
 display:block;
 float:left;
 width:300px;
 background-color:#FF0000;
 color:black;
 text-decoration:none;
 padding:5px;
 border:2px solid;
 border-color:#DCDCDC #696969 #696969 #DCDCDC;
 }
ul li a:hover {
 background-color: yellow;
 border-color:#696969 #DCDCDC #DCDCDC #696969;
 }
</style>

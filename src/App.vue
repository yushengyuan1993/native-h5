<template>
  <div id="app">
    <router-view></router-view>

    <!-- 底部菜单 -->
    <kz-footer></kz-footer>
  </div>
</template>

<script>
import kzFooter from './components/footer'

export default {
  name: 'App',
  components: {
    kzFooter
  },
  data () {
    return {
      
    }
  },
  mounted () {

  },
  methods: {
    
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #251B18;
  font-size: 0.373333rem;
}
ul,ol,li,h1,h2,h3,h4,h5,h6,input,button,p,th,td { 
  margin: 0; 
  padding: 0; 
}
ol,ul,li { 
	list-style: none; 
}
h1,h2,h3,h4,h5,h6{
  font-weight: normal;
  font-size: inherit;
}
body a {
  color: #272424;
}
img { 
	border: none; 
	vertical-align: bottom;
}
.clearfix {
  display: inline-block;
  content: '';
  clear: both;
  width: 100%;
}
.lf {
  float: left;
}
.rt {
  float: right;
}
</style>

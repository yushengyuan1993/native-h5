<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted () {
    let p = new Promise((resolve, reject) => {
      if (1>0) {
        resolve('ysy')
      }
    })
    p.then(res => {
      this.warn(res);
    })
  },
  methods: {
    warn (res) {
      setTimeout(() => {
        let i = 1;
        // !!i && alert(res)
      }, 1000);
    }
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

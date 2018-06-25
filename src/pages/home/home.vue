<template>
  <div class="home">
    <h1 @click="sheetVisible=!sheetVisible">home</h1>
    <mt-actionsheet
    :actions="actions"
    v-model="sheetVisible">
  </mt-actionsheet>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      actions: [
        {
          name:'拍照',
          method: this.pop
        }
      ],
      sheetVisible: false
    }
  },
  mounted () {
    axios.post('http://test-keepapi.kuaizaixuetang.com/course/list', {
      
    })
    .then(res => {
      let data = res.data;
      if (data.code === 0 && data.data.length > 0) {
        this.list = data.data;
      }
    })
    .catch(err => {
      console.error(err);
    })
  },
  methods: {
    pop () {
      alert('拍照成功！')
    }
  }
}
</script>

<style scoped lang="scss">

</style>

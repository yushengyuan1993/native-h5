<template>
  <div class="footer" ref="footer">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1" data-id="tab1">
        <img slot="icon" src="static/icons/tab1_1.png" data-id="tab1" data-st="0">
        选课
      </mt-tab-item>
      <mt-tab-item id="tab2" data-id="tab2">
        <img slot="icon" src="static/icons/tab2_0.png" data-id="tab2" data-st="0">
        我的学习
      </mt-tab-item>
      <mt-tab-item id="tab3" data-id="tab3">
        <img slot="icon" src="static/icons/tab3_0.png" data-id="tab3" data-st="0">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      selected: 'tab1'
    }
  },
  mounted () {
    
  },
  methods: {
    
  },
  watch: {
    selected (newVal, oldVal) {
      let icons = this.$refs.footer.querySelectorAll('img');
      icons.forEach(el => {
        el.setAttribute('data-st', '0');
        el.setAttribute('src', 'static/icons/'+el.getAttribute('data-id')+'_0.png');
        if (el.getAttribute('data-id') == newVal) {
          el.setAttribute('data-st', '1')
          el.setAttribute('src', 'static/icons/'+newVal+'_1.png')
        }
      })
    }
  }
}
</script>

<style lang="scss">
.footer {
  .mint-tabbar {
    border-top: 1px solid #E5E5E5;
    background-color: #fff;
  }
  .mint-tab-item {
    color: #999999;
    padding: 0.106667rem 0;
    &.is-selected {
      background-color: #fff;
      color: #251B18;
    }
    .mint-tab-item-icon {
      width: 0.746667rem;
      height: 0.746667rem;
    }
  }
}
</style>

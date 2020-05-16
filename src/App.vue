<template>
  <div id="app">
    <el-row class="row-bg" justify="center" type="flex">
      <el-menu :default-active="activeIndex" @select="handleSelect" mode="horizontal">
        <el-menu-item index="1">{{$t('menu.index')}}</el-menu-item>
        <el-menu-item index="2">{{$t('menu.doc')}}</el-menu-item>
        <el-menu-item index="3">{{$t('menu.download')}}</el-menu-item>
        <el-menu-item index="4">{{$t('menu.perf')}}</el-menu-item>
        <el-menu-item index="5">{{$t('menu.playground')}}</el-menu-item>
        <el-menu-item index="6">{{$t('menu.package')}}</el-menu-item>
      </el-menu>
    </el-row>
    <el-row class="row-bg" justify="center" type="flex">
      <router-view></router-view>
    </el-row>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        activeIndex: '1',
        routerMap: {
          "1": "/home",
          "2": "/documentation",
          "3": "/download",
          "4": "/performance",
          "5": "/playground",
          "6": "/package",
        }
      }
    },
    methods: {
      // eslint-disable-next-line no-unused-vars
      handleSelect(key, _) {
        this.$router.push(this.routerMap[key]);
      }
    }
  }
</script>

<style>
  .el-menu-item {
    font-size: 26px !important;
  }

</style>

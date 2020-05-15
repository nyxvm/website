<template>
    <div id="app">
        <el-row type="flex" class="row-bg" justify="center">
            <el-menu align="center" :default-active="activeIndex" @select="handleSelect" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">文档</el-menu-item>
            <el-menu-item index="3">下载</el-menu-item>
            <el-menu-item index="4">性能</el-menu-item>
            <el-menu-item index="5">Playground</el-menu-item>
            <el-menu-item index="6">包管理</el-menu-item>
        </el-menu>
        </el-row>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                activeIndex: '1',
                routerMap:{
                    "1":"/home",
                    "2":"/documentation",
                    "3":"/download",
                    "4":"/performance",
                    "5":"/playground",
                    "6":"/package",
                }
            }
        },
        methods: {
            // eslint-disable-next-line no-unused-vars
            handleSelect(key, _) {
                console.log(this.routerMap[key])
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <div class="tabbar">
        <van-tabbar route active-color='#f00'>
            <van-tabbar-item replace to="/" icon="home-o">
              首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/select" icon="search">
              分类
            </van-tabbar-item>
            <van-tabbar-item replace to="/cart" icon="shopping-cart-o">
              购物车
            </van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="contact">
              我的考拉
            </van-tabbar-item>
          </van-tabbar>
    </div>
</template>
<style lang="less">
</style>
<script>
    import Vue from 'vue';
    import { Tabbar, TabbarItem } from 'vant';
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    export default{
        data(){
            return {

            }
        }
    }
</script>
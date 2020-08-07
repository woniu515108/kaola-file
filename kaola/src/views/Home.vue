<template>
  <div class="home">
    <!-- 搜索,登录注册模块  begin -->
    <van-row class="search_row">
        <van-col span="18"><van-search @click="clickPopup" placeholder="请输入搜索关键词" class="search"/></van-col>
        <!-- 弹出搜索框  begin -->
        <van-popup v-model="showPopup" position="bottom" :style="{ height: '100%' }">
            <van-row class="pop_cont">
                <van-col span="2"><van-icon name="arrow-left" /></van-col>
                <van-search
                    v-model="value"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch">
                    <template #action>
                        <div @click="onSearch">搜索</div>
                    </template>
                </van-search>
            </van-row>
        </van-popup>
        <!-- 弹出搜索框  end -->
        <van-col offset='1' span="5" class="right_cont">
            <router-link to='/register'>注册</router-link>/
            <router-link to='/login'>登录</router-link>
        </van-col>
    </van-row>
    
    <!-- 搜索,登录注册模块  end -->
    <!-- 轮播图模块  begin -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
        <p class="loopNum"><span>{{index+1}}</span>/{{images.length}}</p>
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图模块  end -->
    <!-- 考拉自营标语 begin -->
    <van-row class="kl_title">
      <img src="../assets/klsh.png" alt="" />
    </van-row>
    <!-- 考拉自营标语 end -->
    <!-- 考拉产品list begin -->
    <van-row class="pro_list" type="flex" justify="flex-start">
      <van-col v-for='(item,i) in pro_list' :key='i'><router-link :to='item.link'><van-image :src='item.src' alt="" /></router-link></van-col>
    </van-row>
    <!-- 考拉产品list end -->
    <!-- 活动图  begin -->
    <router-link to='#'><img src="../assets/60.gif" alt="" class='fun' /></router-link>
    <!-- 活动图  end -->
    <!-- 补贴、排行榜 begin -->
    <van-row type="flex" justify="center" class="brandList">
      <van-col span="12">
        <h1>硬核补贴<span>大牌低价补贴</span></h1>
        <ul>
          <li v-for='(item,i) in brand' :key='i'><router-link :to='item.link'><van-image :src="item.src" alt="item" /></router-link></li>
        </ul>
      </van-col>
      <van-col span="12">
        <h1>排行榜<span>跟着买就对了</span></h1>
        <ul>
          <li v-for='(item,i) in redlist' :key='i'><router-link :to='item.link'><van-image :src="item.src" alt="item" /></router-link></li>
        </ul>
      </van-col>
    </van-row>
    <!-- 补贴、排行榜 end -->
    <!-- 商品列表  begin -->
    <van-row class="content_list" gutter='10'>
      <h2>为你推荐</h2>
      <van-col span="12" v-for='(item,i) in contentlist' :key="i">
        <router-link :to='item.link'>
          <van-image :src="item.img" alt="" v-lazy="item.img"/>
          <p class='title'>{{item.title}}</p>
          <span class='price'>¥{{item.price}}</span>
        </router-link>
      </van-col>
    </van-row>
    <!-- 商品列表  end -->
  </div>
</template>
<style lang="less" scoped>
  .home{
    padding-bottom: 50px;
    .search_row{
      display: flex;
      justify-content: space-between;
      padding: 10px;
      .search{
        border:2px solid #f00;
        border-radius:30px;
        height: 30px;
        /deep/ .van-icon-search{
          color: #e31436;
        }
        .van-search__content{
          background: none;
        }
      }
    //   搜索弹出层样式
    .pop_cont {
        line-height: 56px;
        text-align: center;
    }
      .right_cont{
        display: flex;
        justify-content: space-around;
        text-align: center;
        height: 30px;
        line-height: 30px;
        color: #e31436;
        border:1px solid #e31436; 
        padding: 0 4px;
        border-radius: 3px;
        a{
          color: #e31436;
          font-size: 0.75rem;
        }
      }
    }
    /* 轮播图 */
    .van-swipe-item{
      overflow: hidden;
      .van-swipe__indicators{
        position: absolute;
        top:10px;
      }
      img{
        width: 100%;
        height: 225px;
      }
      .loopNum{
        position: absolute;
    bottom: 0.253333rem;
    left: 0.426667rem;
    width: 0.933333rem;
    height: 0.48rem;
    background: url(../assets/loop.png) no-repeat top center;
    background-size: cover;
    font-size: 0.32rem;
    line-height: 0.48rem;
    color: #fff;
    white-space: nowrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
      }
    }
    /* 考拉自营 */
    .kl_title{
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    /* 考拉产品list */
    .pro_list{
      flex-wrap: wrap;
      margin-top: 10px;
      .van-col{
        width: 20%;
        img{
          width: 100%;
        }
      }
    }
    /* 活动git图 */
    .fun{
      width: 100%;
    }
    /* 排行榜，跟着买 */
    .brandList{
      h1{
        font-size: 1rem;
        color:#000;
        padding-left:0.5rem;
        span{
          margin-left: 0.5rem;
          font-size: 0.75rem;
          font-weight: normal;
        }
      }
      ul{
        display: flex;
        justify-content: space-around;
        &:nth-child(1){
          border-right: 1px solid #ccc;
        }
        li{
          width: 50%;
          img{
            width: 100%;
          }
        }
      }
    }
    /* 商品列表 */
    .content_list{
      background: #f2f2f2;
      padding: 10px;
      h2{
        text-align: center;
      }
      .van-col{
        padding: 0.625rem;
        background: #fff;
        border:1px solid #ececec;
        border-radius: 0.25rem;
        margin-bottom: 0.625rem;
        .title{
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size:0.875rem;
          color:#333;
          line-height:1.375rem;
        }
        .price{
          font-size: 1rem;
          font-weight: bold;
          color: #e31436;
        }
      }
    }
  }
</style>
<script>
    import Vue from 'vue';
    import { Search,Lazyload,Swipe, SwipeItem,Col, Row,Image as VanImage,Popup,NavBar,Icon} from 'vant';
    Vue.use(Search,).use(Lazyload).use(Swipe).use(SwipeItem).use(VanImage).use(Col).use(Row).use(Popup).use(NavBar).use(Icon);
    export default {
    name: 'Home',
    data() {
        return {
            searValue:'',
            showPopup:false,
            images: [
                require('../assets/banner1.png'),
                require('../assets/banner2.png'),
                require('../assets/banner3.png'),
            ],
            pro_list:[
                {
                    link:'#',
                    src:require('../assets/dd.png')
                },
                {
                    link:'#',
                    src:require('../assets/dd.png')
                },
                {
                link:'#',
                src:require('../assets/dd.png')
                },
                {
                link:'#',
                src:require('../assets/dd.png')
                },
                {
                link:'#',
                src:require('../assets/dd.png')
                },
                {
                link:'#',
                src:require('../assets/dd.png')
                },
                {
                link:'#',
                src:require('../assets/dd.png')
                },
                {
                link:'#',
                src:require('../assets/dd.png')
                },
                {
                link:'#',
                src:require('../assets/dd.png')
                },
                {
                link:'#',
                src:require('../assets/dd.png')
                }
            ],
            brand:[
                {
                link:'#',
                src:require('../assets/dd.png')
                },
                {
                link:'#',
                src:require('../assets/0.png')
                }
            ],
            redlist:[
                {
                link:'#',
                src:require('../assets/redlist1.jpg')
                },
                {
                link:'#',
                src:require('../assets/redlist2.jpg')
                }
            ],
            contentlist:[
                {
                link:'#',
                img:require('../assets/contentlist1.png'),
                title:'Champion冠军t恤男高端life线草写LOGO印花刺绣小标短袖男女潮美版',
                price:'119'
                },
                {
                link:'#',
                img:require('../assets/contentlist1.png'),
                title:'Champion冠军t恤男高端life线草写LOGO印花刺绣小标短袖男女潮美版',
                price:'119'
                },
                {
                link:'#',
                img:require('../assets/contentlist1.png'),
                title:'Champion冠军t恤男高端life线草写LOGO印花刺绣小标短袖男女潮美版',
                price:'119'
                },
                {
                link:'#',
                img:require('../assets/contentlist1.png'),
                title:'Champion冠军t恤男高端life线草写LOGO印花刺绣小标短袖男女潮美版',
                price:'119'
                },
                {
                link:'#',
                img:require('../assets/contentlist1.png'),
                title:'Champion冠军t恤男高端life线草写LOGO印花刺绣小标短袖男女潮美版',
                price:'119'
                },
                {
                link:'#',
                img:require('../assets/contentlist1.png'),
                title:'Champion冠军t恤男高端life线草写LOGO印花刺绣小标短袖男女潮美版',
                price:'119'
                }
            ],
        }
    },
    methods: {
        clickPopup(){
            this.showPopup = true;
        }
    },
 
}
</script> 


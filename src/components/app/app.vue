<template>
  <div class="page">
          <head-wrap :seller="seller"></head-wrap>
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="/goods" >商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings" >评价</router-link></div>
      <div class="tab-item"><router-link to="/seller" >商家</router-link></div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import headWrap from  '@/components/header/header.vue';
const ERROR_OK = 0;
export default {
  name: 'App',
  data() {
    return{
        seller:{}
    }
  },
  created() {
    this.$http.get('/api/seller').then((respose) => {//通过$http发送ajax请求,respose是请求成功后的对象(包含我们需要的信息)
      console.log(respose);
      respose = respose.body;//拿到object对象
      console.log(respose);
      if(respose.errno===ERROR_OK){
        // this.seller = Object.assign({}, this.seller, response.data);
        this.seller = respose.data;//把对象中的data给seller (这里的seller在webpack.dev.config.js中的data:seller)
        console.log(this.seller);
      }
    })
  },
  components:{
    headWrap
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixin.styl" 
 #app
   .tab
      display :flex;
      width:100%;
      height:40px;
      line-height :40px;
      border-1px(rgba(7,17,27,0.1))
    .tab-item
       flex:1;
       text-align:center;
       & > a
           display:block;
           text-decoration :none;
           font-size :14px;
           color:rgb(77,85,93);
        .router-link-active
           color :rgb(240,20,20)         
</style>

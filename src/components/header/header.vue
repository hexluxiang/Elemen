<template>
    <div class="head">
        <div class="content-wraper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" alt="实物">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                        <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                        <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-content" @click="showDetail">
                    <span class="count">{{seller.supports.length}}个</span>
                    <i class="icon-keyboard_arrow_right">></i>
            </div>
        </div>
        <div class="bulletin-wraper" @click="showDetail">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right">></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" alt="" width="100%" height="100%">
        </div>
        
        <div class="detail" v-show="detailShow" transition="fade">
            <div class="detail-wrapper clearfix">
                    <div class="detail-main">
                        <h1 class="name">{{seller.name}}</h1>
                        <div class="start-wrapper">
                            <start :size="48" :score="seller.score"></start>
                        </div>
                        <store :message="name1"></store>
                        <ul v-if="seller.supports" class="supports">
                            <li class="support-item" v-for="(item,index) in seller.supports">
                              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                              <span class="text">{{seller.supports[index].description}}</span>
                            </li>
                        </ul>
                        <store :message="name2"></store>
                        <div class="bulletin">
                            <p class="content">{{seller.bulletin}}</p>
                        </div>
                    </div>
            </div>
            <div class="detail-close" @click="hideDetail">
                <i class="icon-close">╳</i>
            </div>
        </div>
    </div>
</template>
<script>
import start from '@/components/start/start.vue'
import store from './storeComponent'
export default {
    data(){
        return{
            detailShow:false,
            name1:'商家信息',
            name2:'商家公告'
        }
    },
    props:{
        seller:{
            type:Object
        }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    methods:{
        showDetail() {
            this.detailShow = true
            console.log(`00`);
        },
        hideDetail() {
            this.detailShow = false
        }
    },
    components:{
        start,
        store
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'

.head
    color:#fff
    background-color :rgba(7,17,27,0.2)
    position :relative
    overflow :hidden
.content-wraper
    position :relative
    padding :24px 12px 18px 24px
    font-size :0
    .avatar
        display :inline-block
        vertical-align :top
        img 
          border-radius :2px
    .content    
        display :inline-block
        font-size :14px
        margin-left :16px
        .title
           margin :2px 0 8px 0
           .brand
               display :inline-block
               vertical-align :top
               width :30px
               height :18px
               bg-img('brand')
               background-size :30px 18px
               background-repeat:no-repeat
            .name
                margin-left :6px
                font-size :16px
                font-weight :bold
                line-height :18px
        .description
            font-size :12px
            line-height :12px
            margin-bottom :10px;
        .support
            .icon
                display :inline-block
                vertical-align :top
                width :12px
                height :12px
                margin-right :4px
                bg-img('decrease_1')
                background-size :12px 12px
                background-repeat:no-repeat
                $.decrease
                   bg-img('decrease_1')
                $.discount
                   bg-img('discount_1')
                $.guarantee
                   bg-img('guarantee_1')
                $.invoice
                   bg-img('invoice_1')
                $.special
                   bg-img('special_1') 
            .text
                line-height :12px
                font-size :12px
    .support-content
        position: absolute
        right: 12px
        bottom: 14px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background: rgba(0, 0, 0, 0.2)
        text-align: center
        cursor :pointer
        .count
          vertical-align: top
          font-size: 10px
        .icon-keyboard_arrow_right 
          margin-left: 2px
          line-height: 24px
          font-size: 10px
.bulletin-wraper
    position :relative
    height :28px
    line-height :28px
    padding :0 22px 0 12px
    background-color :rgba(7,17,27,0.2)
    white-space :nowrap
    overflow :hidden
    text-overflow :ellipsis
    cursor :pointer
    .bulletin-title
        display :inline-block
        width :22px
        height :12px
        bg-img('bulletin')
        background-size :22px 12px
        background-repeat :no-repeat
        vertical-align :middle
    .bulletin-text
        margin :0 4px 0 4px
        font-size :10px
        line-height :28px
        font-weight :200   
    .icon-keyboard_arrow_right    
        position :absolute
        right :12px
        font-size :10px
.background
    position :absolute
    left :0
    top :0
    width :100%
    height :100%
    z-index :-1
    filter :blur(10px)
.detail
    position :fixed
    top :0
    left :0
    width :100%
    height :100%
    z-index :100
    overflow :auto
    background: rgba(7, 17, 27, 0.8)
    backdrop-filter: blur(10px)
    .detail-wrapper
        width :100%
        min-height :100%
        .detail-main
            margin-top :64px
            padding-bottom :64px
            .name
                line-height :16px
                text-align  :center
                font-size :16px
                font-font-weight :700
            .start-wrapper
                margin-top :18px
                padding :2px 0
                text-align :center
            .title
               display :flex
               margin  :30px auto 24px auto 
               width :80%
               .line
                 flex :1
                 position :relative
                 top :-6px
                 border-bottom :1px solid rgba(255,255,255,.2)
               .text
                  padding :0 12px
                  font-size :14px
                  font-weight :700
            .supports
                width :80%
                margin :0 auto
                .support-item
                  padding :0 12px    
                  margin-bottom  :12px
                  font-size :0
                  &:last-child
                     margin-bottom :0px                  
                  .icon
                    display :inline-block
                    width :16px
                    height :16px
                    vertical-align :top
                    margin-right :6px
                    background-size :16px 16px
                    background-repeat :no-repeat
                    &.decrease
                        bg-img('decrease_2')
                    &.discount
                        bg-img('discount_2')
                    &.guarantee
                        bg-img('guarantee_2')
                    &.invoice
                        bg-img('invoice_2')
                    &.special
                        bg-img('special_2')                    
                  .text
                     font-size :12px
                     line-height :16px
            .bulletin
                width :80%
                margin :0 auto
                .content
                    padding 0 12px
                    font-size :12px
                    font-weight :200
                    line-height :24px
                    color :rgb(255,255,255)
    .detail-close
        position :relative
        width :32px
        height :32px
        margin :-64px auto  0 auto
        clear :both
        font-size :32px
        cursor :pointer
    
</style>



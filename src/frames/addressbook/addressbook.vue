<template>
  <section>
    <!-- 头部 -->
    <Nav logo-part="true" search-part="true" add="true"></Nav>
    <!-- 联系人列表 -->
    <section class="contacts" ref="contactList">
    <div class="contacts_top">
      <ul>
      <router-link to="" tag="li" class="contacts_li">
        <div class="contacts_img">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#newfriend"></use>
        </svg>
        </div>
        <div class="contacts_text">
        新的朋友
        </div>
      </router-link>
      <router-link to="" tag="li" class="contacts_li">
        <div class="contacts_img">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#groupchat"></use>
        </svg>
        </div>
        <div class="contacts_text">
        群聊
        </div>
      </router-link>
      <router-link to="" tag="li" class="contacts_li">
        <div class="contacts_img">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#label"></use>
        </svg>
        </div>
        <div class="contacts_text">
        标签
        </div>
      </router-link>
      <router-link to="" tag="li" class="contacts_li">
        <div class="contacts_img">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#accounts"></use>
        </svg>
        </div>
        <div class="contacts_text">
        公众号
        </div>
      </router-link>
      </ul>
    </div>
    <div class="contacts_bottom" ref="addlistfather">
      <ul class="contacts_bottom_ul" ref="addlist">
      <li v-for="(value, key, index) in manageaddress" :key="key" class="addlistLi" >
        <h1>{{key}}</h1>
        <ul>
        <router-link to="/addressbook/details" tag="li" v-for="(item, index) in value":key="index" @click.native='detailMessage(item)'>
          <div class="personlist_img">
          <img :src="item.headurl" alt="">
          </div>
          <div class="personlist_name ellipsis">
          {{item.remarks ? item.remarks : item.petname}}
          </div>
        </router-link>
        </ul>
      </li>
      </ul>
        <section class="guide_wipe">
        <section class="list_guide">
          <dl>
          <dd v-for="(value, index) in sortlist" :key="index" @touchstart="startThing(value)" @touchend="endThing">{{value}}</dd>
          </dl>
          <p>#</p>
        </section>
        </section>
      <!-- 字母提示 -->
        <section class="big-letter" v-if="letter">
          <div class="letter-bg"></div>
          <div class="letter">
            {{atpresent}}
          </div>
        </section>
        <section class="peoplenum">{{peoplenum}}位联系人</section>
    </div>

    </section>
    <!-- 底部导航 -->
    <TarBar></TarBar>
    <!-- 缺少这个Router匹配不出来了 吓死了 -->
    <transition name="router-show">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
import Nav from '../../components/Nav'
import TarBar from '../../components/TarBar'
import { contactList } from '../../service/getData'
import { animate } from '../../config/mUtils.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      contactList: {},  // 所有通讯录列表
      peoplenum: null,  // 通讯录人数
      letter: false  // 字母放大
    }
  },
  created () {

  },
  beforeMount () {

  },
  mounted () {
    contactList().then((res) => {
      this.contactList = res
    })
  },
  computed: {
    // 计算通讯录导航
    manageaddress () {
      let addresslist = {}
      for (let i = 65; i <= 90; i++) {
        if (this.contactList[String.fromCharCode(i)]) {
          if ((this.contactList[String.fromCharCode(i)].length) > 0) {
            addresslist[String.fromCharCode(i)] = this.contactList[String.fromCharCode(i)]
            this.peoplenum += Number(this.contactList[String.fromCharCode(i)].length)
          }
        }
      }
      return addresslist
    },
    sortlist () {
      let sortnumlist = []
      for (let i = 65; i <= 90; i++) {
        sortnumlist.push(String.fromCharCode(i))
      }
      return sortnumlist
    }

  },
  methods: {
    ...mapMutations([
      'SAVE_MESSAGE'
    ]),
    detailMessage (item) {
      this.SAVE_MESSAGE(item)
    },
    // 手机滚动事件 animate没作用
    startThing (value) {
      this.letter = true
      this.atpresent = value
      this.$nextTick(() => { // 滚动到通讯录分组的地方
        const listArray = this.$refs.addlist.getElementsByClassName('addlistLi')
        const getBody = document.getElementsByTagName('body')[0]
        console.log(getBody)

        for (let i = 0; i < listArray.length; i++) {
          if (listArray[i].getElementsByTagName('h1')[0].innerText === value) {
            if (this.$refs.addlistfather.offsetTop + this.$refs.addlistfather.offsetHeight + 100 >= listArray[i].offsetTop + document.body.clientHeight) {
              console.log(this.$refs.addlistfather.offsetTop)
              console.log(this.$refs.addlistfather.offsetHeight)
              console.log(listArray[i].offsetTop)
              console.log(document.body.clientHeight)

              // 这个animate函数没用 我改成0也不行
              animate(getBody, { scrollTop: listArray[i].offsetTop - 50 })
            } else {
              console.log(1)
              var scrollval = this.$refs.addlistfather.offsetTop + this.$refs.addlistfather.offsetHeight
              animate(getBody, { scrollTop: scrollval })
            }
          }
        }
      })
    },
    // 隐藏
    endThing () {
      this.letter = false
    }
  },
  components: {
    Nav,
    TarBar
  }
}
</script>

<style lang="scss">
@import "../../style/public";
.router-show-enter-active,
.router-show-leave-active {
  transition: all 0.4s;
}
.router-show-enter,
.router-show-leave {
  transform: translateX(100%);
}

.contacts {
  width: 100%;
  background: #fff;
  padding-top: 2.06933rem;
  .contacts_top {
    ul {
      width: 14rem;
      margin: 0 auto;
      -webkit-overflow-scrolling: touch;
      .contacts_li {
        width: 100%;
        margin: 0.3413333333rem 0;
        border-bottom: 1px solid #e0e0e0;
        @include justify(flex-start);
        align-items: center;
        .contacts_img {
          @include widthHeight(1.5786666667rem,1.5786666667rem);
          svg {
            @include widthHeight(100%,100%);
          }
        }
        .contacts_text {
          @include sizeColor(0.64rem,#2a2a2a);
          margin-left: 0.5333333333rem;
        }
      }
      .contacts_li:last-child {
        border: 0;
      }
    }
  }
  .contacts_bottom {
    .contacts_bottom_ul {
      li {
        width: 100%;
        h1 {
          display: block;
          background: #ebebeb;
          line-height: 0.9813333333rem;
          padding-left: 0.5973333333rem;
          @include sizeColor(0.384rem,#8a8a8a);
        }
        ul {
          width: 14rem;
          margin: 0 auto;
          li {
            padding: 0.3413333333rem 0;
            @include justify(flex-start);
            border-bottom: 1px solid #e0e0e0;
            align-items: center;
            .personlist_img {
              @include widthHeight(1.5786666667rem,1.5786666667rem);
              img {
                @include widthHeight(100%,100%);
              }
            }
            .personlist_name {
              @include sizeColor(0.64rem,#2a2a2a);
              margin-left: 0.5333333333rem;
              width: 12.6rem;
            }
          }
          li:last-child {
            border: 0;
          }
        }
      }
    }
    .guide_wipe {
      position: fixed;
      width: 30px;
      height: 100%;
      top: 0;
      right: 0;
      .list_guide {
        position: fixed;
        z-index: 10;
        top: 50%;
        transform: translateY(-50%);
        right: 0.2986666667rem;
        dl {
          dd {
            @include sizeColor(0.58rem,#585858);
            text-align: center;
          }
        }
        p {
          @include sizeColor(0.54rem,#585858);
        }
      }
    }

    .big-letter {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 3.3706666667rem;
      height: 3.3706666667rem;
      .letter-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 3.3706666667rem;
        height: 3.3706666667rem;
        background: #000;
        opacity: 0.6;
        border-radius: 5px;
      }
      .letter {
        position: relative;
        z-index: 10;
        width: 3.3706666667rem;
        line-height: 3.3706666667rem;
        text-align: center;
        font-size: 2rem;
        color: #fff;
        font-family: SimSun !important;
      }
    }
  }
}
.peoplenum {
  padding-bottom: 3rem;
  text-align: center;
  margin-top: 0.5rem;
  @include sizeColor(0.6rem,#666);
}
</style>

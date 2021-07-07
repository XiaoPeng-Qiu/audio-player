<template>
  <div class="menu">
    <User/>
    <div class="menu-wrap">
      <div v-for="(menu, index) of menus" :key="index">
        <div class="title" v-if="menu.title">{{menu.title}}</div>
        <ul>
          <router-link
            v-for="(item, itemIndex) of menu.children"
            :key="itemIndex"
            :to="item.path"
            tag="li"
            active-class="active"
          >
            <i class="iconfont" :class="item.meta.icon"></i>{{item.meta.title}}
          </router-link>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
import { menuRoutes } from '@/router'
import User from './User'
export default {
  data () {
    return {
      menus: [
        {
          type: 'root',
          children: menuRoutes
        },{
          title: '创建的歌单',
          type: 'playlist',
          children: [{
              path: '/discove22ry',
              name: 'discovery',
              meta: {
                title: 'a和尽风尘的就喜欢的歌单',
                icon: 'iconmusic',
              },
            }, {
              path: '/playlist1s',
              name: 'playlists',
              meta: {
                title: '亲爱的新年好',
                icon: 'iconmusic',
              },
            }
          ]
        }
      ]
    }
  },
  components: {
    User
  },
}
</script>
<style lang="scss" scoped>
  .menu{
    height: 100%;
    background: var(--menu-bgcolor);
    .menu-wrap{
      div{
        padding-bottom: 16px;
        .title{
          font-size: 12px;
          color: var(--font-color-grey2);
          padding-left: 16px;
          margin-bottom: 8px;
        }
        ul{
          li{
            padding: 15px 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            font-size: 14px;
            transition: .3s background;
            i{
              font-size: 16px;
              padding-right: 10px;
            }
            &:hover{
              background: var(--menu-item-hover-bg) !important;
            }
          }
          li.active{
            color: $theme-color;
            background: var(--menu-item-active-bg);
          }
        }
      }
    }
  }
</style>
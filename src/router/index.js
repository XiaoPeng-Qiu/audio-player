import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Discovery = () => import('@/views/discovery/Index')
const PlaylistDetail = () => import('@/views/playlist-detail/Index')
const Playlists = () => import('@/views/playlists/Index')
const Mv = () => import('@/views/mv/Index')
export const menuRoutes = [{
    path: '/discovery',
    name: 'discovery',
    component: Discovery,
    meta: {
      title: '发现音乐',
      icon: 'iconmusic1',
    }
  }, {
    path: '/playlists',
    name: 'playlists',
    component: Playlists,
    meta: {
      title: '推荐歌单',
      icon: 'iconmusic',
    }
  }, {
    path: '/songs',
    name: 'songs',
    // component: Songs,
    meta: {
      title: '最新音乐',
      icon: 'iconyinyue',
    }
  }, {
    path: '/mvs',
    name: 'mvs',
    // component: Mvs,
    meta: {
      title: '最新MV',
      icon: 'iconshipin',
    }
  },
]

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/discovery',
    }, {
      path: '/playlist/:id',
      name: 'playlist',
      component: PlaylistDetail
    }, {
      path: '/mv/:id',
      name: 'mv',
      component: Mv
    },
    ...menuRoutes
  ]
})

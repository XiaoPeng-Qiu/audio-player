import axios from 'axios'
import { Loading, Message } from 'element-ui'

// const BASE_URL = 'https://api.mtnhao.com/'
const BASE_URL = 'http://music.api.icon.red'
// const BASE_URL = 'http://localhost:3000'
// 不启用loading加载
export const requestWithoutloading = createBaseInstance()
// 启用loading加载
export const request = createBaseInstance()
mixinLoading(request.interceptors)

// 通用的加载配置
function createBaseInstance(){
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000
  })
  instance.interceptors.response.use( handleResponse , handleError)
  return instance;
}
// 处理请求成功
function handleResponse (response) {
  return response.data
}
// 处理请求失败
function handleError (err) {
  Message({
    message: err.message,
    type : 'error',
    duration: 0,
    showClose: true
  })
  return err
}

let loading
let loadingCount = 0
function mixinLoading(interceptors) {
  interceptors.request.use(handleLoadingRequest)
  interceptors.response.use(handleLoadingResponse, handleLoadingError)

  // 请求拦截器 显示加载框
  function handleLoadingRequest (config) {
    if (!loading) {
      loading = Loading.service({
        text: '载入中...',
        // background: 'transparent'
      })
    }
    loadingCount++
    return config
  }

  //处理拦截器 关闭加载框
  function handleLoadingClose() {
    loadingCount--
    if(loadingCount === 0){
      loading.close()
      loading = null
    }
  }

  function handleLoadingResponse (response) {
    handleLoadingClose()
    return response
  }

  function handleLoadingError (err) {
    handleLoadingClose()
    return err
  }
}
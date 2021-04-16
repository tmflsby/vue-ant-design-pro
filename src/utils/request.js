import Vue from 'vue'
import axios from 'axios'
import storage from '@/utils/storage'
import store from '@/store'
import { ACCESS_TOKEN } from '@/store/mutationTypes'

// 创建 axios 实例
const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // API 请求的默认前缀
  timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    // 从 localstorage 中获取 token
    const token = storage.get(ACCESS_TOKEN)

    if (error.response.status === 403) {
      Vue.prototype.$notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }

    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      Vue.prototype.$notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'
      })

      if (token) {
        store.dispatch('Logout').then(() => {
          const timer = setTimeout(() => {
            window.location.reload()
            clearTimeout(timer)
          }, 1500)
        })
      }
    }
  }

  return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use(config => {
  const token = storage.get(ACCESS_TOKEN)
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['Access-Token'] = token
  }
  return config
}, errorHandler)

// 响应拦截器
request.interceptors.response.use(response => {
  return response.data
}, errorHandler)

export default request

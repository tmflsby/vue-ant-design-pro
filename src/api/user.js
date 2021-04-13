import request from '@/utils/request'

export const getInfo = () => request({
  url: '/user/info',
  method: 'get'
})

export const getCurrentUserNav = () => request({
  url: '/user/nav',
  method: 'get'
})

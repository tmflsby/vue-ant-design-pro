import request from '@/utils/request'

export const getInfo = (params) => request({
  url: '/user/info',
  method: 'get',
  params
})

export const getCurrentUserNav = (params) => request({
  url: '/user/nav',
  method: 'get',
  params
})

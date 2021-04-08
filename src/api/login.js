import request from '@/utils/request'

export const login = (param) => request({
  url: '/auth/login',
  method: 'post',
  data: param
})

export const logout = () => request({
  url: '/auth/logout',
  method: 'get'
})

export const get2step = (param) => request({
  url: '/auth/2step-code',
  method: 'post',
  data: param
})

export const getInfo = () => request({
  url: '/user/info',
  method: 'get'
})

export const getCurrentUserNav = () => request({
  url: '/user/nav',
  method: 'get'
})

export const getSmsCaptcha = (param) => request({
  url: '/account/sms',
  method: 'post',
  data: param
})


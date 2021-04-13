import request from '@/utils/request'

export const login = (param) => request({
  url: '/auth/login',
  method: 'post',
  data: param
})

export const logout = (param) => request({
  url: '/auth/logout',
  method: 'post',
  param
})

export const get2step = (param) => request({
  url: '/auth/2step-code',
  method: 'post',
  data: param
})

export const getSmsCaptcha = (param) => request({
  url: '/account/sms',
  method: 'post',
  data: param
})

import request from '@/utils/request'

export const login = (data) => request({
  url: '/auth/login',
  method: 'post',
  data
})

export const logout = (data) => request({
  url: '/auth/logout',
  method: 'post',
  data
})

export const get2step = (data) => request({
  url: '/auth/2step-code',
  method: 'post',
  data
})

export const getSmsCaptcha = (data) => request({
  url: '/account/sms',
  method: 'post',
  data
})

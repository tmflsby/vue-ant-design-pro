import request from '@/utils/request'

export const getOrgTree = (param) => request({
  url: '/org/tree',
  method: 'get',
  param
})

export const getRoleList = (param) => request({
  url: '/role',
  method: 'get',
  param
})

export const getPermission = (param) => request({
  url: '/permission',
  method: 'get',
  param
})

export const getPermissionNoPager = (param) => request({
  url: '/permission/no-pager',
  method: 'get',
  param
})

export const postAvatar = (data) => request({
  url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  method: 'post',
  data,
  contentType: false,
  processData: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

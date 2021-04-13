import request from '@/utils/request'

export const getOrgTree = (params) => request({
  url: '/org/tree',
  method: 'get',
  params
})

export const getRoleList = (params) => request({
  url: '/role',
  method: 'get',
  params
})

export const getPermission = (params) => request({
  url: '/permission',
  method: 'get',
  params
})

export const getPermissionNoPager = (params) => request({
  url: '/permission/no-pager',
  method: 'get',
  params
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

import request from '@/utils/request'

export const getRoleList = (param) => request({
  url: '/role',
  method: 'get',
  param
})

export const getServiceList = (param) => request({
  url: '/service',
  method: 'get',
  param
})

export const getPermissions = (param) => request({
  url: '/permission/no-pager',
  method: 'get',
  param
})

export const getOrgTree = (param) => request({
  url: '/org/tree',
  method: 'get',
  param
})

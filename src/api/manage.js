import request from '@/utils/request'

export const getServiceList = (param) => request({
  url: '/service',
  method: 'get',
  param
})

export const getProjectsList = (param) => request({
  url: '/list/search/projects',
  method: 'get',
  param
})

export const getActivityWorkplace = (param) => request({
  url: '/workplace/activity',
  method: 'get',
  param
})

export const getTeamsWorkplace = (param) => request({
  url: '/workplace/teams',
  method: 'get',
  param
})

export const getRadarWorkplace = (param) => request({
  url: '/workplace/radar',
  method: 'get',
  param
})

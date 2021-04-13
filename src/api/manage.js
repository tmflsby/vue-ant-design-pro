import request from '@/utils/request'

export const getServiceList = (params) => request({
  url: '/service',
  method: 'get',
  params
})

export const getProjectsList = (params) => request({
  url: '/list/search/projects',
  method: 'get',
  params
})

export const getActivityWorkplace = (params) => request({
  url: '/workplace/activity',
  method: 'get',
  params
})

export const getTeamsWorkplace = (params) => request({
  url: '/workplace/teams',
  method: 'get',
  params
})

export const getRadarWorkplace = (params) => request({
  url: '/workplace/radar',
  method: 'get',
  params
})

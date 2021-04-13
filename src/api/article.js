import request from '@/utils/request'

export const getArticleList = (params) => request({
  url: '/list/article',
  method: 'get',
  params
})

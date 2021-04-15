import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'
import accountSettings from './accountSettings'
import appSetting from './appSetting'
import basicForm from './basicForm'
import dashboardAnalysis from './dashboardAnalysis'
import menu from './menu'
import other from './other'
import result from './result'
import user from './user'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

export default {
  ...components,
  ...accountSettings,
  ...appSetting,
  ...basicForm,
  ...dashboardAnalysis,
  ...menu,
  ...other,
  ...result,
  ...user
}

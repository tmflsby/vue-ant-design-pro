import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'
import accountSettings from './accountSettings'
import appSetting from './appSetting'
import basicForm from './basicForm'
import dashboardAnalysis from './dashboardAnalysis'
import menu from './menu'
import other from './other'
import result from './result'
import user from './user'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU
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

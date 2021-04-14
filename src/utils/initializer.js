import store from '@/store'
import storage from '@/utils/storage'
import defaultSettings from '@/utils/defaultSettings'
import * as mutationTypes from '@/store/mutationTypes'
import { printANSI } from '@/utils/screenLog'

const Initializer = () => {
  printANSI() // screenLog 控制台打印Log

  storage.set(mutationTypes.TOGGLE_LAYOUT, defaultSettings.layout)
  storage.set(mutationTypes.TOGGLE_FIXED_HEADER, defaultSettings.fixedHeader)
  storage.set(mutationTypes.TOGGLE_FIXED_SIDEBAR, defaultSettings.fixedSidebar)
  storage.set(mutationTypes.TOGGLE_CONTENT_WIDTH, defaultSettings.contentWidth)
  storage.set(mutationTypes.TOGGLE_HIDE_HEADER, defaultSettings.autoHideHeader)
  storage.set(mutationTypes.TOGGLE_NAV_THEME, defaultSettings.navTheme)
  storage.set(mutationTypes.TOGGLE_WEAK, defaultSettings.colorWeak)
  storage.set(mutationTypes.TOGGLE_COLOR, defaultSettings.primaryColor)
  storage.set(mutationTypes.TOGGLE_MULTI_TAB, defaultSettings.multiTab)
  storage.set(mutationTypes.APP_LANGUAGE, 'en-US')
  if (storage.get(mutationTypes.Lang) === null) {
    storage.set(mutationTypes.Lang, 'en-US')
  }

  store.commit(mutationTypes.TOGGLE_LAYOUT, storage.get(mutationTypes.TOGGLE_LAYOUT, defaultSettings.layout))
  store.commit(mutationTypes.TOGGLE_FIXED_HEADER, storage.get(mutationTypes.TOGGLE_FIXED_HEADER, defaultSettings.fixedHeader))
  store.commit(mutationTypes.TOGGLE_FIXED_SIDEBAR, storage.get(mutationTypes.TOGGLE_FIXED_SIDEBAR, defaultSettings.fixedSidebar))
  store.commit(mutationTypes.TOGGLE_CONTENT_WIDTH, storage.get(mutationTypes.TOGGLE_CONTENT_WIDTH, defaultSettings.contentWidth))
  store.commit(mutationTypes.TOGGLE_HIDE_HEADER, storage.get(mutationTypes.TOGGLE_HIDE_HEADER, defaultSettings.autoHideHeader))
  store.commit(mutationTypes.TOGGLE_NAV_THEME, storage.get(mutationTypes.TOGGLE_NAV_THEME, defaultSettings.navTheme))
  store.commit(mutationTypes.TOGGLE_WEAK, storage.get(mutationTypes.TOGGLE_WEAK, defaultSettings.colorWeak))
  store.commit(mutationTypes.TOGGLE_COLOR, storage.get(mutationTypes.TOGGLE_COLOR, defaultSettings.primaryColor))
  store.commit(mutationTypes.TOGGLE_MULTI_TAB, storage.get(mutationTypes.TOGGLE_MULTI_TAB, defaultSettings.multiTab))
  store.commit('SET_TOKEN', storage.get(mutationTypes.ACCESS_TOKEN))

  store.dispatch('setLang', storage.get(mutationTypes.Lang))
}

export default Initializer

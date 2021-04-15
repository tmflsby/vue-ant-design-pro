import storage from '@/utils/storage'
import * as mutationTypes from '@/store/mutationTypes'
import { loadLanguageAsync } from '@/lang'

const app = {
  state: {
    sideCollapsed: false,
    isMobile: false,
    theme: 'dark',
    layout: '',
    contentWidth: '',
    fixedHeader: false,
    fixedSidebar: false,
    autoHideHeader: false,
    color: '',
    weak: false,
    multiTab: true,
    lang: 'en-US',
    _antLocale: {}
  },
  mutations: {
    [mutationTypes.SIDEBAR_TYPE]: (state, type) => {
      state.sideCollapsed = type
      storage.set(mutationTypes.SIDEBAR_TYPE, type)
    },
    [mutationTypes.TOGGLE_MOBILE_TYPE]: (state, isMobile) => {
      state.isMobile = isMobile
    },
    [mutationTypes.TOGGLE_NAV_THEME]: (state, theme) => {
      state.theme = theme
      storage.set(mutationTypes.TOGGLE_NAV_THEME, theme)
    },
    [mutationTypes.TOGGLE_LAYOUT]: (state, mode) => {
      state.layout = mode
      storage.set(mutationTypes.TOGGLE_LAYOUT, mode)
    },
    [mutationTypes.TOGGLE_FIXED_HEADER]: (state, mode) => {
      state.fixedHeader = mode
      storage.set(mutationTypes.TOGGLE_FIXED_HEADER, mode)
    },
    [mutationTypes.TOGGLE_FIXED_SIDEBAR]: (state, mode) => {
      state.fixedSidebar = mode
      storage.set(mutationTypes.TOGGLE_FIXED_SIDEBAR, mode)
    },
    [mutationTypes.TOGGLE_CONTENT_WIDTH]: (state, type) => {
      state.contentWidth = type
      storage.set(mutationTypes.TOGGLE_CONTENT_WIDTH, type)
    },
    [mutationTypes.TOGGLE_HIDE_HEADER]: (state, type) => {
      state.autoHideHeader = type
      storage.set(mutationTypes.TOGGLE_HIDE_HEADER, type)
    },
    [mutationTypes.TOGGLE_COLOR]: (state, color) => {
      state.color = color
      storage.set(mutationTypes.TOGGLE_COLOR, color)
    },
    [mutationTypes.TOGGLE_WEAK]: (state, mode) => {
      state.weak = mode
      storage.set(mutationTypes.TOGGLE_WEAK, mode)
    },
    [mutationTypes.APP_LANGUAGE]: (state, lang, antd = {}) => {
      state.lang = lang
      state._antLocale = antd
      storage.set(mutationTypes.APP_LANGUAGE, lang)
    },
    [mutationTypes.TOGGLE_MULTI_TAB]: (state, bool) => {
      storage.set(mutationTypes.TOGGLE_MULTI_TAB, bool)
      state.multiTab = bool
    }
  },
  actions: {
    setLang ({ commit }, lang) {
      return new Promise((resolve, reject) => {
        commit(mutationTypes.APP_LANGUAGE, lang)
        loadLanguageAsync(lang).then(() => {
          resolve()
        }).catch((e) => {
          reject(e)
        })
      })
    }
  }
}

export default app

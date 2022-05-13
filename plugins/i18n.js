import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en', // 回退本地化
    silentFallbackWarn: true, // 靜默後備警告
    messages: {
      en: require('~/locales/en.json'), // 英文
      zh: require('~/locales/zh.json'), // 中文
    },
  })
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
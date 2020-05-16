import VueI18n from 'vue-i18n';
import Vue from 'vue'

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  }
});
export default i18n;



import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    header: {
      imFelipeBarros: 'I\'M FELIPE BARROS',
      fullStackEnginner: 'FULLSTACK ENGINEER',
      Experience: 'Looking for the first opportunity '
    },
    experiencies: {
      title: 'Companies that i helped with my expertise',
      since: 'Since'
    }
  },
  ptBR: {
    header: {
      imFelipeBarros: 'OI, SOU FELIPE BARROS',
      fullStackEnginner: 'FULLSTACK ENGINEER',
      Experience: 'Procurando a primeira oportunidade'
    },
    experiencies: {
      title: 'Empresas que ajudei com meu expertise',
      since: 'Desde'
    }
  }
}

const i18n = createI18n({
  locale: 'ptBR', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
})

export default i18n

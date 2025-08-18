import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    header: {
      imAndreAzevedo: 'I\'M ANDRE AZEVEDO',
      fullStackEnginner: 'FULLSTACK ENGINEER',
      llyearsExperience: '12 experience years '
    },
    experiencies: {
      title: 'Companies that i helped with my expertise',
      since: 'Since'
    }
  },
  ptBR: {
    header: {
      imAndreAzevedo: 'OI, SOU ANDRE AZEVEDO',
      fullStackEnginner: 'FULLSTACK ENGINEER',
      llyearsExperience: '12 anos de experiência'
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

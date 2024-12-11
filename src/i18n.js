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
    },
    educations: {
      title: 'EDUCATION',
      subtitle: 'College',
      course: 'Information of Systems'

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
    },
    educations: {
      title: 'EDUCAÇÃO',
      subtitle: 'Faculdade',
      course: 'Sistemas de Informação'

    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'ptBR', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
})

export default i18n

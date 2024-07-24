<!-- <div class="flex flex-wrap xl:flex-row p-5 lg:px-20 lg:pt-20 lg:pb-10 lg:py-5 bg-green-600">
    <div class="w-full flex flex-row justify-center">
      <div class="flex-none" data-aos="zoom-in-up">
        <div class="bg-cover xl:bg-no-repeat rounded-lg h-60 xl:h-96 w-60 xl:w-4/12 bg-red-500 hover:scale-110 duration-300">
          <img class="w-full" src="../assets/images/perfil.jpg" alt="">
        </div>
      </div>
    </div>

    <div class="w-full xl:w-1/12 bg-red-600 flex flex-col lg:ml-20 text-center lg:text-left mt-5 lg:mt-0">
      <div class="flex items-center">
        <div class="flex-grow text-white">
          <p class="text-lg xl:text-9xl" data-aos="fade-up">{{ $t('header.imFelipeBarros') }}</p>
          <p class="text-4xl font-bold box-decoration-slice bg-gradient-to-r from-pallete-50 to-blue-700 text-white px-2" data-aos="fade-left">FRONTEND ENGINEER</p>
          <p class="text-sm box-decoration-slice bg-gradient-to-r from-blue-700 to-pallete-50 text-white px-2" data-aos="fade-right">{{ $t('header.Experience') }}</p>
          <p class="text-sm flex justify-center lg:justify-start flex-wrap space-x-2 pt-2"></p>
          <div data-aos="fade-up" class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div class="flex items-center space-x-2">
              <svg class="" style="width: 1.3em;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect fill="#f7df1e" height="512" rx="15%" width="512"/><path d="m324 370c10 17 24 29 47 29 20 0 33-10 33-24 0-16-13-22-35-32l-12-5c-35-15-58-33-58-72 0-36 27-64 70-64 31 0 53 11 68 39l-37 24c-8-15-17-21-31-21s-23 9-23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76 0 43-34 67-80 67-45 0-74-21-88-49zm-170 4c8 13 14 25 31 25 16 0 26-6 26-30v-166h48v164c0 50-29 72-72 72-39 0-61-20-72-44z"/></svg>
              <span>JavaScript</span>
            </div>
            <div class="flex items-center space-x-2">
              <img class="w-6" src="../assets/images/html.png" alt="">
              <span>HTML</span>
            </div>
            <div class="flex items-center space-x-2">
              <img class="w-6" src="../assets/images/css.png" alt="">
              <span>CSS</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg style="width: 2em;" viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><g transform="matrix(1 0 0 -1 11.134827 59.133803)"><path d="m31.6570702 44.7385042-5.9308605-10.2725885-5.9308606 10.2725885h-19.7506106l25.6814712-44.48210809 25.6814711 44.48210809z" fill="#41b883" transform="translate(.015698 .002616)"/><path d="m21.4535517 26.947754-5.9308605-10.2725885-5.93086056 10.2725885h-9.47802216l15.40888272-26.68874161 15.4088827 26.68874161z" fill="#34495e" transform="translate(10.219216 17.793366)"/></g></g></svg>
              <span>VueJS</span>
            </div>

          </div>
          <div class="flex justify-center lg:justify-start space-x-2 pt-10">
            <button data-aos="fade-up" @click="goToExternalLink('https://github.com/FelipeBarros10')" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="bi bi-github text-4xl"></i>
            </button>
            <button data-aos="fade-down" @click="goToExternalLink('https://www.linkedin.com/in/felipe-barros-31468a234/')" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="bi bi-linkedin text-4xl"></i>
            </button>
            <button data-aos="fade-up" @click="goToExternalLink()" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="bi bi-file-earmark-arrow-down-fill text-4xl"></i>
            </button>
            <button data-aos="fade-down" @click="goToExternalLink('https://api.whatsapp.com/send/?phone=5514988256847&text&type=phone_number&app_absent=0.')" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="bi bi-whatsapp text-4xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class="w-full items-end flex justify-end">
    <button class="m-2 2xl:mr-10 rounded-xl p-2 header-bg-dark text-white text-xl font-bold " @click="changeLanguage">Translate<img class="w-6 mx-auto mt-2" :src="img" alt=""></button>
  </div>
  <div class="flex flex-wrap p-5 lg:px-20 xl:px-32  lg:pb-10 lg:py-5">
    <div class="w-full lg:w-auto flex justify-center lg:block">
      <div class="flex-none">
        <div data-aos="zoom-in-up" class="bg-cover rounded-lg xl:rounded-xl h-60 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:skew-y-2 duration-300" :style="'background-image: url(' + require('../assets/images/perfil.jpg') "></div>
      </div>
    </div>
    <div class="w-full lg:w-auto flex flex-col lg:ml-20 text-center lg:text-left mt-5 lg:mt-0">
      <div class="flex items-center">
        <div class="flex-grow text-white">
          <p class="text-lg 2xl:text-2xl" data-aos="fade-up">{{ $t('header.imFelipeBarros') }}</p>
          <p class="text-4xl 2xl:text-5xl  font-bold box-decoration-slice bg-gradient-to-r from-pallete-50 to-blue-700 text-white px-2" data-aos="fade-left">FRONTEND ENGINEER</p>
          <p class="text-sm 2xl:text-xl box-decoration-slice bg-gradient-to-r from-blue-700 to-pallete-50 text-white px-2" data-aos="fade-right">{{ $t('header.Experience') }}</p>
          <p class="text-sm flex justify-center lg:justify-start flex-wrap space-x-2 pt-2"></p>
          <div data-aos="fade-up" class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 2xl:space-x-8 2xl:mt-4">
            <div class="flex items-center space-x-2">
              <img class="w-6 2xl:w-7 rounded-lg" src="../assets/images/js.png" alt="">
              <span class="2xl:text-xl">JavaScript</span>
            </div>
            <div class="flex items-center space-x-2">
              <img class="w-6 2xl:w-7 rounded-lg" src="../assets/images/html.png" alt="">
              <span class="2xl:text-xl">HTML</span>
            </div>
            <div class="flex items-center space-x-2">
              <img class="w-6 2xl:w-7 rounded-lg" src="../assets/images/css.png" alt="">
              <span class="2xl:text-xl">CSS</span>
            </div>
            <div class="flex items-center space-x-2">
              <img class="w-6 xl:w-7 rounded-lg" src="../assets/images/vue.png" alt="">
              <span class="2xl:text-xl">VueJS</span>
            </div>

          </div>
          <div class="flex justify-center lg:justify-start space-x-2 pt-10">
            <button data-aos="fade-up" @click="goToExternalLink('https://github.com/FelipeBarros10')" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="bi bi-github text-4xl"></i>
            </button>
            <button data-aos="fade-down" @click="goToExternalLink('https://www.linkedin.com/in/felipe-barros-31468a234/')" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="bi bi-linkedin text-4xl"></i>
            </button>
            <button data-aos="fade-up" @click="goToExternalLink()" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="bi bi-file-earmark-arrow-down-fill text-4xl"></i>
            </button>
            <button data-aos="fade-down" @click="goToExternalLink('https://api.whatsapp.com/send/?phone=5514988256847&text&type=phone_number&app_absent=0.')" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="bi bi-whatsapp text-4xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import { ref } from 'vue'
AOS.init()

export default {
  data () {
    return {

    }
  },
  methods: {
    goToExternalLink (link) {
      window.open(
        link,
        '_blank'
      )
    }
  },

  setup () {
    const { locale } = useI18n()
    const img = ref(require('../assets/images/ico-brasil.png'))

    function changeLanguage () {
      locale.value = locale.value === 'ptBR' ? 'en' : 'ptBR'

      if (locale.value === 'ptBR') {
        img.value = require('../assets/images/ico-brasil.png')
      } else {
        img.value = require('../assets/images/ico-eua.png')
      }
    }

    return {
      changeLanguage,
      img
    }
  }
}
</script>

<style scoped>

</style>

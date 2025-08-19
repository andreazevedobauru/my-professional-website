<template>
  <div class="bg-white dark:bg-slate-50 px-5 lg:px-20 lg:pt-20 lg:pb-10 lg:py-5">
    <div class="w-full lg:w-auto flex justify-center lg:block">
      <div class="flex-none">
        <div data-aos="zoom-in-up" class="bg-cover rounded-full h-60 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mx-auto lg:mx-0" :style="'background-image: url(' + require('../assets/images/perfil.png') + ')'"></div>
      </div>
    </div>
    <div class="w-full lg:w-auto flex flex-col lg:ml-20 text-center lg:text-left mt-8 lg:mt-0">
      <div class="flex items-center">
        <div class="flex-grow">
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-900 mb-6 leading-tight" data-aos="fade-up">
            Desenvolvedor Full Stack com 11+ anos construindo SaaS escaláveis e APIs robustas
          </h1>
          <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            De monólitos a microserviços, ajudo empresas a transformar ideias em produtos digitais de alto impacto.
          </p>

          <div data-aos="fade-up" data-aos-delay="400" class="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <a href="#empresas" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
              Trajetória Profissional
            </a>
            <button class="bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 px-8 rounded-lg border-2 border-indigo-600 transition duration-300 transform hover:scale-105 shadow-lg">
              Baixar CV
            </button>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" class="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <div class="flex items-center space-x-2">
              <svg style="width: 1.3em;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="#777bb3" height="512" rx="15%" width="512"/><g stroke="#fff" stroke-width="6"><path id="a" d="m155 202h-58a3 3 0 0 0 -3 2l-27 141c0 3 3 3 3 3h30c3 0 3-2 3-2l7-35h27c42 0 63-28 68-53s1-56-50-56zm13 54c-4 19-17 27-35 27h-18l11-53h18c27 0 26 10 24 26z"/><path d="m275 311c-4 0-3-4-3-4l12-61c0-8 6-16-18-15h-18l-15 78s0 3-4 3h-29c-3 0-3-3-3-3l28-141s0-2 4-2h30c3 0 2 3 2 3l-7 34h26c36 0 45 17 42 37l-13 69s0 3-5 3z"/><use x="239" xlink:href="#a"/></g></svg>
              <span class="text-gray-700 dark:text-gray-700">PHP</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="" style="width: 1.3em;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect fill="#f7df1e" height="512" rx="15%" width="512"/><path d="m324 370c10 17 24 29 47 29 20 0 33-10 33-24 0-16-13-22-35-32l-12-5c-35-15-58-33-58-72 0-36 27-64 70-64 31 0 53 11 68 39l-37 24c-8-15-17-21-31-21s-23 9-23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76 0 43-34 67-80 67-45 0-74-21-88-49zm-170 4c8 13 14 25 31 25 16 0 26-6 26-30v-166h48v164c0 50-29 72-72 72-39 0-61-20-72-44z"/></svg>
              <span class="text-gray-700 dark:text-gray-700">JavaScript</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg style="width: 2em;" viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><g transform="matrix(1 0 0 -1 11.134827 59.133803)"><path d="m31.6570702 44.7385042-5.9308605-10.2725885-5.9308606 10.2725885h-19.7506106l25.6814712-44.48210809 25.6814711 44.48210809z" fill="#41b883" transform="translate(.015698 .002616)"/><path d="m21.4535517 26.947754-5.9308605-10.2725885-5.93086056 10.2725885h-9.47802216l15.40888272-26.68874161 15.4088827 26.68874161z" fill="#34495e" transform="translate(10.219216 17.793366)"/></g></g></svg>
              <span class="text-gray-700 dark:text-gray-700">VueJS</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg style="width: 2em;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.22,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392c1.307,0.654,2.108,1.065,2.108,1.065c0.56,0.244,0.901,0.639,0.901,1.122c0,0.721-0.583,1.305-1.305,1.305c-0.721,0-1.305-0.583-1.305-1.305c0-0.484,0.341-0.88,0.901-1.122c0,0-0.802-0.411-2.108-1.065l-2.409-1.392V6.921l8.795-5.072c0.082-0.047,0.189-0.047,0.271,0l8.795,5.072v10.15l-8.795,5.076c-0.082,0.047-0.197,0.047-0.272,0L11.998,24z"/><path d="M22.119,12.794l-4.994,2.883c-0.164,0.095-0.346,0.095-0.51,0l-4.995-2.883c-0.164-0.095-0.164-0.332,0-0.427l4.995-2.883c0.164-0.095,0.346-0.095,0.51,0l4.994,2.883C22.283,12.462,22.283,12.699,22.119,12.794z"/><path d="M12.002,4.852l-4.995,2.883c-0.164,0.095-0.164,0.332,0,0.427l4.995,2.883c0.164,0.095,0.346,0.095,0.51,0l4.995-2.883c0.164-0.095,0.164-0.332,0-0.427l-4.995-2.883C12.348,4.757,12.166,4.757,12.002,4.852z"/><path d="M12.002,1.404l-4.995,2.883c-0.164,0.095-0.164,0.332,0,0.427l4.995,2.883c0.164,0.095,0.346,0.095,0.51,0l4.995-2.883c0.164-0.095,0.164-0.332,0-0.427L12.002,1.404C11.838,1.309,11.656,1.309,11.492,1.404z"/></svg>
              <span class="text-gray-700 dark:text-gray-700">NodeJS</span>
            </div>
          </div>

          <div class="flex justify-center lg:justify-start space-x-2 pt-10">
            <button data-aos="fade-up" @click="goToExternalLink('https://github.com/andreazevedobauru')" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <svg viewBox="0 0 24 24" style="width: 2.5em;" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#374151" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77" fill="#374151"/></svg>
            </button>
            <button data-aos="fade-down" @click="goToExternalLink('https://www.linkedin.com/in/andr%C3%A9-felipe-azevedo/')" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <svg viewBox="0 0 425 512" style="width: 2.5em;" xmlns="http://www.w3.org/2000/svg"><path fill="#374151" d="M212 51.5q43.5 0 81.5 16.5t66.5 44.75T405 179t16.5 81.5T405 342t-45 66.5-66.5 45T212 470t-81.5-16.5-66.25-45T19.5 342 3 260.5 19.5 179t44.75-66.25T130.5 68 212 51.5zm-65 157H94.5v170H147v-170zM120.5 195q11 0 18.75-7.5T147 169t-7.75-18.5-18.75-7.5-18.5 7.5-7.5 18.5 7.5 18.5 18.5 7.5zM330 280q0-18-10-35.25t-26-26.25q-14.5-8-33.75-8.5T225 216.5v-8h-52v170h52v-104l22-10.5q4-2 10.75-2t10.75 2.5q3 1.5 6 6.5t3 9v98.5H330V280z"/></svg>
            </button>
            <button data-aos="fade-up" @click="goToExternalLink('mailto:andre.azevedo@outlook.com')" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <svg style="width: 2.5em;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#374151" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </button>
            <button data-aos="fade-down" @click="goToExternalLink('https://wa.me/5514998746189?text=Ol%C3%A1%20Andr%C3%A9,%20vi%20seu%20site%20e%20resolvi%20entrar%20em%20contato.')" class="rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <svg style="width: 2.5em;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512" xml:space="preserve">
              <circle style="fill:#91DD5A;" cx="256" cy="256" r="256"/>
              <path style="fill:#7ED63F;" d="M256,0c-11.317,0-22.461,0.744-33.391,2.167C348.216,18.53,445.217,125.933,445.217,256
                s-97.002,237.47-222.609,253.833C233.539,511.256,244.683,512,256,512c141.385,0,256-114.616,256-256S397.385,0,256,0z"/>
              <path style="fill:#FFFFFF;" d="M256,434.643c-43,0-84.443-15.458-116.895-43.568c-0.707-0.612-1.607-0.954-2.543-0.954H82.853
                c-2.759,0-4.647-2.787-3.622-5.349l17.755-44.39c0.419-1.045,0.356-2.216-0.156-3.218c-12.744-24.96-19.474-52.98-19.474-81.164
                c0-98.968,80.896-179.398,180.037-178.638c97.168,0.745,176.5,80.077,177.244,177.244C435.398,353.747,354.968,434.643,256,434.643z
                "/>
              <path style="fill:#7ED63F;" d="M256,401.252c-35.349,0-69.415-12.853-95.922-36.192l-6.714-5.91
                c-1.771-1.559-4.049-2.419-6.408-2.419h-16.066c-2.146,0-3.613-2.167-2.816-4.159l4.624-11.558c1.052-2.63,0.902-5.589-0.413-8.099
                l-5.058-9.662c-10.781-20.598-16.48-43.853-16.48-67.253c0-80.092,65.159-145.251,145.25-145.252
                c80.099-0.001,145.254,65.155,145.254,145.254C401.251,336.094,336.092,401.252,256,401.252z"/>

                c-7.202-10.01-6.059-23.643,2.715-32.418l35.886-35.885c7.141-7.141,18.719-7.141,25.859,0l22.15,22.15
                c7.141,7.141,7.141,18.719,0,25.859l-6.093,6.093c-2.98,2.98-3.869,7.459-2.285,11.364c10.18,25.101,27.997,42.918,53.098,53.098
                c3.906,1.584,8.383,0.695,11.364-2.285l6.093-6.093c7.141-7.141,18.719-7.141,25.86,0l22.15,22.15c7.141,7.141,7.141,18.719,0,25.86
                l-35.885,35.885C314.488,355.708,308.154,358.345,301.441,358.345z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
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
  }
}
</script>

<style scoped>

</style>

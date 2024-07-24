<template>
  <div class=" bg-gray-200 px-10 pt-20 py-5 items-center flex flex-col justify-center">
    <div data-aos="fade-right" class="flex flex-row header-bg-dark justify-center items-center border-b-4 border-r-4 rounded-2xl shadow-xl shadow-blue-800 border-blue-300">
      <img class="w-14 xl:w-20 2xl:w-28 ml-5 mr-3 my-3" src="../assets/images/educacao.png">
      <h1 class="text-white text-4xl xl:text-5xl 2xl:text-6xl font-extrabold 2xl:mr-5 ">{{ $t('educations.title') }}</h1>
    </div>

    <div class="xl:flex xl:w-9/12 2xl:w-11/12 xl:justify-center xl:items-center xl:mt-14">
      <div data-aos="fade-up" class="w-12/12 xl:w-4/12 2xl:w-3/12 xl:rounded-3xl flex mt-8 shadow-xl shadow-green-700 flex-col justify-center items-center">
        <div class="w-full bg-pallete-130 rounded-xl xl:rounded-3xl flex flex-col justify-center items-center">
          <div class="w-3/6">
            <img class="w-full my-5 shadow-2xl rounded-full" src="../assets/images/Ite.jpeg" alt="">
          </div>

          <div class="flex-row flex justify-center items-center">
            <i class="bi bi-pc-display mx-2 xl:text-2xl text-green-400"></i>
            <h1 class="my-4 font-bold text-green-400 text-xl xl:text-2xl 2xl:mx-4 font-serif">Faculdade</h1>
          </div>

          <div class="flex flex-col justify-center items-center">
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Local:</span> ITE - BAURU</span>
            <span class="font-medium text-white text-md my-2 mx-4 xl:my-3 xl:text-xl"><span class="font-bold text-white">Curso:</span> Sistemas de Informação </span>
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Início:</span> 2024 </span>
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Término:</span> 2027 </span>
            <button class="bg-btn-ite text-white font-serif rounded-3xl px-3 py-3 2xl:p-6 xl:border-2 xl:border-green-700 xl:rounded-full my-5 xl:mt-16 xl:mb-8 font-bold shadow-xl xl:text-md" @click="goToExternalLink('https://ite.edu.br/paginas/sobre-a-unidade')">SOBRE A ITE</button>
          </div>
        </div>
      </div>

      <div data-aos="fade-down" class="w-12/12 xl:w-4/12 2xl:w-3/12  xl:mx-4 flex mt-8 flex-col justify-center items-center">
        <div class="w-full bg-pallete-120 shadow-xl shadow-purple-700 rounded-xl xl:rounded-3xl flex flex-col justify-center items-center">
          <div class="w-3/6">
            <img class="w-full my-5 shadow-2xl rounded-full" src="../assets/images/cursoDev.jpeg" alt="">
          </div>
          <div class="flex-row flex justify-center items-center">
            <i class="bi bi-file-code-fill mx-2 text-3xl text-pallete-140"></i>
            <h1 class="my-4 font-bold text-pallete-140 text-2xl font-serif">FullStack</h1>
          </div>

          <div class="flex flex-col justify-center items-center">
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Local:</span> Curso.Dev</span>
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Curso:</span> FullStack </span>
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl">Tecnologias Ensinadas: </span>
            <div class="flex-row flex my-2">
              <svg class="mx-2" style="width: 1.7em;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect fill="#f7df1e" height="512" rx="15%" width="512"/><path d="m324 370c10 17 24 29 47 29 20 0 33-10 33-24 0-16-13-22-35-32l-12-5c-35-15-58-33-58-72 0-36 27-64 70-64 31 0 53 11 68 39l-37 24c-8-15-17-21-31-21s-23 9-23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76 0 43-34 67-80 67-45 0-74-21-88-49zm-170 4c8 13 14 25 31 25 16 0 26-6 26-30v-166h48v164c0 50-29 72-72 72-39 0-61-20-72-44z"/></svg>
              <img class="w-7 mx-2" src="../assets/images/React.png" alt="">
              <img class="w-7 mx-2" src="../assets/images/postgreSql.png" alt="">
              <img class="w-7 bg-gray-300 mx-2" src="../assets/images/nextjs.png" alt="">
            </div>
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Início:</span> 2024 </span>
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Término:</span>  </span>
            <button class="bg-btn-curso text-white font-serif rounded-3xl px-3 py-3 my-5 font-bold 2xl:p-6 xl:border-2 xl:border-purple-700 xl:text-sm xl:mt-10 xl:mb-4 xl:rounded-full" @click="goToExternalLink('https://ite.edu.br/paginas/sobre-a-unidade')">SOBRE A CURSO.DEV</button>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" class="w-12/12 xl:w-4/12 2xl:w-3/12 flex mt-8 flex-col justify-center items-center">
        <div class="w-full bg-pallete-100 shadow-xl shadow-orange-700 rounded-xl xl:rounded-3xl flex flex-col justify-center items-center">
          <div class="w-3/6">
            <img class="w-full my-5 shadow-2xl rounded-full" src="../assets/images/dodev.png" alt="">
          </div>

          <div class="flex-row flex justify-center items-center">
            <img class="w-6 mx-2 rounded" src="../assets/images/js.png" alt="">
            <h1 class="my-4 font-bold text-yellow-300 text-2xl font-serif">JavaScript</h1>
          </div>

          <div class="flex flex-col justify-center items-center">
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Local:</span> DoDev</span>
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Curso:</span> Básico de JavaScript </span>
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Início:</span> 2024 </span>
            <span class="font-medium text-white text-md my-2 xl:my-3 2xl:text-xl"><span class="font-bold text-white">Término:</span> 2024 </span>
            <button class="bg-btn-dodev text-white font-serif rounded-3xl px-3 py-3 my-5 font-bold shadow-xl 2xl:p-6 xl:border-2 xl:border-orange-400 xl:text-sm xl:mt-10 xl:mb-8 xl:rounded-full" @click="goToExternalLink('https://br.linkedin.com/company/dodev-school')">SOBRE A DODEV</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style>

</style>

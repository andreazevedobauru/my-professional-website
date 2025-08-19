<template>
  <div class="bg-gray-50 dark:bg-slate-800 px-20 pt-20 py-16">
    <div class="max-w-7xl mx-auto">
      <!-- Seção de Destaque - Projetos Principais -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projetos em Destaque</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">Soluções inovadoras com tecnologias de ponta</p>
      </div>

             <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <!-- Projeto em Destaque 1: DarkVoice -->
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-3xl shadow-2xl overflow-hidden border border-purple-200 dark:border-purple-800" data-aos="fade-up">
          <div class="relative">
            <!-- Badge de destaque -->
            <div class="absolute top-4 right-4 z-10">
              <span class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                 DESTAQUE
              </span>
            </div>

                         <!-- Mockup do notebook -->
             <div class="bg-gray-800 p-6 rounded-t-3xl">
               <div class="flex items-center space-x-2 mb-4">
                 <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                 <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                 <div class="w-3 h-3 bg-green-500 rounded-full"></div>
               </div>
                                   <div class="w-96 mx-auto rounded-xl p-3">
                    <div class="rounded-xl p-2 flex items-center justify-center overflow-hidden">
                      <div class="w-full relative">
                        <!-- Printscreen real da página DarkVoice -->
                        <img
                          :src="require('../assets/images/darkvoiceprint.png')"
                          alt="Dark Voice - Interface do sistema"
                          class="w-full h-auto rounded-lg object-contain bg-gray-100 project-image"
                          style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
                        />
                      </div>
                    </div>
                  </div>
             </div>
          </div>

          <div class="p-10">
            <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">DarkVoice</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">Sistema Web para criadores de conteúdo, sistema com várias integrações como: Azure para gerar áudios a partir de textos, Laravel para backend, Vue e Quasar para front end, Api da OpenAI para ajudar criadores de conteúdo, api da hotmart para vendas e financeiro e várias outras.</p>

            <!-- Stack Tecnológica -->
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">Laravel</span>
              <span class="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">Vue</span>
              <span class="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">Quasar</span>
              <span class="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">Azure</span>
              <span class="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">OpenAI</span>
            </div>

            <!-- Resultado -->
            <div class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-6 mb-8 shadow-lg">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span class="text-white font-bold text-lg">Sistema multi-integração</span>
              </div>
              <p class="text-emerald-100 text-base mt-2">IA, Azure, OpenAI, Hotmart e outras integrações</p>
            </div>

            <!-- Links -->
            <div class="flex space-x-4">
              <a href="#" class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl text-center transition duration-300 shadow-lg transform hover:scale-105">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Acessar Sistema
              </a>
            </div>
          </div>
        </div>

        <!-- Projeto em Destaque 2: Cesto.app -->
        <div class="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl shadow-2xl overflow-hidden border border-orange-200 dark:border-orange-800" data-aos="fade-up" data-aos-delay="200">
          <div class="relative">
            <!-- Badge de destaque -->
            <div class="absolute top-4 right-4 z-10">
              <span class="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                INOVADOR
              </span>
            </div>

            <!-- Mockup do celular -->
            <div class="bg-gray-800 p-6 rounded-xl">
              <div class="mx-auto rounded-xl p-3">
                                <div class="rounded-xl p-2 flex items-center justify-center overflow-hidden">
                   <div class="w-full relative">
                     <!-- Mockup da interface do Cesto.app -->
                     <div class="w-full bg-gradient-to-br from-orange-50 to-red-50 rounded-lg relative overflow-hidden border border-orange-200">

                                               <!-- Print da interface do Cesto.app -->
                         <div class="flex items-center justify-center">
                                                       <img src="@/assets/images/cestoprint.png" alt="Interface do Cesto.app" class="w-full h-auto rounded-lg object-contain bg-gray-100 project-image" style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;">
                         </div>

                       <!-- Indicadores de funcionalidades -->
                       <div class="absolute bottom-2 left-0 right-0 flex justify-center space-x-4">
                         <div class="flex items-center space-x-1">
                           <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                           <span class="text-orange-600 text-xs">Mobile</span>
                         </div>
                         <div class="flex items-center space-x-1">
                           <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                           <span class="text-red-600 text-xs">Extensão</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          <div class="p-10">
            <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Cesto.app</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">Aplicativo que facilita a criação de livros de receitas personalizados a partir de links de receitas de sites como TudoGostoso, YouTube e Instagram.</p>

            <!-- Stack Tecnológica -->
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">TypeScript</span>
              <span class="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">Vite</span>
              <span class="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">React</span>
              <span class="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">Tailwind CSS</span>
              <span class="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">Capacitor</span>
            </div>

            <!-- Resultado -->
            <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 mb-8 shadow-lg">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span class="text-white font-bold text-lg">Multi-plataforma</span>
              </div>
              <p class="text-orange-100 text-base mt-2">App mobile + extensão de navegador</p>
            </div>

            <!-- Links -->
            <div class="flex space-x-4">
              <a href="#" class="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl text-center transition duration-300 shadow-lg transform hover:scale-105">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Baixar App
              </a>
            </div>
          </div>
        </div>

        <!-- Projeto em Destaque 3: Tem Trabalho -->
        <div class="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-3xl shadow-2xl overflow-hidden border border-cyan-200 dark:border-cyan-800" data-aos="fade-up" data-aos-delay="400">
          <div class="relative">
            <!-- Badge de destaque -->
            <div class="absolute top-4 right-4 z-10">
              <span class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                ATIVO
              </span>
            </div>

            <!-- Mockup do servidor -->
            <div class="bg-gray-800 p-6 rounded-t-3xl">
              <div class="flex items-center space-x-2 mb-4">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="w-96 mx-auto rounded-xl p-3">
                <div class="rounded-xl p-2 flex items-center justify-center overflow-hidden">
                  <div class="w-full relative">
                    <!-- Printscreen real da página Tem Trabalho -->
                    <img
                      :src="require('../assets/images/temtrabalho.png')"
                      alt="Tem Trabalho - Interface da plataforma"
                      class="w-full h-auto rounded-lg object-contain bg-gray-100 project-image"
                      style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-10">
            <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tem Trabalho</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">Site e aplicativo para divulgação de vagas de emprego, com objetivo de melhorar a forma de envio de currículos para as empresas, permitindo enviar um mesmo currículo para várias de uma vez.</p>

            <!-- Stack Tecnológica -->
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">Vue.js</span>
              <span class="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">Laravel</span>
              <span class="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">API</span>
              <span class="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">Mobile</span>
              <span class="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">MySQL</span>
            </div>

            <!-- Resultado -->
            <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl p-6 mb-8 shadow-lg">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span class="text-white font-bold text-lg">Plataforma ativa</span>
              </div>
              <p class="text-cyan-100 text-base mt-2">Sistema de vagas e envio de currículos funcionando</p>
            </div>

            <!-- Links -->
            <div class="flex space-x-4">
              <a href="#" class="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl text-center transition duration-300 shadow-lg transform hover:scale-105">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Acessar Site
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção de Outros Projetos -->
      <div class="text-center mb-16">
        <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Outros Projetos</h3>
        <p class="text-lg text-gray-600 dark:text-gray-300">Aplicações e sistemas desenvolvidos com foco em resolver problemas reais</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Projeto 1: CAESP App -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up">
          <div class="relative">
            <!-- Mockup do notebook -->
            <div class="bg-gray-800 p-4 rounded-t-2xl">
              <div class="flex items-center space-x-2 mb-3">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
                             <div class="bg-white rounded-lg p-6 flex items-center justify-center">
                 <div class="text-center">
                   <div class="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                     <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                     </svg>
                   </div>
                   <h3 class="text-lg font-semibold text-gray-800">CAESP App</h3>
                   <p class="text-sm text-gray-600">Projeto social Casa da Esperança</p>
                 </div>
               </div>
            </div>
          </div>

          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">CAESP App</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Aplicativo e API desenvolvido para o projeto social Casa da Esperança em Bauru para auxílio no gerenciamento dos alunos, pais e ocorrências.</p>

            <!-- Stack Tecnológica -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Vue.js</span>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Quasar</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">Laravel</span>
              <span class="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">API</span>
            </div>

            <!-- Resultado -->
            <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mb-6">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span class="text-emerald-800 dark:text-emerald-200 font-semibold">Projeto social implementado</span>
              </div>
              <p class="text-emerald-700 dark:text-emerald-300 text-sm mt-1">Gerenciamento completo de alunos e ocorrências</p>
            </div>

            <!-- Links -->
            <div class="flex space-x-4">
              <a href="#" class="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-medium py-3 px-4 rounded-lg text-center transition duration-300">
                <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver Código
              </a>
              <a href="#" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg text-center transition duration-300">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Acessar App
              </a>
            </div>
          </div>
        </div>

        <!-- Projeto 2: App Ponto OK -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div class="relative">
            <!-- Mockup do celular -->
            <div class="bg-gray-800 p-4 rounded-t-2xl">
              <div class="w-32 mx-auto bg-gray-700 rounded-t-3xl p-2">
                                 <div class="bg-white rounded-t-2xl p-3 flex items-center justify-center">
                   <div class="text-center">
                     <div class="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                       <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                       </svg>
                     </div>
                     <h3 class="text-sm font-semibold text-gray-800">Ponto OK</h3>
                     <p class="text-xs text-gray-600">Reconhecimento facial</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">App Ponto OK</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Aplicativos e API desenvolvidos para registro de presença dos colaboradores por meio de reconhecimento facial. Também é um gerenciador de funcionários e horários de trabalho.</p>

            <!-- Stack Tecnológica -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">QuasarJS</span>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Flutter</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">Laravel</span>
              <span class="bg-cyan-100 text-cyan-800 text-xs font-medium px-3 py-1 rounded-full">DigitalOcean</span>
            </div>

            <!-- Resultado -->
            <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mb-6">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span class="text-emerald-800 dark:text-emerald-200 font-semibold">Multi-empresa em produção</span>
              </div>
              <p class="text-emerald-700 dark:text-emerald-300 text-sm mt-1">Atende várias empresas na nuvem DigitalOcean</p>
            </div>

            <!-- Links -->
            <div class="flex space-x-4">
              <a href="#" class="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-medium py-3 px-4 rounded-lg text-center transition duration-300">
                <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver Código
              </a>
              <a href="#" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg text-center transition duration-300">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Baixar App
              </a>
            </div>
          </div>
        </div>

        <!-- Projeto 3: 2Inspect -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="400">
          <div class="relative">
            <!-- Mockup do tablet -->
            <div class="bg-gray-800 p-4 rounded-t-2xl">
              <div class="w-48 mx-auto bg-gray-700 rounded-t-2xl p-2">
                                 <div class="bg-white rounded-t-xl p-4 flex items-center justify-center">
                   <div class="text-center">
                     <div class="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                       <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                       </svg>
                     </div>
                     <h3 class="text-base font-semibold text-gray-800">2Inspect</h3>
                     <p class="text-sm text-gray-600">Automação PDV</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">2Inspect</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Aplicativo/Automações desenvolvidas para capturar todos os lançamentos registrados por máquinas no PDV e verificação de taxas e prazos de pagamentos das maquininhas.</p>

            <!-- Stack Tecnológica -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Automação</span>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">PDV</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">Integração</span>
              <span class="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">API</span>
            </div>

            <!-- Resultado -->
            <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mb-6">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span class="text-emerald-800 dark:text-emerald-200 font-semibold">Automação de captura de dados</span>
              </div>
              <p class="text-emerald-700 dark:text-emerald-300 text-sm mt-1">Captura de lançamentos e verificação de taxas PDV</p>
            </div>

            <!-- Links -->
            <div class="flex space-x-4">
              <a href="#" class="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-medium py-3 px-4 rounded-lg text-center transition duration-300">
                <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver Código
              </a>
              <a href="#" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg text-center transition duration-300">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Acessar Sistema
              </a>
            </div>
          </div>
        </div>

        <!-- Projeto 4: temtrabalho.com.br -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="600">
          <div class="relative">
            <!-- Mockup do servidor -->
            <div class="bg-gray-800 p-4 rounded-t-2xl">
              <div class="w-40 mx-auto bg-gray-700 rounded-t-lg p-3">
                                 <div class="bg-white rounded-lg p-4 flex items-center justify-center">
                   <div class="text-center">
                     <div class="w-16 h-16 bg-cyan-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                       <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                       </svg>
                     </div>
                     <h3 class="text-base font-semibold text-gray-800">Tem Trabalho</h3>
                     <p class="text-sm text-gray-600">Plataforma de vagas</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">temtrabalho.com.br</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Site e aplicativo simples, para divulgação de vagas de emprego, cujo objetivo é melhorar a forma de envio de currículos para as empresas, onde seja mais fácil enviar um mesmo currículo para várias de uma vez.</p>

            <!-- Stack Tecnológica -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-cyan-100 text-cyan-800 text-xs font-medium px-3 py-1 rounded-full">Vue.js</span>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Laravel</span>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">API</span>
              <span class="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Mobile</span>
            </div>

            <!-- Resultado -->
            <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mb-6">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span class="text-emerald-800 dark:text-emerald-200 font-semibold">Plataforma de vagas ativa</span>
              </div>
              <p class="text-emerald-700 dark:text-emerald-300 text-sm mt-1">Sistema de envio de currículos e gestão de vagas</p>
            </div>

            <!-- Links -->
            <div class="flex space-x-4">
              <a href="#" class="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-medium py-3 px-4 rounded-lg text-center transition duration-300">
                <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver Código
              </a>
              <a href="#" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg text-center transition duration-300">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Acessar Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsComponent',
  data () {
    return {
      projects: [
        {
          id: 1,
          name: 'CAESP App',
          stack: ['Vue.js', 'Quasar', 'Laravel', 'API'],
          result: 'Projeto social implementado',
          description: 'Aplicativo e API desenvolvido para o projeto social Casa da Esperança em Bauru para auxílio no gerenciamento dos alunos, pais e ocorrências.',
          github: '#',
          demo: '#',
          type: 'mobile'
        },
        {
          id: 2,
          name: 'App Ponto OK',
          stack: ['QuasarJS', 'Flutter', 'Laravel', 'DigitalOcean'],
          result: 'Multi-empresa em produção',
          description: 'Aplicativos e API desenvolvidos para registro de presença dos colaboradores por meio de reconhecimento facial. Também é um gerenciador de funcionários e horários de trabalho.',
          github: '#',
          demo: '#',
          type: 'mobile'
        },
        {
          id: 3,
          name: '2Inspect',
          stack: ['Automação', 'PDV', 'Integração', 'API'],
          result: 'Automação de captura de dados',
          description: 'Aplicativo/Automações desenvolvidas para capturar todos os lançamentos registrados por máquinas no PDV e verificação de taxas e prazos de pagamentos das maquininhas.',
          github: '#',
          demo: '#',
          type: 'automation'
        },
        {
          id: 4,
          name: 'temtrabalho.com.br',
          stack: ['Vue.js', 'Laravel', 'API', 'Mobile'],
          result: 'Plataforma de vagas ativa',
          description: 'Site e aplicativo simples, para divulgação de vagas de emprego, cujo objetivo é melhorar a forma de envio de currículos para as empresas, onde seja mais fácil enviar um mesmo currículo para várias de uma vez.',
          github: '#',
          demo: '#',
          type: 'web'
        },
        {
          id: 5,
          name: 'DarkVoice',
          stack: ['Laravel', 'Vue', 'Quasar', 'Azure', 'OpenAI'],
          result: 'Sistema multi-integração',
          description: 'Sistema Web para criadores de conteúdo, sistema com várias integrações como: Azure para gerar áudios a partir de textos, Laravel para backend, Vue e Quasar para front end, Api da OpenAI para ajudar criadores de conteúdo, api da hotmart para vendas e financeiro e várias outras.',
          github: '#',
          demo: '#',
          type: 'web'
        },
        {
          id: 6,
          name: 'Cesto.app',
          stack: ['TypeScript', 'Vite', 'React', 'Tailwind CSS', 'Capacitor'],
          result: 'Multi-plataforma',
          description: 'Aplicativo que facilita a criação de livros de receitas personalizados a partir de links de receitas de sites como TudoGostoso, YouTube e Instagram.',
          github: '#',
          demo: '#',
          type: 'mobile'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Estilos para melhorar a qualidade das imagens */
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* Estilos específicos para os prints dos projetos */
.project-image {
  transition: all 0.3s ease;
  filter: brightness(1.02) contrast(1.02);
}

.project-image:hover {
  filter: brightness(1.05) contrast(1.05);
  transform: scale(1.02);
}
</style>

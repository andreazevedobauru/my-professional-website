<template>
  <div class=" header-bg-dark px-20 pt-20 py-5 flex items-center flex justify-center">
    <div class="-my-6">
    <h2 class="text-lg text-white font-bold">{{ $t('experiencies.title') }}</h2>
      <!-- Experience #1 -->
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{{ $t('experiencies.since') }} 2021</time>
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-2 pb-10 ring-1 ring-slate-900/5 shadow-xl" data-aos="fade-up">
            <div>
              <span class="inline-flex items-center justify-center p-1  rounded-md shadow-lg">
                <img src="../assets/images/companies-logos/Firework-logo.png" class="h-20" alt="">
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">FULLSTACK ENGINEER - TechLead</h3>
            <div class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <div class="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-5">
                  <p class="text-gray-600">Desenvolvimento de aplicações web e mobile de acordo com a demanda de cada projeto. Atuei em varios projetos:</p>
                  <ul class="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      <strong>Portal Servimed:</strong> Migramos um portal antigo para um com tecnologias recentes e com uma estrutura RESTful. <strong>(PHP, Laravel, Vuejs, OracleSql)</strong>
                    </li>
                    <li>
                      <strong>Completa:</strong> Portal de vendas para representantes da empresa. <strong>(PHP, Laravel, Node, Javascript, React, Redis, Mysql)</strong>
                    </li>
                    <li>
                      <strong>Scaffold:</strong> Portal que atualmente conta com mais de 150 mil usuários, para desenvolvimento de cursos para empresas que desejam gerar cursos para seus colaboradores. <strong>(PHP, Laravel, Node, Javascript, React, Redis, Mysql)</strong>
                    </li>
                    <li>
                      <strong>Banco Modal:</strong> Criamos soluções que a modal não disponibiliza aos clientes externos. Criamos soluções para melhorar o backend e front-end para um cliente da modal. <strong>(PHP, Laravel, React, NodeJS)</strong>
                    </li>
                    <li>
                      <strong>PE - Servimed:</strong> Sistema de captação de pedidos da Servimed, são captados mais de 10 mil pedidos por dia com uma média de R$ 100.000,00 de vendas por hora com essa ferramenta. <strong>(NodeJS, Angular, TypeScript, OracleSql)</strong>
                    </li>
                    <li>
                      <strong>BillX:</strong> Solução de pagamentos e OCR, responsavel por ajudar a desenvolver o backend e aplicativo. <strong>(PHP, Laravel e Flutter, Mysql)</strong>.
                    </li>
                    <li>
                      <strong>Master:</strong> Sistema Web para gerenciamento da escola de Ingles, sistema de pagamentos e diplomas. <strong>(PHP, Laravel e Flutter, Mysql)</strong>.
                    </li>
                    <li>
                      <strong>Educatius:</strong> Sistema para gerenciamento de escolas pelo mundo todo, comunicalçao apenas em Inglês. <b>(PHP, Laravel, Mysql)</b>.
                    </li>
                  </ul>
                  <i>Em todos esses projetos foram utilizados metodologias Ageis, alguns projetos foram omitidos.</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience #2 -->
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            2021 - 2019
          </time>
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-5 pb-10 ring-1 ring-slate-900/5 shadow-xl w-full" data-aos="fade-up">
            <div>
              <span class="inline-flex items-center justify-center rounded-md shadow-lg">
                <svg  style="width: 15em;" enable-background="new -809 501 300 80" viewBox="-770 501 300 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="m-746.6 546.5c2.4 0 4.3-2 4.3-4.3v-3.2c0-2.4-2-4.3-4.3-4.3h-9.1c-2.4 0-4.3 2-4.3 4.3v3.2c0 2.4 2 4.3 4.3 4.3zm-1.7-21c.9.1 1.7.4 2.5.8 1.7.7 3.2 1.7 4.4 3s2.2 2.8 3 4.4c.7 1.7 1.1 3.5 1.1 5.4v14h-13.9c-1.9 0-3.7-.4-5.4-1.1s-3.2-1.7-4.5-3-2.3-2.8-3-4.5-1.1-3.5-1.1-5.4c0-2 .4-3.8 1.1-5.4s1.7-3.2 3-4.4 2.8-2.2 4.5-3c.8-.4 1.6-.6 2.4-.8v-.8h2.1v-2.7c-1.2-.4-2.1-1.5-2.1-2.9 0-1.7 1.4-3 3-3 1.7 0 3 1.4 3 3 0 1.4-.9 2.5-2.1 2.9v2.8h2.1z" fill="#fe7501"/>
                  <path d="m-746.6 538c1.4 0 2.5 1.2 2.5 2.5 0 1.4-1.2 2.5-2.5 2.5s-2.5-1.2-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zm-9.1 0c1.4 0 2.5 1.2 2.5 2.5 0 1.4-1.2 2.5-2.5 2.5s-2.5-1.2-2.5-2.5c-.1-1.4 1-2.5 2.5-2.5z" fill="#fff"/>
                  <path d="m-732.5 539.2c0-2 .4-3.8 1.1-5.4.7-1.7 1.7-3.2 3-4.4s2.8-2.2 4.4-3c1.7-.7 3.5-1.1 5.4-1.1 2 0 3.8.4 5.4 1.1 1.7.7 3.2 1.7 4.4 3 1.3 1.2 2.3 2.8 3 4.4.7 1.7 1.1 3.5 1.1 5.4v14h-5.5v-14c0-1.2-.2-2.2-.7-3.3-.4-1-1-1.9-1.8-2.7s-1.7-1.4-2.7-1.8-2.2-.7-3.3-.7c-1.2 0-2.2.2-3.3.7s-1.9 1-2.7 1.8-1.4 1.7-1.8 2.7-.7 2.1-.7 3.3v14h-5.5c.2 0 .2-14 .2-14z" fill="#fe7501"/>
                  <path d="m-671.6 525.3v25.2c0 2-.4 3.8-1.1 5.4-.7 1.7-1.7 3.2-3 4.4-1.2 1.3-2.8 2.3-4.4 3-1.7.7-3.5 1.1-5.4 1.1h-2.8v-5.5h2.8c1.2 0 2.2-.2 3.3-.7 1-.4 1.9-1 2.7-1.8s1.4-1.7 1.8-2.7.7-2.2.7-3.3v-.1c-1.2.9-2.5 1.6-3.9 2.1s-3 .7-4.5.7c-1.9 0-3.7-.4-5.4-1.1s-3.2-1.7-4.5-3-2.3-2.8-3-4.5-1.1-3.5-1.1-5.4v-13.8h5.5v13.9c0 1.2.2 2.2.7 3.3.4 1 1 2 1.8 2.7.8.8 1.7 1.4 2.7 1.8s2.1.7 3.3.7 2.2-.2 3.3-.7c1-.4 1.9-1 2.7-1.8s1.4-1.7 1.8-2.7.7-2.2.7-3.3v-13.9z" fill="#fe7501"/>
                  <path d="m-649.8 547.6v5.5h-2.8c-1.9 0-3.7-.4-5.4-1.1s-3.2-1.7-4.5-3-2.3-2.8-3-4.5-1.1-3.5-1.1-5.4v-25.1h5.5v16.8h11.2v5.5h-11.2v2.8c0 1.2.2 2.2.7 3.3.4 1 1 2 1.8 2.7.8.8 1.7 1.4 2.7 1.8s2.2.7 3.3.7z" fill="#fff"/>
                  <path d="m-551.1 528c0 2.3-.5 4.4-1.5 6.4s-2.4 3.6-4.1 4.9c1.7 1.3 3.1 2.9 4.1 4.9s1.5 4.1 1.5 6.4v2.8h-5.5v-2.8c0-1.2-.2-2.2-.7-3.3s-1-1.9-1.8-2.7-1.7-1.4-2.7-1.8-2.1-.7-3.3-.7-2.2.2-3.3.7c-1 .4-2 1-2.7 1.8-.8.8-1.4 1.7-1.8 2.7s-.7 2.1-.7 3.3v2.8h-5.5v-39.3h5.5v25.3c1.2-.9 2.5-1.6 4-2.1 1.4-.5 3-.7 4.5-.7 1.2 0 2.2-.2 3.3-.7 1-.4 1.9-1 2.7-1.8s1.4-1.7 1.8-2.7.7-2.2.7-3.3v-2.8h5.5z" fill="#fff"/>
                  <path d="m-551.1 561.8h-5.4c-.5 0-.9.1-1.1.1-.4.1-.5.4-.5.7v.4c0 .6.6.9 1.7.9h2.7c.8 0 1.4.2 1.9.6s.7.9.7 1.4v1.1c0 .6-.2 1-.7 1.4-.3.3-.7.4-.9.5-.3.1-.7.1-1.2.1h-6.1v-1.5h5.6c.6 0 .9-.1 1.2-.4.1-.1.2-.5.2-.9 0-.6-.4-.9-1.3-.9h-2.5c-.9 0-1.5-.1-2.1-.5-.7-.4-.9-.9-.9-1.4v-1.2c0-.7.4-1.2 1.1-1.6.4-.3 1.1-.4 2-.4h5.9v1.6zm-17.6 1.1c0-.8-.5-1.1-1.6-1.1h-2.2c-1.2 0-1.9.4-1.9 1.2v1.7zm2.1.9-7.8 2.3v.3c0 .4.1.8.5 1 .2.1.7.2 1.2.2h6v1.4h-6.5c-1.1 0-2-.1-2.5-.5-.7-.4-1-1-1-1.9v-4.1c0-1.4 1.1-2.2 3.3-2.2h3.6c2 0 3 .8 3 2.4v1.1zm-19 2.7v-3.4c0-.4-.1-.7-.5-.9-.3-.1-.7-.2-1.2-.2h-2.4c-.6 0-.9.1-1.2.2-.4.2-.5.5-.5.9v3.5c0 .4.1.7.5.9.3.1.7.2 1.1.2h2.8c.4 0 .8-.1 1-.2.2-.3.4-.6.4-1zm2 .4c0 .8-.4 1.4-1 1.7-.4.3-1.2.4-2.1.4h-3.6c-1.1 0-1.9-.2-2.5-.6-.5-.4-.8-.9-.8-1.6v-4.3c0-.7.4-1.3 1-1.7.5-.3 1.2-.4 2.2-.4h3.6c1 0 1.7.1 2.2.4.7.4.9 1 .9 1.7zm-1.1-8.5-.8.1c-.1 0-.3.1-.7.2-.3.1-.6.1-.8.1-.4 0-.8-.1-1.4-.3-.7-.1-1.2-.3-1.5-.3s-1.1.1-2.3.5v-1c.2-.1.5-.1.9-.2.9-.2 1.3-.3 1.4-.3.3 0 .8.1 1.4.3.7.1 1.1.3 1.4.3.2 0 .7-.1 1.3-.3.2-.1.6-.1 1.1-.2zm-15.9 10.7h-4.6c-2.2 0-3.3-.8-3.3-2.3v-4.2c0-1.4.9-2.2 2.8-2.2h5.1v1.5h-4.3c-.6 0-1 .1-1.2.2s-.4.4-.4.9v3.5c0 .8.6 1.2 1.7 1.2h4.2zm-2.9 0c.8.2 1.2.5 1.2 1s-.2.7-.7.9c-.4.2-1 .4-1.7.4-.3 0-.5 0-.8-.1v-.7h.6c.4 0 .7-.1 1-.1.3-.1.4-.2.4-.4 0-.4-.4-.5-1.4-.5l.6-1.1 1.1.4zm-20.1-8.8v5.4c0 .4.1.8.4 1.1.2.2.7.3 1.4.3h2.2c1.2 0 1.8-.4 1.8-1.4v-5.4h2v5.9c0 1.8-1.1 2.8-3.2 2.8h-3.5c-2.1 0-3.2-.9-3.2-2.8v-5.9zm-9.1 8.8h-2v-11.6h2zm-11.3-2.6v-3.6c0-.4-.1-.7-.5-.9-.3-.1-.7-.3-1.2-.3h-2.4c-.6 0-.9.1-1.2.3-.4.2-.5.5-.5.9v3.6c0 .4.1.7.5.9.3.1.7.2 1.1.2h2.7c.4 0 .8-.1 1-.2.3-.3.5-.6.5-.9zm2 .4c0 .7-.4 1.3-1 1.7-.5.3-1.2.4-2.1.4h-3.6c-1.1 0-1.9-.2-2.5-.6-.5-.4-.8-.9-.8-1.6v-4.3c0-.7.4-1.4 1-1.7.5-.3 1.2-.4 2.2-.4h3.6c1 0 1.7.1 2.2.4.7.4.9 1 .9 1.7zm-16.8-5.1h-5.4c-.5 0-.9.1-1.1.1-.4.1-.5.4-.5.7v.4c0 .6.6.9 1.7.9h2.7c.8 0 1.4.2 1.9.6s.7.9.7 1.4v1.1c0 .6-.2 1-.7 1.4-.3.3-.7.4-.9.5-.3.1-.7.1-1.2.1h-6.1v-1.5h5.6c.6 0 .9-.1 1.2-.4.1-.1.2-.5.2-.9 0-.6-.4-.9-1.3-.9h-2.5c-.9 0-1.5-.1-2.1-.5-.7-.4-.9-.9-.9-1.4v-1.2c0-.7.4-1.2 1.1-1.6.4-.3 1.1-.4 2-.4h5.9v1.6z" fill="#fe7501"/><path d="m-622.7 547.6v-8.5c0-1.2-.2-2.2-.7-3.3-.4-1-1-1.9-1.8-2.7-.4-.4-.9-.9-1.5-1.2l4-4.1c.5.4 1 .8 1.5 1.3 1.3 1.3 2.2 2.8 3 4.4.7 1.7 1.1 3.5 1.1 5.4v14.2h-14c-1.9 0-3.7-.4-5.4-1.1s-3.2-1.7-4.5-3c-.4-.4-.8-.9-1.2-1.3l3.9-4c.3.5.7.9 1.1 1.4.8.8 1.7 1.4 2.7 1.8s2.2.7 3.3.7z" fill="#fff"/><path d="m-628.6 525.5c1.7.4 3.4 1 4.9 2l-3.9 3.9c-1.1-.6-2.4-.9-3.7-.9-4.6 0-8.5 3.8-8.5 8.5 0 1.4.4 2.7.9 3.8l-3.9 3.9c-.9-1.4-1.7-3-2.1-4.8l-2.2-.4v-4.6l2-.4c.4-1.8 1-3.6 2-5.1l-1.2-1.7 3.3-3.3 1.7 1.1c1.5-1 3.3-1.8 5.1-2.2l.4-2h4.6z" fill="#fe7501"/>
                  <path d="m-586.7 525.2v5.5h-15.9v-2.4l-5.1 5.1 5.1 5.1v-2.3h10.2c1.2 0 2.2.2 3.3.7 1 .4 1.9 1 2.7 1.7s1.4 1.6 1.8 2.7c.4 1 .7 2.1.7 3.3s-.2 2.2-.7 3.3c-.4 1-1 1.9-1.8 2.7s-1.7 1.4-2.7 1.8-2.1.7-3.3.7h-16.8v-5.5h15.7v2.3l2.9-2.9.2-.2.2-.2 1.8-1.8-5.1-5.1v2.4h-10.1c-1.2 0-2.2-.2-3.3-.7-1-.4-1.9-1-2.7-1.8-.7-.8-1.3-1.7-1.7-2.7s-.7-2.1-.7-3.3.2-2.2.7-3.3c.4-1 1-1.9 1.7-2.7.7-.7 1.6-1.3 2.7-1.7 1-.4 2.1-.7 3.3-.7z" fill="#fff"/></svg>
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">FULLSTACK ENGINEER - TechLead</h3>
            <div class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <div class="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-5">
                  <p class="text-gray-600">Desenvolvimento de aplicações web e mobile de acordo com a demanda de cada projeto. Gerenciamento e orientatções aos devs de como prosseguir com suas tarefas.</p>
                  <ul class="list-disc list-inside mt-2 text-gray-600">
                    <li><strong>Camda:</strong> Aplicativo para coleta de dados de entrada e saida de protudos de todas as filiais, utilizando um periférico coletor que utilizasse Android.</li>
                    <li><strong>Vale do Igapó:</strong> Aplicativo para leitura de registros utilização de volume de agua de casas no Vale do Igapó OFFLINE, pois o vale fica distante da área de rede de dados. </li>
                    <li><strong>Doutor chama:</strong> Aplicativo Web desenvolvido para clinicas médicas. Cada sala/atendente poderia solicitar a presença de um paciente apertando apenas 1 botão. O paciente seria chamado pelo nome em uma TV que poderia estar instalada em qualquer ambiente que tenha acesso à internet.</li>
                    <li><strong>Sistel:</strong> Aplicativo BPM Offline, para que técnicos da empresa pudessem ir aos clientes e registrar suas atividades mesmo sem internet. </li>
                    <li><strong>Protocolo já:</strong> WebApp desenvolvido para gerenciamento e acompanhamento de protocolos realizados por escritórios de advocacia.</li>
                  </ul>
                  <i>Em todos esses projetos foram utilizados metodologias Ageis, alguns projetos foram omitidos.</i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Experience #3 -->
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            2019 - 2017
          </time>
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full" data-aos="fade-up">
            <div>
              <span class="inline-flex items-center justify-center p-2  rounded-md shadow-lg">
                <img src="../assets/images/companies-logos/logobrancofinch.png" class="h-8" alt="">
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">FULLSTACK ENGINEER</h3>
            <div class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <div class="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-5">
                  <p class="text-gray-600">Desenvolvimento de aplicações web e mobile de acordo com a demanda de cada projeto. Atuei em varios projetos:</p>
                  <ul class="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      <strong>Triare BPM:</strong> Ferramenta de BPM com versões em desenvolvidas com diversas versões de PHP, desde a versão 4 até a versão 7. Ferramenta altamente modificavel para atender todas as necessidades dos clientes que eram de diversos ramos, desde empresa de papel até bancos.
                    </li>
                    <li>
                      <strong>Auth Service:</strong> API criada para ser um meio de autenticação de diversas outras API's, gerando assim a facilidade de criar softwares da empresa e ter apenas um usuário para diversos sistemas diferentes. (PHP, Lumen)
                    </li>
                    <li>
                      <strong>Forms:</strong> Sistema muito parecido com com o Form da Google. Com ele era possivel a empresa criar formulários com ou sem senha, com todos os tipos de campos e validações possiveis. Os formularios eram criados via API e gerado um Link para acesso, o preenchimento geralmente era integrado por API com ferramtentas externas. (PHP, LARAVEL, VueJS)
                    </li>
                    <li>
                      <strong>Assing:</strong> Ferramenta utilizada para gerar Canvas para Assinaturas Gráfica, ou seja, se seu sistema necessitava colher assinatura de algum individuo, ele poderia criar um Assign para isso, e integrar com seu sistema sem a necessidade de desenvolver do 0. (PHP, Laravel, Javascript, VueJS)
                    </li>
                  </ul>
                  <i>Em todos esses projetos foram utilizados metodologias Ageis.</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience #4 -->
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            2017 - 2014
          </time>
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full" data-aos="fade-up">
            <div>
              <span class="inline-flex items-center justify-center p-2  rounded-md shadow-lg">
                <img src="../assets/images/companies-logos/eprom_logo.png" class="h-20" alt="">
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">FULLSTACK ENGINEER</h3>
            <div class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <div class="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-5">
                  <p class="text-gray-600">Desenvolvimento de aplicações web e mobile de acordo com a demanda de cada projeto. Atuei em varios projetos:</p>
                  <ul class="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      <strong>eSolutions Web:</strong>  Responsável por desenvolver a migração de software ERP que foi projetado em Delphi para web, utilizando PHP, MySql, Javascript.
                    </li>
                    <li>
                      <strong>eManager:</strong> Responsável por melhorias na ferramenta, a qual era utilizada como agenda vinculada com o Google Calendar.
                    </li>
                    <li>
                      <strong>Passaros:</strong> Sistema de gerenciamento de competições de canto de passáros. Manutenção do sistema antigo e desenvolvimento de novo sistema utilizando PHP, Laravel, Bootstrap e Javascript.
                    </li>
                    <li>
                      <strong>Cebraco:</strong> Ferramenta desenvolvida com PHP 5. Crawlers para busca em diversos sites sobre CPF's e CNPJS. O software ajuda as empresas a saber a situação dos seus clientes antes de realizar empréstimos ou vendas parceladas.
                    </li>
                    <li>
                      <strong>BI:</strong> Ferramenta para apresentação de gráficos, onde o usuário poderia inserir um script SQL para gerar os graficos que desejasse e ter atualização em tempo real dos dados da empresa. PHP, MySql, Firebird, SQLServer, Javascript, Laravel.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience #5 -->
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            2014 - 2013
          </time>
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full" data-aos="fade-up">
            <div>
              <span class="inline-flex items-center justify-center p-2  rounded-md shadow-lg">
                <img src="../assets/images/companies-logos/lecom.svg" class="h-10" alt="">
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Trainee</h3>
            <div class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <div class="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-5">
                  <p class="text-gray-600">Desenvolvimento de aplicações web e mobile de acordo com a demanda de cada projeto. Atuei em varios projetos:</p>
                  <ul class="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      <strong>Athos BPM:</strong>  Responsável por criar scripts para rotinas do software bpm em JAVA e rotinas para tratamento em tela com Javascript e jQuery.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
    <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2  rounded-md shadow-lg">
          <img src="../assets/images/companies-logos/Firework-logo.png" class="h-20" alt="">
        </span>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">FULLSTACK ENGINEER</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div>

    <div class="bg-white ml-3 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">

        </span>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div> -->

    <!-- <div>
      <h2> Categories </h2>
      <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
        <li>Sales</li>
        <li>Marketing</li>
        <li>SEO</li>
      </ul>
    </div> -->
  </div>
</template>
<script>

export default {
  data () {
    return {
      companiesJobs: [
        {
          logo: '',
          title: '',
          text: '',
          date: ''
        }
      ]
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
.bg-purple-gradient {
  background: rgb(100,82,144);
  background: linear-gradient(169deg, rgba(100,82,144,1) 0%, rgba(22,2,66,1) 100%);
}
</style>

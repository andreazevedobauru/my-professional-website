<template>
  <div class="bg-purple-gradient px-20 pt-20 py-5 flex items-center flex justify-center">
    <div class="max-w-6xl w-full">
      <h2 class="text-2xl text-white font-bold text-center mb-16">{{ $t('experiencies.title') }}</h2>

      <!-- Experience Bling -->
      <div class="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
        <div class="flex items-start gap-8">
          <div class="flex-shrink-0">
            <div class="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700">
              <img src="../assets/images/companies-logos/blinglogonobg.svg" class="h-12 w-12 object-contain" alt="Bling">
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Desenvolvedor Sênior</h3>
              <span class="text-gray-500 dark:text-gray-400">|</span>
              <span class="text-xl text-gray-700 dark:text-gray-300">Bling</span>
              <span class="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full ml-auto">
                Desde Setembro/2024
              </span>
            </div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-200">
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Criei microserviço em Go para gerenciamento de traduções com alta disponibilidade</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Atuo em sistema monolito robusto com mais de 500 mil usuários e picos de 30 mil acessos simultâneos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Implementei estratégias de arquitetura para garantir escalabilidade e resiliência do sistema</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Experience Firework -->
      <div class="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
        <div class="flex items-start gap-8">
          <div class="flex-shrink-0">
            <div class="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700">
              <img src="../assets/images/companies-logos/Firework-logo.png" class="h-12 w-12 object-contain" alt="Firework">
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Fullstack Engineer - TechLead</h3>
              <span class="text-gray-500 dark:text-gray-400">|</span>
              <span class="text-xl text-gray-700 dark:text-gray-300">Firework</span>
              <span class="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full ml-auto">
                2021 - Setembro/2024
              </span>
            </div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-200">
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Liderei desenvolvimento de portal com mais de 150 mil usuários, melhorando performance em 40%</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Sistema de captação processando mais de 10 mil pedidos por dia e R$ 100.000,00 de vendas por hora</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Migrei portal legado para arquitetura RESTful moderna, reduzindo tempo de carregamento em 60%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Experience Anytask -->
      <div class="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
        <div class="flex items-start gap-8">
          <div class="flex-shrink-0">
            <div class="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700">
              <svg style="width: 3em;" enable-background="new -809 501 300 80" viewBox="-770 501 300 80" xmlns="http://www.w3.org/2000/svg">
              <path d="m-746.6 546.5c2.4 0 4.3-2 4.3-4.3v-3.2c0-2.4-2-4.3-4.3-4.3h-9.1c-2.4 0-4.3 2-4.3 4.3v3.2c0 2.4 2 4.3 4.3 4.3zm-1.7-21c.9.1 1.7.4 2.5.8 1.7.7 3.2 1.7 4.4 3s2.2 2.8 3 4.4c.7 1.7 1.1 3.5 1.1 5.4v14h-13.9c-1.9 0-3.7-.4-5.4-1.1s-3.2-1.7-4.5-3-2.3-2.8-3-4.5-1.1-3.5-1.1-5.4c0-2 .4-3.8 1.1-5.4s1.7-3.2 3-4.4 2.8-2.2 4.5-3c.8-.4 1.6-.6 2.4-.8v-.8h2.1v-2.7c-1.2-.4-2.1-1.5-2.1-2.9 0-1.7 1.4-3 3-3 1.7 0 3 1.4 3 3 0 1.4-.9 2.5-2.1 2.9v2.8h2.1z" fill="#fe7501"/>
              <path d="m-746.6 538c1.4 0 2.5 1.2 2.5 2.5 0 1.4-1.2 2.5-2.5 2.5s-2.5-1.2-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zm-9.1 0c1.4 0 2.5 1.2 2.5 2.5 0 1.4-1.2 2.5-2.5 2.5s-2.5-1.2-2.5-2.5c-.1-1.4 1-2.5 2.5-2.5z" fill="#fff"/>
              <path d="m-732.5 539.2c0-2 .4-3.8 1.1-5.4.7-1.7 1.7-3.2 3-4.4s2.8-2.2 4.4-3c1.7-.7 3.5-1.1 5.4-1.1 2 0 3.8.4 5.4 1.1 1.7.7 3.2 1.7 4.4 3 1.3 1.2 2.3 2.8 3 4.4.7 1.7 1.1 3.5 1.1 5.4v14h-5.5v-14c0-1.2-.2-2.2-.7-3.3-.4-1-1-1.9-1.8-2.7s-1.7-1.4-2.7-1.8-2.2-.7-3.3-.7c-1.2 0-2.2.2-3.3.7s-1.9 1-2.7 1.8-1.4 1.7-1.8 2.7-.7 2.1-.7 3.3v14h-5.5c.2 0 .2-14 .2-14z" fill="#fe7501"/>
              <path d="m-671.6 525.3v25.2c0 2-.4 3.8-1.1 5.4-.7 1.7-1.7 3.2-3 4.4-1.2 1.3-2.8 2.3-4.4 3-1.7.7-3.5 1.1-5.4 1.1h-2.8v-5.5h2.8c1.2 0 2.2-.2 3.3-.7 1-.4 1.9-1 2.7-1.8s1.4-1.7 1.8-2.7.7-2.2.7-3.3v-.1c-1.2.9-2.5 1.6-3.9 2.1s-3 .7-4.5.7c-1.9 0-3.7-.4-5.4-1.1s-3.2-1.7-4.5-3-2.3-2.8-3-4.5-1.1-3.5-1.1-5.4v-13.8h5.5v13.9c0 1.2.2 2.2.7 3.3.4 1 1 2 1.8 2.7.8.8 1.7 1.4 2.7 1.8s2.1.7 3.3.7 2.2-.2 3.3-.7c1-.4 1.9-1 2.7-1.8s1.4-1.7 1.8-2.7.7-2.2.7-3.3v-13.9z" fill="#fe7501"/>
              <path d="m-649.8 547.6v5.5h-2.8c-1.9 0-3.7-.4-5.4-1.1s-3.2-1.7-4.5-3-2.3-2.8-3-4.5-1.1-3.5-1.1-5.4v-25.1h5.5v16.8h11.2v5.5h-11.2v2.8c0 1.2.2 2.2.7 3.3.4 1 1 2 1.8 2.7.8.8 1.7 1.4 2.7 1.8s2.2.7 3.3.7z" fill="#fff"/>
              <path d="m-551.1 528c0 2.3-.5 4.4-1.5 6.4s-2.4 3.6-4.1 4.9c1.7 1.3 3.1 2.9 4.1 4.9s1.5 4.1 1.5 6.4v2.8h-5.5v-2.8c0-1.2-.2-2.2-.7-3.3s-1-1.9-1.8-2.7-1.7-1.4-2.7-1.8-2.1-.7-3.3-.7-2.2.2-3.3.7c-1 .4-2 1-2.7 1.8-.8.8-1.4 1.7-1.8 2.7s-.7 2.1-.7 3.3v2.8h-5.5v-39.3h5.5v25.3c1.2-.9 2.5-1.6 4-2.1 1.4-.5 3-.7 4.5-.7 1.2 0 2.2-.2 3.3-.7 1-.4 1.9-1 2.7-1.8s1.4-1.7 1.8-2.7.7-2.2.7-3.3v-2.8h5.5z" fill="#fff"/>
              <path d="m-551.1 561.8h-5.4c-.5 0-.9.1-1.1.1-.4.1-.5.4-.5.7v.4c0 .6.6.9 1.7.9h2.7c.8 0 1.4.2 1.9.6s.7.9.7 1.4v1.1c0 .6-.2 1-.7 1.4-.3.3-.7.4-.9.5-.3.1-.7.1-1.2.1h-6.1v-1.5h5.6c.6 0 .9-.1 1.2-.4.1-.1.2-.5.2-.9 0-.6-.4-.9-1.3-.9h-2.5c-.9 0-1.5-.1-2.1-.5-.7-.4-.9-.9-.9-1.4v-1.2c0-.7.4-1.2 1.1-1.6.4-.3 1.1-.4 2-.4h5.9v1.6zm-17.6 1.1c0-.8-.5-1.1-1.6-1.1h-2.2c-1.2 0-1.9.4-1.9 1.2v1.7zm2.1.9-7.8 2.3v.3c0 .4.1.8.5 1 .2.1.7.2 1.2.2h6v1.4h-6.5c-1.1 0-2-.1-2.5-.5-.7-.4-1-1-1-1.9v-4.1c0-1.4 1.1-2.2 3.3-2.2h3.6c2 0 3 .8 3 2.4v1.1zm-19 2.7v-3.4c0-.4-.1-.7-.5-.9-.3-.1-.7-.2-1.2-.2h-2.4c-.6 0-.9.1-1.2.2-.4.2-.5.5-.5.9v3.5c0 .4.1.7.5.9.3.1.7.2 1.1.2h2.8c.4 0 .8-.1 1-.2.2-.3.4-.6.4-1zm2 .4c0 .8-.4 1.4-1 1.7-.4.3-1.2.4-2.1.4h-3.6c-1.1 0-1.9-.2-2.5-.6-.5-.4-.8-.9-.8-1.6v-4.3c0-.7.4-1.3 1-1.7.5-.3 1.2-.4 2.2-.4h3.6c1 0 1.7.1 2.2.4.7.4.9 1 .9 1.7zm-1.1-8.5-.8.1c-.1 0-.3.1-.7.2-.3.1-.6.1-.8.1-.4 0-.8-.1-1.4-.3-.7-.1-1.2-.3-1.5-.3s-1.1.1-2.3.5v-1c.2-.1.5-.1.9-.2.9-.2 1.3-.3 1.4-.3.3 0 .8.1 1.4.3.7.1 1.1.3 1.4.3.2 0 .7-.1 1.3-.3.2-.1.6-.1 1.1-.2zm-15.9 10.7h-4.6c-2.2 0-3.3-.8-3.3-2.3v-4.2c0-1.4.9-2.2 2.8-2.2h5.1v1.5h-4.3c-.6 0-1 .1-1.2.2s-.4.4-.4.9v3.5c0 .8.6 1.2 1.7 1.2h4.2zm-2.9 0c.8.2 1.2.5 1.2 1s-.2.7-.7.9c-.4.2-1 .4-1.7.4-.3 0-.5 0-.8-.1v-.7h.6c.4 0 .7-.1 1-.1.3-.1.4-.2.4-.4 0-.4-.4-.5-1.4-.5l.6-1.1 1.1.4zm-20.1-8.8v5.4c0 .4.1.8.4 1.1.2.2.7.3 1.4.3h2.2c1.2 0 1.8-.4 1.8-1.4v-5.4h2v5.9c0 1.8-1.1 2.8-3.2 2.8h-3.5c-2.1 0-3.2-.9-3.2-2.8v-5.9zm-9.1 8.8h-2v-11.6h2zm-11.3-2.6v-3.6c0-.4-.1-.7-.5-.9-.3-.1-.7-.3-1.2-.3h-2.4c-.6 0-.9.1-1.2.3-.4.2-.5.5-.5.9v3.6c0 .4.1.7.5.9.3.1.7.2 1.1.2h2.7c.4 0 .8-.1 1-.2.3-.3.5-.6.5-.9zm2 .4c0 .7-.4 1.3-1 1.7-.5.3-1.2.4-2.1.4h-3.6c-1.1 0-1.9-.2-2.5-.6-.5-.4-.8-.9-.8-1.6v-4.3c0-.7.4-1.4 1-1.7.5-.3 1.2-.4 2.2-.4h3.6c1 0 1.7.1 2.2.4.7.4.9 1 .9 1.7zm-16.8-5.1h-5.4c-.5 0-.9.1-1.1.1-.4.1-.5.4-.5.7v.4c0 .6.6.9 1.7.9h2.7c.8 0 1.4.2 1.9.6s.7.9.7 1.4v1.1c0 .6-.2 1-.7 1.4-.3.3-.7.4-.9.5-.3.1-.7.1-1.2.1h-6.1v-1.5h5.6c.6 0 .9-.1 1.2-.4.1-.1.2-.5.2-.9 0-.6-.4-.9-1.3-.9h-2.5c-.9 0-1.5-.1-2.1-.5-.7-.4-.9-.9-.9-1.4v-1.2c0-.7.4-1.2 1.1-1.6.4-.3 1.1-.4 2-.4h5.9v1.6z" fill="#fe7501"/><path d="m-622.7 547.6v-8.5c0-1.2-.2-2.2-.7-3.3-.4-1-1-1.9-1.8-2.7-.4-.4-.9-.9-1.5-1.2l4-4.1c.5.4 1 .8 1.5 1.3 1.3 1.3 2.2 2.8 3 4.4.7 1.7 1.1 3.5 1.1 5.4v14.2h-14c-1.9 0-3.7-.4-5.4-1.1s-3.2-1.7-4.5-3c-.4-.4-.8-.9-1.2-1.3l3.9-4c.3.5.7.9 1.1 1.4.8.8 1.7 1.4 2.7 1.8s2.2.7 3.3.7z" fill="#fff"/><path d="m-628.6 525.5c1.7.4 3.4 1 4.9 2l-3.9 3.9c-1.1-.6-2.4-.9-3.7-.9-4.6 0-8.5 3.8-8.5 8.5 0 1.4.4 2.7.9 3.8l-3.9 3.9c-.9-1.4-1.7-3-2.1-4.8l-2.2-.4v-4.6l2-.4c.4-1.8 1-3.6 2-5.1l-1.2-1.7 3.3-3.3 1.7 1.1c1.5-1 3.3-1.8 5.1-2.2l.4-2h4.6z" fill="#fe7501"/>
              <path d="m-586.7 525.2v5.5h-15.9v-2.4l-5.1 5.1 5.1 5.1v-2.3h10.2c1.2 0 2.2.2 3.3.7 1 .4 1.9 1 2.7 1.7s1.4 1.6 1.8 2.7c.4 1 .7 2.1.7 3.3s-.2 2.2-.7 3.3c-.4 1-1 1.9-1.8 2.7s-1.7 1.4-2.7 1.8-2.1.7-3.3.7h-16.8v-5.5h15.7v2.3l2.9-2.9.2-.2.2-.2 1.8-1.8-5.1-5.1v2.4h-10.1c-1.2 0-2.2-.2-3.3-.7-1-.4-1.9-1-2.7-1.8-.7-.8-1.3-1.7-1.7-2.7s-.7-2.1-.7-3.3.2-2.2.7-3.3c.4-1 1-1.9 1.7-2.7.7-.7 1.6-1.3 2.7-1.7 1-.4 2.1-.7 3.3-.7z" fill="#fff"/></svg>
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Fullstack Engineer - TechLead</h3>
              <span class="text-gray-500 dark:text-gray-400">|</span>
              <span class="text-xl text-gray-700 dark:text-gray-300">Anytask</span>
              <span class="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full ml-auto">
                2019 - 2017
              </span>
            </div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-200">
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Desenvolvi aplicativo offline para leitura de registros de água no Vale do Igapó, solucionando problema de conectividade</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Criei sistema de chamada para clínicas médicas com integração em TVs, otimizando fluxo de atendimento</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Implementei aplicativo BPM offline para técnicos, aumentando produtividade em campo em 35%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Experience Finch -->
      <div class="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
        <div class="flex items-start gap-8">
          <div class="flex-shrink-0">
            <div class="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700">
              <img src="../assets/images/companies-logos/logobrancofinch.png" class="h-12 w-12 object-contain" alt="Finch">
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Fullstack Engineer</h3>
              <span class="text-gray-500 dark:text-gray-400">|</span>
              <span class="text-xl text-gray-700 dark:text-gray-300">Finch</span>
              <span class="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full ml-auto">
                2017 - 2014
              </span>
            </div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-200">
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Desenvolvi ferramenta de BPM altamente customizável, atendendo clientes de diversos setores</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Criei API de autenticação centralizada para múltiplos sistemas, reduzindo duplicação de código em 80%</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Implementei sistema de formulários dinâmicos similar ao Google Forms, com integração via API</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Experience Eprom -->
      <div class="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
        <div class="flex items-start gap-8">
          <div class="flex-shrink-0">
            <div class="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700">
              <img src="../assets/images/companies-logos/eprom_logo.png" class="h-12 w-12 object-contain" alt="Eprom">
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Fullstack Engineer</h3>
              <span class="text-gray-500 dark:text-gray-400">|</span>
              <span class="text-xl text-gray-700 dark:text-gray-300">Eprom</span>
              <span class="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full ml-auto">
                2014 - 2013
              </span>
            </div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-200">
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Migrei software ERP de Delphi para web, modernizando interface e melhorando acessibilidade</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Desenvolvi ferramenta de BI com integração multi-banco de dados, facilitando análise de dados</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Criei sistema de gerenciamento de competições com interface moderna e funcionalidades avançadas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Experience Lecom -->
      <div class="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
        <div class="flex items-start gap-8">
          <div class="flex-shrink-0">
            <div class="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700">
              <img src="../assets/images/companies-logos/lecom.svg" class="h-12 w-12 object-contain" alt="Lecom">
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Trainee</h3>
              <span class="text-gray-500 dark:text-gray-400">|</span>
              <span class="text-xl text-gray-700 dark:text-gray-300">Lecom</span>
              <span class="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full ml-auto">
                2013 - 2014
              </span>
            </div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-200">
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Desenvolvi scripts para rotinas BPM em Java, automatizando processos e melhorando eficiência</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Criei rotinas de tratamento em tela com JavaScript e jQuery, otimizando experiência do usuário</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-500 mt-1">→</span>
                <span>Implementei validações e melhorias na interface, reduzindo erros de usuário em 25%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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

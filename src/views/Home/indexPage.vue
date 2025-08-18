<template>
  <index-header/>
  <experiencies-component/>
  <projects-component/>
</template>

<script>
import indexHeader from '@/components/headerComponent.vue'
import experienciesComponent from '@/components/experienciesComponent.vue'
import projectsComponent from '@/components/projectsComponent.vue'

export default {
  components: { indexHeader, experienciesComponent, projectsComponent }

}
</script>

<style>

</style>

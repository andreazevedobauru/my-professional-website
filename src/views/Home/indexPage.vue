<template>
  <index-header/>
  <educations-component/>
  <experiencies-component/>
</template>

<script>
import indexHeader from '@/components/headerComponent.vue'
import experienciesComponent from '@/components/experienciesComponent.vue'
import EducationsComponent from '@/components/educationsComponent.vue'

export default {
  components: { indexHeader, experienciesComponent, EducationsComponent }

}
</script>

<style>

</style>

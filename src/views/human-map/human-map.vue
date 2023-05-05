<script setup lang="ts">
  import Map from '@/components/ol-map/map.vue';
</script>

<template>
  <div full frb flex-col relative>
    <Map></Map>
    <!-- <div class="charts" absolute> </div>
    <div class="timeline" absolute> </div> -->
  </div>
</template>

<style scoped lang="scss">
  #map {
    height: calc(100vh - 60px);
    width: 100%;
    background: #fff;
  }
</style>

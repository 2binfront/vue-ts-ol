<script setup lang="ts">
  import Map from '@/components/ol-map/map.vue';
</script>

<template>
  <div full frb flex-col relative>
    <div class="header w-full frc">
      <span style="font-weight: 600; font-size: large">中国省际人口迁移时空演化</span>
    </div>

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

  .header {
    height: 60px;
    border-bottom: 1px solid #f3f3f3;
  }

  .charts {
    width: 400px;
    height: 600px;
    top: 130px;
    left: 60px;
    background-color: #99ccff;
    border-radius: 10px;
  }

  .timeline {
    width: 400px;
    height: 60px;
    top: 670px;
    left: 500px;
    background-color: #99ccff;
    border-radius: 10px;
  }
</style>

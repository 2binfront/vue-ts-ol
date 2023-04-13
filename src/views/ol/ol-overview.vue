<script lang="ts" setup>
  import { Search } from '@element-plus/icons-vue';
  import olMap from './ol-map.vue';
  import mapCharts from './map-charts.vue';
  import footInfo from './foot-info.vue';
</script>

<template>
  <div class="map-container" relative flex flex-col>
    <nav class="head-nav"> </nav>

    <olMap></olMap>
    <mapCharts></mapCharts>

    <div class="head-search" absolute>
      <el-input placeholder="输入站名搜索" :prefix-icon="Search"></el-input>
    </div>
    <footInfo></footInfo>
  </div>
</template>

<style lang="scss" scoped>
  $main-color: #232425;
  .map-container {
    height: 100%;
    width: 100%;
    margin-right: 0;
    .head-nav {
      height: 4rem;

      background-color: $main-color;
    }

    & .head-search {
      top: 6rem;
      left: 42%;
      z-index: 2;

      :deep(.el-input__wrapper) {
        background-color: #fff;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.08), 0px 5px 9px rgba(0, 0, 0, 0.05);
        border-radius: 27px;
      }
    }
  }
</style>

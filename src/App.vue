<script setup lang="ts">
  import { Map, View } from 'ol';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import { onMounted, ref } from 'vue';
  import XYZ from 'ol/source/XYZ';

  const map = ref();

  const initMap = () => {
    map.value = new Map({
      // 指向目标容器
      target: 'map',
      layers: [
        new TileLayer({
          // source: new XYZ({
          //   url: 'https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
          // })
          source: new OSM()
        })
      ], // 设置视图
      view: new View({
        center: [110, 30], // 中心点坐标
        zoom: 5, // 缩放等级
        projection: 'EPSG:4326' // 坐标系
      })
    });
  };

  // setTimeout(() => {
  //   initMap();
  // }, 100);
  onMounted(() => {
    initMap();
  });
</script>

<template>
  <div full frb flex-col>
    <div class="header h-[60px] w-full frc bg-#f3f3f3">
      <span>this is a header </span>
    </div>
    <div id="map"></div>
  </div>
</template>

<style scoped lang="scss">
  #map {
    height: calc(100vh - 60px);
    width: 100%;
  }
</style>

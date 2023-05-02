<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import * as Cesium from 'cesium';

  const cesiumRef = ref();
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYWQxNjlkMi1kM2Q4LTQzOGUtYTRjOS03YjYwNmRiYjA1MDAiLCJpZCI6MTMzNjAyLCJpYXQiOjE2ODE0MDc4Mjd9.fVMVIvJUBl17Q1ttvbfeF0jMRXLZVoAoZndB3zUxNMY';

  onMounted(() => {
    // const viewer = new Cesium.Viewer(cesiumRef.value);
    const viewer = new Cesium.Viewer(cesiumRef.value, {
      imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
        url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer'
      })
    });
    viewer.scene.debugShowFramesPerSecond = true;
    // viewer.camera.setView({
    //   // fromDegrees()方法，将经纬度和高程转换为世界坐标
    //   destination: Cesium.Cartesian3.fromDegrees(117.48, 30.67, 15000.0),
    //   orientation: {
    //     // 指向
    //     heading: Cesium.Math.toRadians(90, 0),
    //     // 视角
    //     pitch: Cesium.Math.toRadians(-90),
    //     roll: 0.0
    //   }
    // });
  });
</script>

<template>
  <div ref="cesiumRef" class="cesiumContainer" full> </div>
</template>

<style lang="scss" scoped>
  .cesiumContainer {
    // width: 100vw;
    // height: 100vh;
  }
</style>

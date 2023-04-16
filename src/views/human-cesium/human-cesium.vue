<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import * as Cesium from 'cesium';

  const cesiumRef = ref();

  onMounted(() => {
    const viewer = new Cesium.Viewer(cesiumRef.value);
    viewer.scene.debugShowFramesPerSecond = true;
  });
</script>

<template>
  <div ref="cesiumRef" class="cesiumContainer"> </div>
</template>

<style lang="scss" scoped>
  .cesiumContainer {
    width: 100vw;
    height: 100vh;
  }
</style>

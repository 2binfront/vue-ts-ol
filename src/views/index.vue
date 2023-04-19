<script lang="ts" setup></script>

<template>
  <nav flex flex-col>
    <div class="router-test">
      <span font-600>Router Test</span>
      <ul>
        <!-- <li> <router-link to="/ol-map">跳转到ol-map</router-link> </li>
        <li> <router-link to="/point-test">跳转到point-test</router-link> </li> -->
        <li mb> <router-link to="/human-echarts">跳转到人口迁移图表-></router-link> </li>
        <li mb> <router-link to="/human-map">跳转到人口迁移流展示-></router-link> </li>
        <li mb> <router-link to="/human-cesium">跳转到人口迁移3D地图-></router-link> </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    margin: 1rem;
  }
  span {
    // line-height: 40px;
  }
</style>

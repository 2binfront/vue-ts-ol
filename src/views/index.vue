<script lang="ts" setup>
  // import { Breadcrumb, Steps, Tabs, FormSwitch } from '@/BlueWhaleUI';
  // import BlueWhaleUI from '@/BlueWhaleUI/components/integration';
  // import { FormSwitch, Steps } from 'hhbluewhale-ui';
</script>

<template>
  <nav flex flex-col full>
    <div class="router-test">
      <span font-600>Router Test</span>
      <ul>
        <!-- <li> <router-link to="/ol-map">跳转到ol-map</router-link> </li>
        <li> <router-link to="/point-test">跳转到point-test</router-link> </li> -->
        <li mb> <router-link to="/human-echarts">跳转到人口迁移图表-></router-link> </li>
        <li mb> <router-link to="/human-map">跳转到人口迁移流展示-></router-link> </li>
        <li mb> <router-link to="/human-map-loca">跳转到loka人口迁移流展示-></router-link> </li>
        <li mb> <router-link to="/human-cesium">跳转到人口迁移3D地图-></router-link> </li>
      </ul>
      <!-- <breadcrumb :fullpath="'components-test/bread/test'" />
      <Steps :active="1" absolute class="top-[200px]" style="width: 600px">
        <el-step title="step1" description="hello"></el-step>
        <el-step title="step2" description="hello"></el-step>
        <el-step title="step3" description="hello"></el-step>
        <el-step title="step4" description="hello"></el-step>
      </Steps>
      <steps :active="1" absolute class="top-[400px]" style="width: 600px">
        <el-step title="step1" description="hello"></el-step>
        <el-step title="step2" description="hello"></el-step>
        <el-step title="step3" description="hello"></el-step>
        <el-step title="step4" description="hello"></el-step>
      </steps>
      <Tabs absolute class="top-[300px]">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane></Tabs
      > -->
      <Upload />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    box-sizing: border-box;
    padding: 1rem;
  }
</style>

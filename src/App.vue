<script lang="ts" setup></script>

<template>
  <el-config-provider relative flex flex-col>
    <div class="header w-full frc">
      <router-link to="/" absolute style="left: 20px">返回主页</router-link>

      <span style="font-weight: 600; font-size: large">中国省际人口迁移时空演化（2000-2020）</span>
    </div>
    <RouterView />
  </el-config-provider>
</template>

<style lang="scss" scoped>
  .el-config-provider {
    height: 100vh;
    width: 100vw;
  }
  .header {
    height: 3rem;
    border-bottom: 1px solid #f3f3f3;
  }
</style>

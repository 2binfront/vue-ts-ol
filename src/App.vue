<script lang="ts" setup>
  import { useMapInfoStore } from '@/store/mapInfo';
  import { useDarkStore } from '@/store/dark';
  import { ref } from 'vue';

  const mapStore = useMapInfoStore();
  const state = ref<string>('in');
  const darkmode = useDarkStore();
  const stateChange = () => {
    mapStore.switchState(state.value);
  };

  const timeline = ref<'2000' | '2005' | '2010' | '2015' | '2020'>('2020');
  const timeChange = () => {
    mapStore.setTime(timeline.value);
  };
</script>

<template>
  <el-config-provider relative flex flex-col>
    <div class="header w-full frc">
      <router-link to="/" absolute style="left: 20px">返回主页</router-link>
      <div frc absolute style="right: 0px; top: 36px; border-radius: none">
        <el-radio-group v-model="state" size="large" style="z-index: 100" @change="stateChange">
          <el-radio-button label="in">迁入</el-radio-button>
          <el-radio-button label="out">迁出</el-radio-button>
        </el-radio-group>
      </div>
      <div frc absolute style="right: 10%; bottom: 15px">
        <el-radio-group v-model="timeline" size="small" style="z-index: 100" @change="timeChange">
          <el-radio-button label="2000">1995-2000</el-radio-button>
          <el-radio-button label="2005">2000-2005</el-radio-button>
          <el-radio-button label="2010">2005-2010</el-radio-button>
          <el-radio-button label="2015">2010-2015</el-radio-button>
          <el-radio-button label="2020">2015-2020</el-radio-button>
        </el-radio-group>
      </div>
      <div frc absolute style="left: 100px"
        >日间 <Switch v-model:value="darkmode.isDark" /> 夜间</div
      >
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

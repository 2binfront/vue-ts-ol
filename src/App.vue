<script lang="ts" setup>
  import { useMapInfoStore } from '@/store/mapInfo';
  import { useDarkStore } from '@/store/dark';
  import { ref } from 'vue';
  import { CITIES } from './types';

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

  const value = ref('');
</script>

<template>
  <el-config-provider relative flex flex-col>
    <div class="header w-full frc">
      <router-link to="/" absolute style="left: 20px">返回主页</router-link>
      <router-link
        v-if="$route.path !== '/'"
        :to="$route.path.includes('echarts') ? '/human-map-highcharts' : 'human-echarts'"
        absolute
        style="left: 100px"
        >前往人口迁移{{ $route.path.includes('echarts') ? '流->' : '图表->' }}</router-link
      >
      <div frc absolute style="right: 20px"
        >日间 <Switch v-model:value="darkmode.isDark" /> 夜间</div
      >
      <div v-if="$route.path !== '/'" frc absolute style="right: 40px; top: 37px">
        <el-radio-group
          v-if="$route.path !== '/'"
          v-model="state"
          size="large"
          style="z-index: 100"
          @change="stateChange"
        >
          <el-radio-button label="in">迁入</el-radio-button>
          <el-radio-button label="out">迁出</el-radio-button>
        </el-radio-group>
      </div>
      <div v-if="$route.path !== '/'" frc absolute style="right: 10%; bottom: 15px">
        <el-radio-group v-model="timeline" size="small" style="z-index: 100" @change="timeChange">
          <el-radio-button label="2000">1995-2000</el-radio-button>
          <el-radio-button label="2005">2000-2005</el-radio-button>
          <el-radio-button label="2010">2005-2010</el-radio-button>
          <el-radio-button label="2015">2010-2015</el-radio-button>
          <el-radio-button label="2020">2015-2020</el-radio-button>
        </el-radio-group>
      </div>
      <div v-if="$route.path !== '/'" absolute style="right: 400px; top: 37px; z-index: 10">
        <el-button @click="mapStore.switchtoCountry">查看全国</el-button>
      </div>
      <div v-if="$route.path !== '/'" absolute style="right: 176px; top: 37px; z-index: 10">
        <el-select v-model="value" placeholder="当前城市" @change="mapStore.setCity">
          <el-option
            v-for="(item, index) in CITIES"
            :key="index"
            :label="item"
            :value="index"
            :disabled="index > 30 ? true : false"
          /> </el-select
      ></div>

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

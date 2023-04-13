<script lang="ts" setup>
  import pieChart from '@/components/charts/pie-chart.vue';
  import { ref } from 'vue';

  // charts data
  const totalRsc = ref([
    {
      name: '已分配',
      value: 105
    },
    {
      name: '已使用',
      value: 128.5
    },
    {
      name: '空余',
      value: 966.5
    }
  ]);
  const intereactNet = ref([
    {
      name: '已开通',
      value: 2
    },
    {
      name: '未开通',
      value: 2
    }
  ]);
  const alarm = ref([
    {
      name: '严重',
      value: 1126
    },
    {
      name: '重要',
      value: 15503
      // value: 185503
    },
    {
      name: '普通',
      value: 404
    },
    {
      name: '轻微',
      value: 0
    }
  ]);

  const titleRsc = {
    show: true,
    textAlign: 'center',
    textVerticalAlign: 'center',
    text: '利用率',
    top: '37%',
    left: '48%',
    subtext: '100%',
    textStyle: {
      fontSize: 14,
      color: '#798087',
      fontWeight: 'normal',
      width: 80,
      overflow: 'break'
    },
    subtextStyle: {
      fontSize: 22,
      color: '#232425',
      lineHeight: 34,
      fontWeight: 'bolder'
    }
  };
  const titleNet = {
    show: true,
    textAlign: 'center',
    textVerticalAlign: 'center',
    text: '网络总数',
    top: '37%',
    left: '48%',
    subtext: '100000',
    textStyle: {
      fontSize: 14,
      color: '#798087',
      fontWeight: 'normal',
      width: 80,
      overflow: 'break'
    },
    subtextStyle: {
      fontSize: 22,
      color: '#232425',
      lineHeight: 34,
      fontWeight: 'bolder'
    }
  };

  const dialogVisible = ref(false);
  const showDialog = (str: string) => {
    dialogVisible.value = true;
  };
  const closeDialog = () => {
    dialogVisible.value = false;
  };
</script>

<template>
  <aside class="side-charts" absolute flex flex-col>
    <div class="chart-item h-[23%]">
      <div flex items-center>
        <div class="chart-icon"><iconLeft3 /></div>
        <span>总资源</span>
      </div>
      <div flex-1 frb>
        <pieChart
          :radius="52"
          :color-set="['#3ac096', '#1d7ff1', '#e1e6f2']"
          :dataset="totalRsc"
          :title="titleRsc"
        ></pieChart>
        <div flex-1>
          <div class="chart-info-item">
            <div>总资源</div>
            <div style="font-weight: 700">100MHz</div>
          </div>
          <div class="chart-info-item">
            <div frc> <div class="w-[6px] h-[6px] bg-#3AC096 mr-1"></div> 已分配</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#1D7FF1 mr-1"></div> 已使用</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#E1E6F2 mr-1"></div> 空余</div>
            <div>100MHz</div></div
          >
        </div>
      </div>
    </div>
    <div class="chart-item h-[21%]">
      <div frb>
        <div flex items-center>
          <div class="chart-icon"><iconLeft1 /></div>
          <span>终端</span>
        </div>
        <div cursor-pointer @click="showDialog('terminal')">
          <span style="color: #3ac096">详情</span><span style="color: #8e9199">></span>
        </div>
      </div>
      <div class="station-info" flex-1 flex mt-2>
        <div class="station-no h-[100%] bg-#F3F7FB w-[40%] mr-10" frc flex-col>
          <div style="font-weight: 400; font-size: 12px">地球站总数</div>
          <div style="font-weight: 700; font-size: 24px">12345</div>
        </div>
        <div flex-1>
          <div class="chart-info-item">
            <div>总资源</div>
            <div style="font-weight: 700">100MHz</div>
          </div>
          <div class="chart-info-item">
            <div frc> <div class="w-[6px] h-[6px] bg-#3AC096 mr-1"></div> 已分配</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#1D7FF1 mr-1"></div> 已使用</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#E1E6F2 mr-1"></div> 空余</div>
            <div>100MHz</div></div
          >
        </div>
      </div>
    </div>
    <div class="chart-item h-[29%]">
      <div frb>
        <div flex items-center>
          <div class="chart-icon"> <iconLeft2 /> </div>
          <span>交互式网络</span>
        </div>
        <div cursor-pointer @click="showDialog('net')">
          <span style="color: #3ac096">详情</span><span style="color: #8e9199">></span>
        </div>
      </div>
      <div flex-1 frb>
        <pieChart
          :radius="52"
          :color-set="['#3ac096', '#e1e6f2']"
          :dataset="intereactNet"
          :title="titleNet"
        ></pieChart>

        <div flex-1>
          <div class="chart-info-item">
            <div>总资源</div>
            <div style="font-weight: 700">100MHz</div>
          </div>
          <div class="chart-info-item">
            <div frc> <div class="w-[6px] h-[6px] bg-#3AC096 mr-1"></div> 已分配</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#1D7FF1 mr-1"></div> 已使用</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#E1E6F2 mr-1"></div> 空余</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#E1E6F2 mr-1"></div> 空余</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#E1E6F2 mr-1"></div> 空余</div>
            <div>100MHz</div></div
          >
        </div>
      </div>
    </div>
    <div class="chart-item h-[25%]">
      <div flex items-center>
        <div class="chart-icon"> <iconLeft4 /></div>
        <span>未处理告警</span>
      </div>
      <div flex-1 frb>
        <pieChart
          :radius="17"
          :color-set="['#e6584f', '#f79045', '#8e9aff', '#3ac096']"
          :dataset="alarm"
        ></pieChart>
        <div flex-1>
          <div class="chart-info-item">
            <div>总未处理告警</div>
            <div style="font-weight: 700">999件</div>
          </div>
          <div class="chart-info-item">
            <div frc> <div class="w-[6px] h-[6px] bg-#E6584F mr-1"></div> 严重</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#F79045 mr-1"></div> 重要</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#8E9AFF mr-1"></div> 普通</div>
            <div>100MHz</div></div
          >
          <div class="chart-info-item">
            <div frc><div class="w-[6px] h-[6px] bg-#3AC096 mr-1"></div> 轻微</div>
            <div>100MHz</div></div
          >
        </div>
      </div>
    </div>
  </aside>
  <el-dialog
    v-model="dialogVisible"
    width="866px"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <template #header> </template>
    <div> </div>
    <template #footer>
      <el-button class="px-3 text-#fff" color="#3d4044" @click="closeDialog">关闭</el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
  .side-charts {
    top: 4rem;
    left: 0;
    z-index: 2;
    box-sizing: border-box;
    padding-top: 0.75rem;
    padding-bottom: 1rem;
    padding-left: 1.25rem;
    height: calc(100vh - 4rem);
    width: 30%;
    & .chart-item {
      padding: 1rem 1.5rem;
      margin-bottom: 1rem;
      // width: 32rem;
      width: 100%;
      box-sizing: border-box;
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.08), 0px 5px 9px rgba(0, 0, 0, 0.05);
      border-radius: 3px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
    }
  }

  .chart-icon {
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f7fb;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    // color: #333333;
    & + span {
      font-size: 18px;
      font-weight: 700;
    }
  }
  .chart-info-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    font-size: 12px;
    padding-top: 4px;
    &:not(:last-child) {
      padding-bottom: 4px;
      border-bottom: 1px solid #f3f7fb;
    }
  }
</style>

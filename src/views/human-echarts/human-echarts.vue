<script lang="ts" setup>
  import * as echarts from 'echarts';
  import { onMounted, ref, toRaw, watch, nextTick } from 'vue';
  import eg from '@/assets/中华人民共和国.json';
  // import data2020 from '@/assets/data/2020.json';

  import { useMapInfoStore } from '@/store/mapInfo';
  import { CITIES } from '@/types';

  const chartDom = ref();

  const mapStore = useMapInfoStore();

  //mapStore.curChart本地化
  // const chartLocal = ref<any>([]);
  // const initLocal = () => {
  //   chartLocal.value = [];
  //   for (let i = 0; i < 31; i++) {
  //     let tmp = 0;
  //     for (let j = 0; j < 32; j++) {
  //       if (!mapStore.curChart[i * 32 + j][1]) continue;
  //       tmp += mapStore.curChart[i * 32 + j][1];
  //     }
  //     console.log(tmp);
  //     chartLocal.value.push([CITIES[i], tmp]);
  //   }
  // };

  let option: any;
  const newOption = () => {
    if (mapStore.isCountry) {
      mapStore.initLocal();
      option = {
        title: {
          subtext: '数据来源于中国国家统计局',
          sublink: 'http://www.stats.gov.cn/'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} 人'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 100,
          max: 800000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        dataset: {
          dimensiosns: ['name', 'value'],
          source: toRaw(mapStore.chartLocal)
        },
        series: [
          {
            name: '中国省级人口迁移总览',
            type: 'map',
            map: 'China',
            selectedMode: 'single',
            roam: true, // 是否开启平移或缩放
            // zoom: 1, // 当前视角的缩放比例
            scaleLimit: {
              // 滚轮缩放的极限控制
              min: 1,
              max: 10
            },
            emphasis: {
              itemStyle: {
                areaColor: '#f3f3f3'
              }
            },
            datasetIndex: 0
          }
          // randomPieSeries(eg.features[1].properties.center, 10)
        ]
      };
    } else {
      option = {
        title: {
          subtext: '数据来源于中国国家统计局',
          sublink: 'http://www.stats.gov.cn/'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} 人'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 100,
          max: 100000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        dataset: {
          dimensiosns: ['name', 'value'],
          source: mapStore.curChart
        },
        series: [
          {
            name: '中国省级人口迁移总览',
            type: 'map',
            map: 'China',
            selectedMode: 'single',
            roam: true, // 是否开启平移或缩放
            // zoom: 1, // 当前视角的缩放比例
            scaleLimit: {
              // 滚轮缩放的极限控制
              min: 1,
              max: 10
            },
            emphasis: {
              itemStyle: {
                areaColor: '#f3f3f3'
              }
            },
            datasetIndex: 0
          }
          // randomPieSeries(eg.features[1].properties.center, 10)
        ]
      };
    }
  };
  const initCharts = () => {
    const myChart = echarts.init(chartDom.value);
    echarts.registerMap('China', eg as any);

    myChart.setOption(option);
    myChart.on('selectchanged', (param: any) => {
      const index = param.selected[0] && param.selected[0].dataIndex[0];
      console.log(index, param.selected[0]);
      mapStore.setCity(index);
      myChart.dispose();
    });
    window.addEventListener('resize', function () {
      myChart.resize();
    });
  };
  watch(
    () => mapStore.curChart,
    () => {
      newOption();
      nextTick(() => initCharts());
    }
  );

  onMounted(() => {
    newOption();
    initCharts();
  });
</script>

<template>
  <div class="chart-container" flex full>
    <div b-r frc flex-col class="w-[50%] h-[calc(100vh-49px)]">
      <pieChart></pieChart>
      <!-- <pieChart :dataset="testData" :color-set="colorSet"></pieChart> -->
    </div>
    <div id="map" ref="chartDom" class="human-charts h-[calc(100vh-49px)]" flex-1> </div>
  </div>
</template>

<style lang="scss" scoped>
  .chart-container {
    overflow: hidden;
  }
</style>

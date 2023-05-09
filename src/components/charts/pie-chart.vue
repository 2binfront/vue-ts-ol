<script lang="ts" setup>
  import { ref, onMounted, watch, toRaw } from 'vue';
  import * as echarts from 'echarts/core';
  import { TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components';
  import { PieChart } from 'echarts/charts';
  import { LabelLayout } from 'echarts/features';
  import { CanvasRenderer } from 'echarts/renderers';
  import type { EChartsType } from 'echarts/core';
  import { useMapInfoStore } from '@/store/mapInfo';
  import { CITIES } from '@/types';

  const Chart = ref(null);
  const props = defineProps(['radius', 'colorSet']);
  const mapStore = useMapInfoStore();
  const dataChart = ref<EChartsType>();
  echarts.use([
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
  ]);
  let option = {
    tooltip: {
      trigger: 'item',
      position: 'right',
      formatter: '{c}人',
      backgroundColor: '#45474b',
      borderWidth: 0,
      textStyle: {
        color: '#fff'
      }
    },
    dataset: {
      dimensiosns: ['name', 'value'],
      source: toRaw(mapStore.curChart)
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: [props.radius ? props.radius : 17, '70%'],
        itemStyle: {
          borderRadius: 1,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true
        },
        labelLayout: {
          hideOverlap: false
        }
      }
    ],
    // color: props.colorSet ? props.colorSet : ['#e6584f', '#f79045', '#8e9aff', '#3ac096'],
    title: {
      text: `${CITIES[mapStore.curCity]}人口迁${mapStore.isIn ? '入' : '出'}概览`,
      x: 'center'
    }
  };
  watch(
    () => mapStore.curChart,
    () => {
      option = {
        tooltip: {
          trigger: 'item',
          position: 'right',
          formatter: '{c}人',
          backgroundColor: '#45474b',
          borderWidth: 0,
          textStyle: {
            color: '#fff'
          }
        },
        dataset: {
          dimensiosns: ['name', 'value'],
          source: toRaw(mapStore.curChart)
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: [props.radius ? props.radius : 17, '70%'],
            itemStyle: {
              borderRadius: 1,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: true
            },
            labelLayout: {
              hideOverlap: false
            }
          }
        ],
        // color: props.colorSet ? props.colorSet : ['#e6584f', '#f79045', '#8e9aff', '#3ac096'],
        title: {
          text: `${CITIES[mapStore.curCity]}人口迁${mapStore.isIn ? '入' : '出'}概览`,
          x: 'center'
        }
      };
      dataChart.value!.setOption(option);
    }
  );

  onMounted(() => {
    dataChart.value = echarts.init(Chart.value! as HTMLElement);

    option && dataChart.value.setOption(option);

    window.addEventListener('resize', () => {
      dataChart.value && dataChart.value.resize();
    });
  });
</script>

<template>
  <div full frc pl pr box-border> <div id="pieChart" ref="Chart"> </div> </div>
</template>

<style lang="scss" scoped>
  #pieChart {
    height: 700px;
    width: 700px;
  }
</style>

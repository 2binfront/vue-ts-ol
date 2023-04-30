<script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue';
  import * as echarts from 'echarts/core';
  import { TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components';
  import { PieChart } from 'echarts/charts';
  import { LabelLayout } from 'echarts/features';
  import { CanvasRenderer } from 'echarts/renderers';
  import type { EChartsType } from 'echarts/core';

  const Chart = ref(null);
  const props = defineProps(['dataset', 'radius', 'colorSet', 'title']);
  const dataChart = ref<EChartsType>();
  echarts.use([
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
  ]);
  watch(
    () => props,
    (v: any) => {
      if (dataChart.value) {
        const option: any = dataChart.value.getOption();
        option.series[0].data = v;
        dataChart.value.setOption(option);
      }
    }
  );

  onMounted(() => {
    dataChart.value = echarts.init(Chart.value! as HTMLElement);
    const option = {
      tooltip: {
        trigger: 'item',
        position: 'right',
        formatter: '{b}: {c}单位',
        backgroundColor: '#45474b',
        borderWidth: 0,
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: [props.radius ? props.radius : 17, '100%'],
          itemStyle: {
            borderRadius: 1,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false
          },
          data: props.dataset,
          hoverAnimation: false
        }
      ],
      color: props.colorSet ? props.colorSet : ['#e6584f', '#f79045', '#8e9aff', '#3ac096'],
      title: props.title || null
    };

    option && dataChart.value.setOption(option);

    window.addEventListener('resize', () => {
      dataChart.value && dataChart.value.resize();
    });
  });
</script>

<template>
  <div full frc> <div id="pieChart" ref="Chart"> </div> </div>
</template>

<style lang="scss" scoped>
  #pieChart {
    height: 500px;
    width: 500px;
  }
</style>

<script lang="ts" setup>
  import * as echarts from 'echarts';
  import { onMounted, ref } from 'vue';
  import eg from '@/assets/中华人民共和国.json';

  const chartDom = ref();
  const testData = [
    { name: '北京市', value: 20057.34 },
    { name: '天津市', value: 15477.48 },
    { name: '河北省', value: 31686.1 },
    { name: '山西省', value: 6992.6 },
    { name: '内蒙古自治区', value: 44045.49 },
    { name: '辽宁省', value: 40689.64 },
    { name: '吉林省', value: 37659.78 },
    { name: '黑龙江省', value: 45180.97 },
    { name: '上海市', value: 55204.26 },
    { name: '江苏省', value: 21900.9 },
    { name: '浙江省', value: 4918.26 },
    { name: '安徽省', value: 5881.84 },
    { name: '福建省', value: 4178.01 },
    { name: '江西省', value: 2227.92 },
    { name: '山东省', value: 2180.98 },
    { name: '河南省', value: 9172.94 },
    { name: '湖北省', value: 3368 },
    { name: '湖南省', value: 806.98 },
    { name: '广东省', value: 806.98 },
    { name: '广西壮族自治区', value: 806.98 },
    { name: '海南省', value: 806.98 },
    { name: '重庆市', value: 806.98 },
    { name: '四川省', value: 806.98 },
    { name: '贵州省', value: 806.98 },
    { name: '云南省', value: 806.98 },
    { name: '西藏自治区', value: 806.98 },
    { name: '陕西省', value: 806.98 },
    { name: '甘肃省', value: 806.98 },
    { name: '青海省', value: 806.98 },
    { name: '宁夏回族自治区', value: 806.98 },
    { name: '新疆维吾尔自治区', value: 806.98 }
  ];

  // const randomPieSeries = (center, radius) => {
  //   const data = [
  //     '北京市',
  //     '天津市',
  //     '河北省',
  //     '山西省',
  //     '内蒙古自治区',
  //     '辽宁省',
  //     '吉林省',
  //     '黑龙江省',
  //     '上海市',
  //     '江苏省',
  //     '浙江省',
  //     '安徽省',
  //     '福建省',
  //     '江西省',
  //     '山东省',
  //     '河南省',
  //     '湖北省',
  //     '湖南省',
  //     '广东省',
  //     '广西壮族自治区',
  //     '海南省',
  //     '重庆市',
  //     '四川省',
  //     '贵州省',
  //     '云南省',
  //     '西藏自治区',
  //     '陕西省',
  //     '甘肃省',
  //     '青海省',
  //     '宁夏回族自治区',
  //     '新疆维吾尔自治区',
  //     '台湾省',
  //     '香港特别行政区',
  //     '澳门特别行政区'
  //   ].map((t) => {
  //     return {
  //       value: Math.round(Math.random() * 100),
  //       name: 'Category ' + t
  //     };
  //   });
  //   return {
  //     type: 'pie',
  //     coordinateSystem: 'geo',
  //     tooltip: {
  //       formatter: '{b}: {c} ({d}%)'
  //     },
  //     label: {
  //       show: false
  //     },
  //     labelLine: {
  //       show: false
  //     },
  //     animationDuration: 0,
  //     radius,
  //     center,
  //     data
  //   };
  // };

  const initCharts = () => {
    console.log(chartDom.value.offsetHeight);
    const myChart = echarts.init(chartDom.value);
    echarts.registerMap('China', eg as any);
    const option = {
      title: {
        text: 'Interprovincial Population Migration in China （2000-2020）',
        subtext: 'Data from National Bureau of Statistics of China',
        sublink: 'http://www.stats.gov.cn/'
      },
      tooltip: {
        trigger: 'item'
        // formatter: '{b}<br/>{c} 人'
      },

      zoom: 1, // 当前视角的缩放比例
      roam: true, // 是否开启平游或缩放
      scaleLimit: {
        // 滚轮缩放的极限控制
        min: 1,
        max: 10
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      visualMap: {
        min: 100,
        max: 200000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series: [
        {
          name: '中国省级人口迁移总览',
          type: 'map',
          map: 'China',
          emphasis: {
            label: {
              show: true
            }
          },
          // 北京市	NaN
          // 天津市	NaN
          // 河北省	NaN
          // 山西省	NaN
          // 内蒙古自治区	NaN
          // 辽宁省	NaN
          // 吉林省	NaN
          // 黑龙江省	NaN
          // 上海市	NaN
          // 江苏省	NaN
          // 浙江省	NaN
          // 安徽省	NaN
          // 福建省	NaN
          // 江西省	NaN
          // 山东省	NaN
          // 河南省	NaN
          // 湖北省	NaN
          // 湖南省	NaN
          // 广东省	NaN
          // 广西壮族自治区	NaN
          // 海南省	NaN
          // 重庆市	NaN
          // 四川省	NaN
          // 贵州省	NaN
          // 云南省	NaN
          // 西藏自治区	NaN
          // 陕西省	NaN
          // 甘肃省	NaN
          // 青海省	NaN
          // 宁夏回族自治区	NaN
          // 新疆维吾尔自治区	NaN
          // 台湾省	NaN
          // 香港特别行政区	NaN
          // 澳门特别行政区	NaN
          data: [
            { name: '北京市', value: 20057.34 },
            { name: '天津市', value: 15477.48 },
            { name: '河北省', value: 31686.1 },
            { name: '山西省', value: 6992.6 },
            { name: '内蒙古自治区', value: 44045.49 },
            { name: '辽宁省', value: 40689.64 },
            { name: '吉林省', value: 37659.78 },
            { name: '黑龙江省', value: 45180.97 },
            { name: '上海市', value: 55204.26 },
            { name: '江苏省', value: 21900.9 },
            { name: '浙江省', value: 4918.26 },
            { name: '安徽省', value: 5881.84 },
            { name: '福建省', value: 4178.01 },
            { name: '江西省', value: 2227.92 },
            { name: '山东省', value: 2180.98 },
            { name: '河南省', value: 9172.94 },
            { name: '湖北省', value: 3368 },
            { name: '湖南省', value: 806.98 },
            { name: '广东省', value: 806.98 },
            { name: '广西壮族自治区', value: 806.98 },
            { name: '海南省', value: 806.98 },
            { name: '重庆市', value: 806.98 },
            { name: '四川省', value: 806.98 },
            { name: '贵州省', value: 806.98 },
            { name: '云南省', value: 806.98 },
            { name: '西藏自治区', value: 806.98 },
            { name: '陕西省', value: 806.98 },
            { name: '甘肃省', value: 806.98 },
            { name: '青海省', value: 806.98 },
            { name: '宁夏回族自治区', value: 806.98 },
            { name: '新疆维吾尔自治区', value: 806.98 }
            // { name: '台湾省', value: 806.98 },
            // { name: '香港特别行政区', value: 806.98 },
            // { name: '澳门特别行政区', value: 806.98 }
          ]
        }
        // randomPieSeries(eg.features[1].properties.center, 10)
      ]
    };

    myChart.setOption(option);
    myChart.on('click', (param) => {
      console.log('output->param.name', param.name);
    });
    window.addEventListener('resize', function () {
      myChart.resize();
    });
  };

  onMounted(() => {
    initCharts();
  });
</script>

<template>
  <div class="chart-container" frc full>
    <!-- <pieChart></pieChart> -->
    <div h-full frc relative b-r>
      <router-link to="/" absolute style="top: 0; left: 0">返回主页</router-link>
      <pieChart
        flex-1
        full
        :dataset="testData"
        :color-set="[
          '#5bb181',
          '#59ce77',
          '#70de68',
          '#389554',
          '#195142',
          '#1bf84a',
          '#10d2bd',
          '#e1ff7d',
          '#f3bd03',
          '#fef654',
          '#5bb181',
          '#59ce77',
          '#70de68',
          '#389554',
          '#195142',
          '#1bf84a',
          '#10d2bd',
          '#e1ff7d',
          '#f3bd03',
          '#fef654',
          '#5bb181',
          '#59ce77',
          '#70de68',
          '#389554',
          '#195142',
          '#1bf84a',
          '#10d2bd',
          '#e1ff7d',
          '#f3bd03',
          '#fef654',
          '#5bb181'
        ]"
      ></pieChart
    ></div>
    <div ref="chartDom" class="human-charts"> </div>
  </div>
</template>

<style lang="scss" scoped>
  .chart-container {
    overflow: auto;
  }
  .human-charts {
    height: 100%;
    width: 100%;
    flex: 1 1 0%;
  }
</style>

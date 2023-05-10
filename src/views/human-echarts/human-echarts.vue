<script lang="ts" setup>
  import * as echarts from 'echarts';
  import { onMounted, ref, toRaw, watch, nextTick } from 'vue';
  import eg from '@/assets/中华人民共和国.json';
  // import data2020 from '@/assets/data/2020.json';

  import { useMapInfoStore } from '@/store/mapInfo';

  const chartDom = ref();

  const colorSet = [
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
  ];
  const mapStore = useMapInfoStore();
  // const dimensiosns = ['name', 'value'];

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
  let option = {
    title: {
      subtext: '数据来源于中国国家统计局',
      sublink: 'http://www.stats.gov.cn/'
    },
    dataset: {
      dimensiosns: ['name', 'value'],
      source: toRaw(mapStore.curChart)
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
          // optionToContent: (opt: any) => {
          //   // return toRaw(mapStore.curChart);
          //   // let source = toRaw(mapStore.curChart);
          //   // let series = dimensiosns;
          //   // let table =
          //   //   '<table style="width:100%;text-align:center"><tbody><tr>' +
          //   //   '<td>' +
          //   //   series[0] +
          //   //   '</td>' +
          //   //   '<td>' +
          //   //   series[1] +
          //   //   '</td>' +
          //   //   '</tr>';
          //   // for (var i = 0, l = source.length; i < l; i++) {
          //   //   table +=
          //   //     '<tr>' +
          //   //     '<td>' +
          //   //     source[i][0] +
          //   //     '</td>' +
          //   //     '<td>' +
          //   //     source[i][1] +
          //   //     '</td>' +
          //   //     '</tr>';
          //   // }
          //   // table += '</tbody></table>';
          //   // return table;
          //   // return JSON.stringify(toRaw(mapStore.curChart));
          // }
          // contentToOption: (container: HTMLElement, opt: any) => {
          //   console.log(opt.dataset);
          //   return opt;
          // }
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
          },
          label: {
            show: true
          }
        },
        datasetIndex: 0
      }
      // randomPieSeries(eg.features[1].properties.center, 10)
    ]
  };
  const initCharts = () => {
    const myChart = echarts.init(chartDom.value);
    echarts.registerMap('China', eg as any);

    myChart.setOption(option);
    // myChart.on('click', (param) => {
    //   console.log('output->param.name', param.name);
    // });
    // myChart.on('georoam', () => {
    //   console.log('hello roam');
    // });
    myChart.on('selectchanged', (param: any) => {
      //param.selected[0].dataIndex[0]
      const index = param.selected[0] && param.selected[0].dataIndex[0];
      console.log(index);
      mapStore.setCity(index);
      myChart.dispose();
      // initCharts();
      // myChart.setOption(option, true);
      // myChart.dispatchAction({ type: 'select', dataIndex: index });
    });

    window.addEventListener('resize', function () {
      myChart.resize();
    });
  };
  watch(
    () => mapStore.curChart,
    () => {
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
              // optionToContent: (opt: any) => {
              //   // return toRaw(mapStore.curChart);
              //   let source = opt.dataset.source;
              //   let series = opt.dataset.dimensiosns;
              //   let table =
              //     '<table style="width:100%;text-align:center"><tbody><tr>' +
              //     '<td>' +
              //     series[0] +
              //     '</td>' +
              //     '<td>' +
              //     series[1] +
              //     '</td>' +
              //     '</tr>';
              //   for (var i = 0, l = source.length; i < l; i++) {
              //     table +=
              //       '<tr>' +
              //       '<td>' +
              //       source[i][0] +
              //       '</td>' +
              //       '<td>' +
              //       source[i][1] +
              //       '</td>' +
              //       '</tr>';
              //   }
              //   table += '</tbody></table>';
              //   return table;
              //   // return JSON.stringify(toRaw(mapStore.curChart));
              // },
              // contentToOption: (container: HTMLElement, opt: any) => {
              //   return opt;
              // }
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
          source: toRaw(mapStore.curChart)
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
              },
              label: {
                show: true
              }
            },
            datasetIndex: 0
          }
          // randomPieSeries(eg.features[1].properties.center, 10)
        ]
      };
      console.log('change');
      // console.log(toRaw(mapStore.curChart));
      nextTick(() => initCharts());
    }
  );

  onMounted(() => {
    initCharts();
  });
</script>

<template>
  <div class="chart-container" flex full>
    <div b-r frc flex-col class="w-[50%] h-[calc(100vh-49px)]">
      <pieChart :color-set="colorSet"></pieChart>
      <!-- <pieChart :dataset="testData" :color-set="colorSet"></pieChart> -->
    </div>

    <div id="map" ref="chartDom" class="human-charts h-[calc(100vh-49px)]" flex-1> </div>
  </div>
</template>

<style lang="scss" scoped>
  .chart-container {
    overflow: auto;
  }
</style>

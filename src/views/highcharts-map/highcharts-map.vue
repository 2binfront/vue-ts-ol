<script lang="ts" setup>
  import eg from '@/assets/中华人民共和国.json';
  import { computed, nextTick, onMounted, ref, watch } from 'vue';
  import Highcharts from 'highcharts';
  import useMapCharts from 'highcharts/modules/map'; // 引入地图模块
  import HighchartsFlowMap from 'highcharts/modules/flowmap';
  import Exporting from 'highcharts/modules/exporting';
  import OfflineExporting from 'highcharts/modules/offline-exporting';
  import { useMapInfoStore } from '@/store/mapInfo';
  import { CITIES, ALLCENTER, WCITIES, MCITIES } from '@/types';
  useMapCharts(Highcharts); // 将地图插件挂载到highcharts中
  HighchartsFlowMap(Highcharts); // 将flowmap插件挂载到highcharts中
  Exporting(Highcharts);
  OfflineExporting(Highcharts);

  const mapStore = useMapInfoStore();

  let flow: any = [];
  const rangeWeight = ref([0, 300000]);
  const rangeWidth = ref([4, 30]);
  // const maxW = ref(100);
  // const minW = ref(5);
  // let max = 0;
  const curve = ref(0.2);
  const growNum = ref(0);
  const grow = computed(() => (growNum.value ? true : false));

  //'rgb(205, 91, 147)'
  const color = ref('rgba(205, 91, 147)');
  const colorW = ref('#ff5722');
  const colorM = ref('#4caf50');
  const colorE = ref('#29b6f6');
  const linecolor = ref('rgba(255, 255, 255)');
  const linecolorW = ref('rgba(255, 255, 255)');
  const linecolorM = ref('rgba(255, 255, 255)');
  const linecolorE = ref('rgba(255, 255, 255)');
  const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577'
  ]);

  const updateFlow = () => {
    flow = [];
    //第一层判断是否是全国迁入迁出流
    if (mapStore.isCountry) {
      //第二层判断是不是迁入流，多余
      // if (mapStore.isIn) {
      //两层循环，当前为全国总迁入迁出
      // for (let i = 0; i < 31; i++) {
      //   for (let j = 0; j < 32; j++) {
      //     //第三层判断过滤上下界
      //     if (
      //       mapStore.curChart[i * 32 + j][1] < rangeWeight.value[0] ||
      //       mapStore.curChart[i * 32 + j][1] > rangeWeight.value[1]
      //     ) {
      //       continue;
      //     }
      //     flow.push({
      //       from: mapStore.curChart[i * 32 + j][0],
      //       to: CITIES[i],
      //       // curveFactor: 0.4,
      //       weight: mapStore.curChart[i * 32 + j][1],
      //       growTorwards: true,
      //       markerEnd: {
      //         enabled: true,
      //         height: 12,
      //         width: 8
      //       }
      //     });
      //   }
      // }
      // }
      //第二层判断：迁出流，多余
      // else {
      for (let i = 0; i < 31; i++) {
        for (let j = 0; j < 32; j++) {
          if (
            mapStore.curChart[i * 32 + j][1] < rangeWeight.value[0] ||
            mapStore.curChart[i * 32 + j][1] > rangeWeight.value[1]
          ) {
            continue;
          }
          if (WCITIES.includes(CITIES[i])) {
            flow.push({
              from: CITIES[i],
              to: mapStore.curChart[i * 32 + j][0],
              // curveFactor: 0.4,
              weight: mapStore.curChart[i * 32 + j][1],
              growTorwards: true,
              fillColor: colorW.value,
              color: linecolorW.value,
              markerEnd: {
                enabled: true,
                height: 12,
                width: 8
              }
            });
          } else if (MCITIES.includes(CITIES[i])) {
            flow.push({
              from: CITIES[i],
              to: mapStore.curChart[i * 32 + j][0],
              // curveFactor: 0.4,
              weight: mapStore.curChart[i * 32 + j][1],
              growTorwards: true,
              fillColor: colorM.value,
              color: linecolorM.value,
              markerEnd: {
                enabled: true,
                height: 12,
                width: 8
              }
            });
          } else {
            flow.push({
              from: CITIES[i],
              to: mapStore.curChart[i * 32 + j][0],
              // curveFactor: 0.4,
              weight: mapStore.curChart[i * 32 + j][1],
              growTorwards: true,
              fillColor: colorE.value,
              color: linecolorE.value,
              markerEnd: {
                enabled: true,
                height: 12,
                width: 8
              }
            });
          }
        }
      }
      // }
    }
    //不是全国，根据当前城市计算迁入迁出情况
    else {
      if (mapStore.isIn) {
        //找到当前城市
        for (const each of mapStore.curChart) {
          // if (each[1] > max) max = each[1];
          if (each[1] < rangeWeight.value[0] || each[1] > rangeWeight.value[1]) continue;
          flow.push({
            from: each[0],
            to: CITIES[mapStore.curCity],
            // curveFactor: 0.4,
            weight: each[1],
            growTorwards: true,
            fillColor: color.value,
            color: linecolor.value,
            markerEnd: {
              enabled: true,
              height: 12,
              width: 8
            }
          });
        }
      } else {
        for (const each of mapStore.curChart) {
          // if (each[1] > max) max = each[1];
          if (each[1] < rangeWeight.value[0] || each[1] > rangeWeight.value[1]) continue;
          flow.push({
            from: CITIES[mapStore.curCity],
            to: each[0],
            // curveFactor: 0.4,
            weight: each[1],
            growTorwards: true,
            fillColor: color.value,
            color: linecolor.value,
            markerEnd: {
              enabled: true,
              height: 12,
              width: 8
            }
          });
        }
      }
    }

    // console.log(max);
  };
  updateFlow();

  const initHighchart = () => {
    Highcharts.mapChart('container', {
      exporting: {
        chartOptions: {
          // specific options for the exported image
          plotOptions: {
            series: {
              dataLabels: {
                enabled: true
              }
            }
          }
        },
        //待更新字体
        // pdfFont: {
        //   normal: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Regular.ttf',
        //   bold: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Bold.ttf',
        //   bolditalic: 'https://www.highcharts.com/samples/data/fonts/NotoSans-BoldItalic.ttf',
        //   italic: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Italic.ttf'
        // },
        allowHTML: true,
        printMaxWidth: 6000,
        // sourceWidth: 2000,
        // sourceHeight: 4000,
        scale: 10,
        width: 2000,
        fallbackToExportServer: false
      },
      chart: {
        map: eg
      },
      title: {
        text: '',
        margin: 4,
        align: 'left',
        style: {
          textOutline: '5px contrast'
        }
      },
      mapNavigation: {
        enabled: true
      },
      mapView: {
        projection: {
          rotation: [-150],
          name: 'Miller'
        }
      },
      accessibility: {
        point: {
          valueDescriptionFormat: '{xDescription}.'
        }
      },
      plotOptions: {
        mappoint: {
          tooltip: {
            headerFormat: '{point.option.id}',
            pointFormat: '{point.id}'
          }
        }
      },
      series: [
        {
          name: '底图'
          // showInLegend: false,
        },
        {
          name: '城市中心',
          type: 'mappoint',
          // showInLegend: false,
          dataLabels: {
            format: '{point.id}',
            y: -7,
            color: 'contrast'
          },
          marker: {
            symbol: 'mapmarker'
          },
          data: ALLCENTER,
          zIndex: 1
        },
        {
          name: `${mapStore.isIn ? '迁入' : '迁出'}流`,
          type: 'flowmap',
          showInLegend: true,
          accessibility: {
            point: {
              valueDescriptionFormat:
                'Origin: {point.options.from:.2f}, Destination: {point.options.to:.2f}.'
            },
            description: 'This is a map showing where early humans migrated.'
          },
          minWidth: rangeWidth.value[0],
          maxWidth: rangeWidth.value[1],
          growTowards: grow.value,
          curveFactor: curve.value,
          // fillColor: color.value,
          // color: linecolor.value,
          states: {
            hover: {
              color: '#777777',
              borderColor: 'black'
            }
          },
          data: flow,
          zIndex: 5
        }
      ]
    });
  };

  watch(
    [() => rangeWidth, rangeWeight, curve, grow],
    () => {
      console.log('success');
      updateFlow();
      nextTick(() => initHighchart());
    },
    {
      deep: true
    }
  );

  watch(
    () => [color, linecolor, colorE, colorM, colorW, linecolorE, linecolorM, linecolorW],
    () => {
      console.log('success');
      updateFlow();
      nextTick(() => initHighchart());
    },
    {
      deep: true
    }
  );
  watch(
    () => mapStore.curChart,
    () => {
      console.log('success');
      updateFlow();
      nextTick(() => initHighchart());
    }
  );

  onMounted(() => {
    initHighchart();
  });
</script>

<template>
  <!-- <div id="map" class="map-container"> </div> -->
  <div
    class="hightcharts-map"
    style="height: calc(100vh - 40px); width: 100%; overflow: hidden"
    relative
  >
    <el-collapse class="w-[500px] top-[10px] left-[42px] z-99" absolute>
      <el-collapse-item title="迁移流设置" name="1">
        <!-- <div class="slider-block" pl pr>
          <span class="demonstration">迁移流最小宽度</span>
          <el-slider v-model="minW" show-input />
        </div>
        <div class="slider-block" pl pr>
          <span class="demonstration">迁移流最大宽度</span>
          <el-slider v-model="maxW" :max="500" show-input />
        </div> -->
        <div class="slider-block" pl pr>
          <span class="demonstration">迁移流宽度范围</span>
          <el-slider v-model="rangeWidth" range show-stops :step="0.5" :max="150" />
        </div>
        <div class="slider-block" pl pr>
          <span class="demonstration">迁移流曲度</span>
          <el-slider v-model="curve" :max="3" :step="0.1" show-input />
        </div>
        <div class="slider-block" pl pr flex flex-col>
          <span class="demonstration">单个迁移流箭头样式</span>
          <el-radio-group v-model="growNum" block>
            <el-radio :label="0">首尾等宽(默认)</el-radio>
            <el-radio :label="1">宽度递增</el-radio>
          </el-radio-group>
        </div>

        <template v-if="mapStore.isCountry">
          <div class="slider-block" pl pr>
            <span class="demonstration">西部迁移流填充色</span>
            <el-color-picker v-model="colorW" show-alpha :predefine="predefineColors" />
          </div>
          <div class="slider-block" pl pr>
            <span class="demonstration">中部迁移流填充色</span>
            <el-color-picker v-model="colorM" show-alpha :predefine="predefineColors" />
          </div>
          <div class="slider-block" pl pr>
            <span class="demonstration">东部迁移流填充色</span>
            <el-color-picker v-model="colorE" show-alpha :predefine="predefineColors" />
          </div>
          <div class="slider-block" pl pr>
            <span class="demonstration">西部迁移流外边线颜色</span>
            <el-color-picker v-model="linecolorW" show-alpha :predefine="predefineColors" />
          </div>
          <div class="slider-block" pl pr>
            <span class="demonstration">中部迁移流外边线颜色</span>
            <el-color-picker v-model="linecolorM" show-alpha :predefine="predefineColors" />
          </div>
          <div class="slider-block" pl pr>
            <span class="demonstration">东部迁移流外边线颜色</span>
            <el-color-picker v-model="linecolorE" show-alpha :predefine="predefineColors" />
          </div>
        </template>
        <template v-else>
          <div class="slider-block" pl pr>
            <span class="demonstration">迁移流填充色</span>
            <el-color-picker v-model="color" show-alpha :predefine="predefineColors" />
          </div>
          <div class="slider-block" pl pr>
            <span class="demonstration">迁移流外边线颜色</span>
            <el-color-picker v-model="linecolor" show-alpha :predefine="predefineColors" /> </div
        ></template>

        <div v-if="mapStore.curCity < 31" class="slider-block" pl pr>
          <span class="demonstration">迁移流过滤(每条迁移流人数)</span>
          <div frb
            ><span style="white-space: nowrap" mr-4>下界</span>
            <el-slider v-model="rangeWeight[0]" :max="300000" show-input />
          </div>
          <div frb
            ><span style="white-space: nowrap" mr-4>上界</span
            ><el-slider v-model="rangeWeight[1]" :max="300000" show-input />
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div id="container" full></div>
  </div>
  <!-- <div full>
    <iframe
      src="src/assets/gaode/migration.html"
      frameborder="0"
      style="height: calc(100vh - 40px); width: 100%"
    ></iframe
  ></div> -->
</template>

<style lang="scss" scoped>
  .hightcharts-map {
    :deep(.el-collapse-item__wrap) {
      background-color: #f3f3f3;
      padding: 1rem 1rem 0 1rem;
    }
  }
</style>

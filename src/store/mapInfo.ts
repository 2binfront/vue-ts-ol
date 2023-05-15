import { defineStore } from 'pinia';
import data2020 from '@/assets/data/2020.json';
import data2015 from '@/assets/data/2015.json';
import data2010 from '@/assets/data/2010.json';
import data2005 from '@/assets/data/2005.json';
import data2000 from '@/assets/data/2000.json';
import { ref, toRaw } from 'vue';
import { CITIES } from '@/types';

//curData应该包含当前城市在当前时间段与所有其他城市的迁入/迁出情况
//curData中的curCity字段值由此应当为
export const useMapInfoStore = defineStore('mapInfo', () => {
  const curCity = ref<number>(0);
  const curTime = ref<'2000' | '2005' | '2010' | '2015' | '2020'>('2020');
  const isIn = ref<boolean>(true);
  //[{string,number}]
  const curChart: any = ref([]);
  const curSrc: any = ref();
  const isCountry = ref(true);

  const ALLDATA = {
    data2000,
    data2005,
    data2010,
    data2015,
    data2020
  };

  const setCity = (index: number) => {
    curCity.value = index;
    isCountry.value = false;
    updateData();
  };

  const setTime = (time: '2000' | '2005' | '2010' | '2015' | '2020') => {
    curTime.value = time;
    if (!isCountry.value) updateData();
    else updateCountry();
  };

  const switchState = (state: string) => {
    if (state === 'in') {
      isIn.value = true;
      if (!isCountry.value) updateData();
      else updateCountry();
    } else {
      isIn.value = false;
      if (!isCountry.value) updateData();
      else updateCountry();
    }
  };

  const switchtoCountry = () => {
    isCountry.value = true;
    updateCountry();
  };

  const updateData = () => {
    curSrc.value = ALLDATA[`data${curTime.value}`];
    const tmp = curSrc.value[curCity.value + 1];
    if (isIn.value) {
      curChart.value = [];
      Object.keys(tmp).forEach((key) => {
        for (const city of CITIES) {
          if (city.includes(key)) {
            curChart.value.push([city, parseInt(tmp[key])]);
            break;
          }
        }
      });
    } else {
      curChart.value = [];
      for (let i = 0; i < 31; i++) {
        const tmpOut = toRaw(curSrc.value[i + 1]);
        Object.keys(tmpOut).forEach((key) => {
          if (CITIES[curCity.value].includes(key)) {
            curChart.value.push([CITIES[i], parseInt(tmpOut[key])]);
          }
        });
      }
    }
    console.log(toRaw(curChart.value));
  };

  //计算总迁入迁出
  const updateCountry = () => {
    curSrc.value = ALLDATA[`data${curTime.value}`];
    if (isIn.value) {
      curChart.value = [];
      for (let j = 0; j < 31; j++) {
        const tmp = curSrc.value[j + 1];
        Object.keys(tmp).forEach((key) => {
          for (const city of CITIES) {
            if (city.includes(key)) {
              curChart.value.push([city, parseInt(tmp[key])]);
              break;
            }
          }
        });
        if (curTime.value === '2005') {
          curChart.value.push(['港澳台或国外', 0]);
        }
      }
    } else {
      curChart.value = [];
      for (let j = 0; j < 31; j++) {
        for (let i = 0; i < 31; i++) {
          const tmpOut = toRaw(curSrc.value[i + 1]);
          Object.keys(tmpOut).forEach((key) => {
            if (CITIES[j].includes(key)) {
              curChart.value.push([CITIES[i], parseInt(tmpOut[key])]);
            }
          });
        }
        curChart.value.push(['港澳台或国外', 0]);
      }
    }
    console.log(isIn.value, curChart.value);
  };

  // updateData();

  const chartLocal = ref<any>([]);
  const initLocal = () => {
    chartLocal.value = [];
    for (let i = 0; i < 31; i++) {
      let tmp = 0;
      for (let j = 0; j < 32; j++) {
        if (!curChart.value[i * 32 + j][1]) continue;
        tmp += curChart.value[i * 32 + j][1];
      }
      console.log(tmp);
      chartLocal.value.push([CITIES[i], tmp]);
    }
  };
  switchtoCountry();
  // updateCountry();
  initLocal();

  return {
    curCity,
    curTime,
    curChart,
    curSrc,
    isIn,
    isCountry,
    chartLocal,
    setCity,
    setTime,
    switchState,
    switchtoCountry,
    updateData,
    initLocal
  };
});

import { defineStore } from 'pinia';
import data2020 from '@/assets/data/2020.json';
import data2015 from '@/assets/data/2010.json';
import data2010 from '@/assets/data/2010.json';
import data2005 from '@/assets/data/2000.json';
import data2000 from '@/assets/data/2000.json';
import { ref, toRaw } from 'vue';
import { CITIES } from '@/types';

//curData应该包含当前城市在当前时间段与所有其他城市的迁入/迁出情况
//curData中的curCity字段值由此应当为
export const useMapInfoStore = defineStore('mapInfo', () => {
  const curCity = ref<number>(0);
  const curTime = ref<'2000' | '2005' | '2010' | '2015' | '2020'>('2020');
  const isIn = ref<boolean>(true);
  const curChart: any = ref([]);
  const curSrc: any = ref();

  const ALLDATA = {
    data2000,
    data2005,
    data2010,
    data2015,
    data2020
  };

  const setCity = (index: number) => {
    curCity.value = index;
    updateData();
  };

  const setTime = (time: '2000' | '2005' | '2010' | '2015' | '2020') => {
    curTime.value = time;
    updateData();
  };

  const switchState = (state: string) => {
    if (state === 'in') {
      isIn.value = true;
      updateData();
    } else {
      isIn.value = false;
      updateData();
    }
  };

  const updateData = () => {
    curSrc.value = ALLDATA[`data${curTime.value}`];
    const tmp = curSrc.value[curCity.value + 1];
    // console.log(toRaw(tmp));
    if (isIn.value) {
      curChart.value = [];
      Object.keys(tmp).forEach((key) => {
        // console.log(key);
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
        // console.log(tmpOut);
        // console.log(Object.keys(tmpOut));
        Object.keys(tmpOut).forEach((key) => {
          // console.log(key);
          if (CITIES[curCity.value].includes(key)) {
            curChart.value.push([CITIES[i], parseInt(tmpOut[key])]);
          }
        });
      }
    }
  };
  updateData();
  return {
    curCity,
    curTime,
    curChart,
    curSrc,
    isIn,
    setCity,
    setTime,
    switchState,
    updateData
  };
});

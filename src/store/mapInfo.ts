import { defineStore } from 'pinia';
import { ref } from 'vue';

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useMapInfoStore = defineStore('mapInfo', () => {
  const curCity = ref('');

  return {
    curCity
  };
});

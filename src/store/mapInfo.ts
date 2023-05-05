import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMapInfoStore = defineStore('mapInfo', () => {
  const curCity = ref('');

  return {
    curCity
  };
});

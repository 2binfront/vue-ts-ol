import { useDark, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useDarkStore = defineStore('darkMode', () => {
  const isDark = useDark();
  const toggle = useToggle(isDark);
  return {
    isDark,
    toggle
  };
});

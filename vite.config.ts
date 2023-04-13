import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),

    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true
        })
      ],
      shortcuts: {
        frc: 'flex items-center justify-center',
        fcc: 'flex flex-col items-center justify-center',
        fcb: 'flex flex-col items-center justify-between',
        frb: 'flex items-center justify-between',
        fre: 'flex items-center justify-evenly',
        full: 'w-full h-full',
        cp: 'cursor-pointer'
      },
      rules: [
        ['round', { 'border-radius': '50%' }],
        ['br-12', { 'border-radius': '12px' }],
        ['3d', { color: '#3D3D3D' }], //重要字体颜色
        ['74', { color: '#747474' }], //浅色字体颜色
        ['icon-color', { color: '#999999' }] //图标字体颜色
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()]
    })
  ]
  //暴露网络接口
  // server: {
  //   host:'0.0.0.0'
  // }
});

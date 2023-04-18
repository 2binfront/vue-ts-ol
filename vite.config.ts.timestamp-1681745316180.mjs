// vite.config.ts
import { defineConfig } from "file:///D:/proj/vue-ts-ol/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/proj/vue-ts-ol/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/proj/vue-ts-ol/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/proj/vue-ts-ol/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/proj/vue-ts-ol/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import Unocss from "file:///D:/proj/vue-ts-ol/node_modules/unocss/dist/vite.mjs";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from "file:///D:/proj/vue-ts-ol/node_modules/unocss/dist/index.mjs";
import cesium from "file:///D:/proj/vue-ts-ol/node_modules/vite-plugin-cesium/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "D:\\proj\\vue-ts-ol";
var vite_config_default = defineConfig({
  resolve: {
    //设置别名
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  plugins: [
    vue(),
    cesium(),
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
        frc: "flex items-center justify-center",
        fcc: "flex flex-col items-center justify-center",
        fcb: "flex flex-col items-center justify-between",
        frb: "flex items-center justify-between",
        fre: "flex items-center justify-evenly",
        full: "w-full h-full",
        cp: "cursor-pointer"
      },
      rules: [
        ["round", { "border-radius": "50%" }],
        ["br-12", { "border-radius": "12px" }],
        ["3d", { color: "#3D3D3D" }],
        //重要字体颜色
        ["74", { color: "#747474" }],
        //浅色字体颜色
        ["icon-color", { color: "#999999" }]
        //图标字体颜色
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()]
    })
  ]
  //暴露网络接口
  // server: {
  //   host:'0.0.0.0'
  // }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qXFxcXHZ1ZS10cy1vbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvalxcXFx2dWUtdHMtb2xcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2ovdnVlLXRzLW9sL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcclxuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSc7XHJcbmltcG9ydCB7XHJcbiAgcHJlc2V0QXR0cmlidXRpZnksXHJcbiAgcHJlc2V0SWNvbnMsXHJcbiAgcHJlc2V0VW5vLFxyXG4gIHRyYW5zZm9ybWVyRGlyZWN0aXZlcyxcclxuICB0cmFuc2Zvcm1lclZhcmlhbnRHcm91cFxyXG59IGZyb20gJ3Vub2Nzcyc7XHJcbmltcG9ydCBjZXNpdW0gZnJvbSAndml0ZS1wbHVnaW4tY2VzaXVtJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcmVzb2x2ZToge1xyXG4gICAgLy9cdThCQkVcdTdGNkVcdTUyMkJcdTU0MERcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpXHJcbiAgICB9XHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIGNlc2l1bSgpLFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgIH0pLFxyXG4gICAgVW5vY3NzKHtcclxuICAgICAgcHJlc2V0czogW1xyXG4gICAgICAgIHByZXNldFVubygpLFxyXG4gICAgICAgIHByZXNldEF0dHJpYnV0aWZ5KCksXHJcbiAgICAgICAgcHJlc2V0SWNvbnMoe1xyXG4gICAgICAgICAgc2NhbGU6IDEuMixcclxuICAgICAgICAgIHdhcm46IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICBdLFxyXG4gICAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgICBmcmM6ICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcicsXHJcbiAgICAgICAgZmNjOiAnZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInLFxyXG4gICAgICAgIGZjYjogJ2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbicsXHJcbiAgICAgICAgZnJiOiAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJyxcclxuICAgICAgICBmcmU6ICdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seScsXHJcbiAgICAgICAgZnVsbDogJ3ctZnVsbCBoLWZ1bGwnLFxyXG4gICAgICAgIGNwOiAnY3Vyc29yLXBvaW50ZXInXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1bGVzOiBbXHJcbiAgICAgICAgWydyb3VuZCcsIHsgJ2JvcmRlci1yYWRpdXMnOiAnNTAlJyB9XSxcclxuICAgICAgICBbJ2JyLTEyJywgeyAnYm9yZGVyLXJhZGl1cyc6ICcxMnB4JyB9XSxcclxuICAgICAgICBbJzNkJywgeyBjb2xvcjogJyMzRDNEM0QnIH1dLCAvL1x1OTFDRFx1ODk4MVx1NUI1N1x1NEY1M1x1OTg5Q1x1ODI3MlxyXG4gICAgICAgIFsnNzQnLCB7IGNvbG9yOiAnIzc0NzQ3NCcgfV0sIC8vXHU2RDQ1XHU4MjcyXHU1QjU3XHU0RjUzXHU5ODlDXHU4MjcyXHJcbiAgICAgICAgWydpY29uLWNvbG9yJywgeyBjb2xvcjogJyM5OTk5OTknIH1dIC8vXHU1NkZFXHU2ODA3XHU1QjU3XHU0RjUzXHU5ODlDXHU4MjcyXHJcbiAgICAgIF0sXHJcbiAgICAgIHRyYW5zZm9ybWVyczogW3RyYW5zZm9ybWVyRGlyZWN0aXZlcygpLCB0cmFuc2Zvcm1lclZhcmlhbnRHcm91cCgpXVxyXG4gICAgfSlcclxuICBdXHJcbiAgLy9cdTY2QjRcdTk3MzJcdTdGNTFcdTdFRENcdTYzQTVcdTUzRTNcclxuICAvLyBzZXJ2ZXI6IHtcclxuICAvLyAgIGhvc3Q6JzAuMC4wLjAnXHJcbiAgLy8gfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyTyxTQUFTLG9CQUFvQjtBQUN4USxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsT0FBTyxZQUFZO0FBQ25CO0FBQUEsRUFDRTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxPQUNLO0FBQ1AsT0FBTyxZQUFZO0FBQ25CLFlBQVksVUFBVTtBQWR0QixJQUFNLG1DQUFtQztBQWlCekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBO0FBQUEsSUFFUCxPQUFPO0FBQUEsTUFDTCxLQUFVLGFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1Ysa0JBQWtCO0FBQUEsUUFDbEIsWUFBWTtBQUFBLFVBQ1YsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFFBQ1IsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNULEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLElBQUk7QUFBQSxNQUNOO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsTUFBTSxDQUFDO0FBQUEsUUFDcEMsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLE9BQU8sQ0FBQztBQUFBLFFBQ3JDLENBQUMsTUFBTSxFQUFFLE9BQU8sVUFBVSxDQUFDO0FBQUE7QUFBQSxRQUMzQixDQUFDLE1BQU0sRUFBRSxPQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUEsUUFDM0IsQ0FBQyxjQUFjLEVBQUUsT0FBTyxVQUFVLENBQUM7QUFBQTtBQUFBLE1BQ3JDO0FBQUEsTUFDQSxjQUFjLENBQUMsc0JBQXNCLEdBQUcsd0JBQXdCLENBQUM7QUFBQSxJQUNuRSxDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

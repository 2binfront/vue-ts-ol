<script lang="ts" setup>
  import { Map, View } from 'ol';
  import { Control, ZoomSlider, defaults } from 'ol/control.js';
  import TileLayer from 'ol/layer/Tile.js';
  import { onMounted, ref, nextTick } from 'vue';
  import { transform } from 'ol/proj';
  import { XYZ } from 'ol/source/XYZ';
  import VectorLayer from 'ol/layer/Vector';
  import VectorSource from 'ol/source/Vector';
  import GeoJSON from 'ol/format/GeoJSON.js';
  import { Pixel } from 'ol/pixel';
  import { useMapInfoStore } from '../../store/mapInfo';
  import { Fill, Stroke, Style } from 'ol/style.js';
  import VectorImageLayer from 'ol/layer/VectorImage';

  const map = ref();
  // const key = '0e3b1438eda0a10745b2fead59d7e26a';
  // const key2 = 'c2ad2a597ef11fe6971203374d7d06bc';
  // const areaUrl = 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json';
  const areaUrl2 = 'src/assets/中华人民共和国.json';

  const chore = () => {
    const mapInfo = useMapInfoStore();
    // China vector
    const countryEdge = new VectorImageLayer({
      source: new VectorSource({
        url: areaUrl2,
        format: new GeoJSON()
      })
    });
    map.value = new Map({
      target: 'map',
      layers: [countryEdge], // 设置视图
      view: new View({
        projection: 'EPSG:3857', // 坐标系
        center: transform([100, 32], 'EPSG:4326', 'EPSG:3857'), // 中心点坐标
        zoom: 4.5 // 缩放等级
      })
    });

    const featureOverlay = new VectorLayer({
      source: new VectorSource(),
      map: map.value,
      style: new Style({
        fill: new Fill({
          color: 'orange'
        }),
        stroke: new Stroke({
          color: 'orange',
          width: 2
        })
      })
    });

    let highlight: any;
    const displayFeatureInfo = (pixel: Pixel) => {
      const feature = map.value.forEachFeatureAtPixel(pixel, (feature: any) => {
        return feature;
      });

      if (feature) {
        mapInfo.curCity = feature.get('name') || '&nbsp;';
      } else {
        mapInfo.curCity = '&nbsp;';
      }

      if (feature !== highlight) {
        if (highlight) {
          featureOverlay.getSource()!.removeFeature(highlight);
        }
        if (feature) {
          featureOverlay.getSource()!.addFeature(feature);
        }
        highlight = feature;
      }
    };

    map.value.on('click', (e: any) => {
      // if (e.dragging) return;
      const pixel: Pixel = map.value.getEventPixel(e.originalEvent);
      displayFeatureInfo(pixel);
    });
  };

  onMounted(() => {
    nextTick(() => {
      chore();
    });
  });
</script>

<template>
  <div id="map" relative></div>
</template>

<style lang="scss" scoped>
  :deep(.ol-control) {
    display: none;
  }
</style>

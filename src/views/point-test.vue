<script lang="ts" setup>
  import { ref, onMounted, type Ref, watch, nextTick } from 'vue';
  import { Map, View } from 'ol';
  import { FullScreen, defaults as defaultControls } from 'ol/control';
  import type { Map as MapType } from 'ol';
  import { Cluster } from 'ol/source';
  import VectorSource from 'ol/source/Vector';
  import Point from 'ol/geom/Point';
  import Feature from 'ol/Feature';
  import { Style, Circle as CircleStyle, Fill, Stroke } from 'ol/style';
  import { GeoJSON } from 'ol/format';
  import { Tile, Vector as VectorLayer } from 'ol/layer';

  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  const map = ref<any>();
  const test = () => {
    map.value = new Map({
      layers: [
        new Tile({
          preload: 4,
          source: new OSM({
            url: 'http://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
          })
        })
      ],
      view: new View({
        center: [116.407041, 39.898695],
        zoom: 2
      }),
      target: document.getElementById('testmap') as HTMLElement
    });
    const vectorSource = new VectorSource({
      features: [
        new Feature({
          geometry: new Point([116.407041, 39.898695]),
          name: '点',
          type: 'Point'
        })
      ]
    });
    const vectorLayer = new VectorLayer({
      className: 'point',
      source: vectorSource,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 1)'
        }),
        stroke: new Stroke({
          color: '#319FD3',
          width: 100
        }),
        image: new CircleStyle({
          radius: 8,
          fill: new Fill({
            color: '#fb512c'
          }),
          stroke: new Stroke({
            color: '#319FD3',
            width: 1
          })
        })
      }),
      zIndex: 8
    });
    map.value.addLayer(vectorLayer);

    const hightStyle = new Style({
      // 填充色
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      // 边线颜色
      stroke: new Stroke({
        color: '#FF0000',
        width: 5
      }),
      // 形状
      image: new CircleStyle({
        radius: 7,
        fill: new Fill({
          color: '#ffcc33'
        })
      })
    });
    const featureOverlay = new VectorLayer({
      source: new VectorSource(),
      map: map.value,
      style: hightStyle
    });
    let highlight: any;
    map.value.on('pointermove', function (evt: any) {
      if (evt.dragging) {
        return;
      }
      const pixel = map.value.getEventPixel(evt.originalEvent);
      vectorLayer.getFeatures(pixel).then(function (features) {
        const feature = features.length ? features[0] : undefined;
        if (feature !== highlight) {
          if (highlight) {
            featureOverlay.getSource().removeFeature(highlight);
          }
          if (feature) {
            featureOverlay.getSource().addFeature(feature);
          }
          highlight = feature;
        }
      });
    });
  };
  onMounted(() => {
    nextTick(() => {
      test();
    });
  });
</script>
<template>
  <div id="testmap"></div>
</template>
<style lang="scss" scoped>
  #testmap {
    height: 100vh;
    width: 100%;
    background-color: #f3f3f3;
  }
</style>

<script lang="ts" setup>
  import { Feature, Map, View } from 'ol';
  import { onMounted, ref } from 'vue';
  // import VectorLayer from 'ol/layer/Vector';
  import VectorSource from 'ol/source/Vector';
  import GeoJSON from 'ol/format/GeoJSON.js';
  import { Pixel } from 'ol/pixel';
  import { useMapInfoStore } from '../../store/mapInfo';
  import { Circle as CircleStyle, Fill, Stroke, Style, Text } from 'ol/style';
  import VectorImageLayer from 'ol/layer/VectorImage';
  import edgeChina from '@/assets/中华人民共和国.json';
  import { Layer } from 'ol/layer';
  import { Point } from 'ol/geom';
  import { Coordinate } from 'ol/coordinate';
  import CurvesLayer from 'ol-dynamic-curves';
  import { dataTest } from '@/views/human-map/calc';

  const map = ref();
  const areaUrl2 = 'src/assets/中华人民共和国.json';
  dataTest();
  const allStyles: any = {
    pointStyle: new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({
          color: 'rgba(10, 10, 10, 0.8)'
        }),
        stroke: new Stroke({
          color: 'white',
          width: 1
        })
      }),
      text: new Text({
        font: '13px Calibri,sans-serif',
        fill: new Fill({
          color: '#000'
        }),
        stroke: new Stroke({
          color: 'purple',
          width: 4
        })
      }),
      zIndex: Infinity
    }),
    Text: new Style({
      text: new Text({
        font: '13px Calibri,sans-serif',
        fill: new Fill({
          color: '#000'
        }),
        stroke: new Stroke({
          color: 'purple',
          width: 4
        })
      }),
      stroke: new Stroke({
        width: 1,
        color: 'purple'
      })
    }),
    Polygon: new Style({
      stroke: new Stroke({
        width: 1,
        color: 'purple'
      })
    }),
    MultiPolygon: new Style({
      stroke: new Stroke({
        width: 1,
        color: 'purple'
      })
    }),
    highlightEdge: new Style({
      fill: new Fill({
        color: 'orange'
      }),
      stroke: new Stroke({
        color: 'grey',
        width: 2
      }),
      text: new Text({
        font: '13px sans-serif',
        fill: new Fill({
          color: 'black'
        })
      })
    })
  };

  const chore = () => {
    // 默认底图src
    const edgeSource = new VectorSource({
      url: areaUrl2,
      format: new GeoJSON()
    });
    // edgeSource.once('change', () => {
    //   if (edgeSource.getState() === 'ready') {
    //     const features = edgeSource.getFeatures();
    //     // console.log('output->', features);
    //     for (const f of features) {
    //       const geom = f.getGeometry();
    //       const name = f.get('name');
    //       const newF = new Feature({
    //         geometry: geom,
    //         name
    //       });
    //       const textStyle = new Style({
    //         text: new Text({
    //           text: name,
    //           font: '13px sans-serif',
    //           fill: new Fill({
    //             color: 'black'
    //           }),
    //           textAlign: 'center',
    //           textBaseline: 'middle'
    //           // overflow: true
    //         }),
    //         zIndex: 10
    //       });
    //       newF.setStyle(textStyle);
    //       edgeSource.addFeature(newF);
    //     }
    //   }
    // });
    const mapInfo = useMapInfoStore();
    // China vector
    const countryEdge = new VectorImageLayer({
      name: 'baseImg',
      source: edgeSource
    });
    const styleHighlightFunc = (f: Feature) => {
      const highlightText = f.get('name');
      const highlightStyle = allStyles.highlightEdge;
      highlightStyle.getText().setText(highlightText);
      return highlightStyle;
    };

    map.value = new Map({
      target: map.value,
      layers: [countryEdge], // 设置视图
      view: new View({
        projection: 'EPSG:4326', // 坐标系
        // center: transform([100, 32], 'EPSG:4326', 'EPSG:3857'), // 中心点坐标
        center: [105, 32], // 中心点坐标
        zoom: 5 // 缩放等级
      })
    });
    const pointOverlay = new VectorImageLayer({
      source: new VectorSource(),
      map: map.value
    });
    for (const p of edgeChina.features) {
      const name = p.properties.name;
      if (!name) break;

      const centroid = p.properties.centroid ? p.properties.centroid : p.properties.center;
      const pFeature = new Feature({
        geometry: new Point(centroid as Coordinate),
        name
      });
      const pStyle = new Style({
        image: new CircleStyle({
          radius: 3,
          fill: new Fill({
            color: 'white'
          }),
          stroke: new Stroke({
            color: 'grey',
            width: 1
          })
        }),
        text: new Text({
          font: '12px 400 Calibri,sans-serif',
          // fill: new Fill({
          //   color: 'grey'
          // }),
          stroke: new Stroke({
            color: 'grey',
            width: 0.5
          }),
          textBaseline: 'hanging',
          offsetY: -14
          // padding: [10, 0, 0, 0]
        }),
        zIndex: Infinity
      });
      if (name === '香港特别行政区' || name === '澳门特别行政区') {
        pStyle.setText(
          new Text({
            font: '12px Calibri,sans-serif',
            fill: new Fill({
              color: 'grey'
            }),
            stroke: new Stroke({
              color: 'grey',
              width: 1
            }),
            textBaseline: 'hanging',
            offsetX: 50,
            offsetY: 5
          })
        );
      } else if (name === '台湾省') {
        pStyle.setText(
          new Text({
            font: '12px Calibri,sans-serif',
            fill: new Fill({
              color: 'grey'
            }),
            stroke: new Stroke({
              color: 'grey',
              width: 1
            }),
            textBaseline: 'hanging'
          })
        );
      }
      pStyle.getText().setText(name);
      pFeature.setStyle(pStyle);
      pointOverlay.getSource()!.addFeature(pFeature);
      console.log(pFeature.getStyle());
    }

    // 点击高亮的overlay
    const featureOverlay = new VectorImageLayer({
      source: new VectorSource(),
      map: map.value,
      style: styleHighlightFunc
    });

    // 曲线
    const curves = new CurvesLayer({
      map: map.value
    });
    // curves.addCurves([
    //   [
    //     [140.8, 15.9],
    //     [151.498262, -18.690718]
    //   ],
    //   [
    //     [140.8, 15.9],
    //     [152.498262, -18.690718]
    //   ]
    // ]);
    // curves.refreshCurvesCoords();

    // 高亮操作
    let highlight: any;
    const displayFeatureInfo = (pixel: Pixel) => {
      console.log(pixel);
      const feature = map.value.forEachFeatureAtPixel(
        pixel,
        (feature: any) => {
          // console.log(feature);
          return feature;
        },
        {
          layerFilter: (layer: Layer) => {
            return layer.get('name') === 'baseImg';
          }
        }
      );
      // const feature = map.value.getFeaturesAtPixel(pixel)[0];
      if (feature) {
        // console.log(feature.get('name'));
        // mapInfo.curCity = feature.get('name') || '&nbsp;';
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

    // 绑定矢量省点击事件
    map.value.on('click', (e: any) => {
      // if (e.dragging) return;
      const pixel: Pixel = e.pixel;
      displayFeatureInfo(pixel);
    });

    // map.value.on('pointermove', (e: any) => {
    //   if (e.dragging) return;
    //   const pixel: Pixel = map.value.getEventPixel(e.originalEvent);
    //   displayFeatureInfo(pixel);
    // });
  };

  onMounted(() => {
    chore();
  });
</script>

<template>
  <div id="map" ref="map" relative></div>
</template>

<style lang="scss" scoped>
  :deep(.ol-control) {
    display: none;
  }
</style>

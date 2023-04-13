<script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue';
  import { Feature, View, type Map } from 'ol';
  import { Map as MapServer } from 'ol';
  import { all, click } from 'ol/events/condition';
  import { Point } from 'ol/geom';
  import VectorSource from 'ol/source/Vector';
  import GeoJSON from 'ol/format/GeoJSON';
  import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
  import Select from 'ol/interaction/Select.js';
  import { transform } from 'ol/proj';
  import VectorLayer from 'ol/layer/Vector';
  import { Pixel } from 'ol/pixel';
  import { unByKey } from 'ol/Observable';
  import VectorImageLayer from 'ol/layer/VectorImage';

  const map = ref<Map | null>(null);
  const mapRef = ref();
  // 所有默认样式
  const allStyles: any = {
    baseStyle: new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({ color: 'rgba(10, 10, 10, 0.8)' }),
        stroke: new Stroke({ color: 'white', width: 1 })
      })
    }),
    highlightStyle: new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({
          color: '#1D7FF1'
        }),
        stroke: new Stroke({
          color: 'white',
          width: 2
        })
      }),
      zIndex: Infinity
    }),
    highlightStyle1: new Style({
      image: new CircleStyle({
        radius: 15,
        fill: new Fill({
          color: '#1D7FF1'
        }),
        stroke: new Stroke({
          color: 'white',
          width: 2
        })
      }),
      zIndex: Infinity
    }),
    MultiPoint: new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({ color: '#1D7FF1' }),
        stroke: new Stroke({ color: 'white', width: 2 })
      }),
      zIndex: Infinity
    })
  };

  // 矢量地图层
  const jsonUrl = 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json';
  const baseVec = new VectorImageLayer({
    source: new VectorSource({
      url: jsonUrl,
      format: new GeoJSON()
    })
  });

  // 增加矢量点
  const pointSource = new VectorSource();
  const points1 = new Feature({
    title: 'beijing',
    geometry: new Point(transform([116.403218, 39.92372], 'EPSG:4326', 'EPSG:3857'))
  });
  const points2 = new Feature({
    title: 'test',
    geometry: new Point(transform([116, 39], 'EPSG:4326', 'EPSG:3857'))
  });
  points1.setStyle(allStyles.baseStyle);
  points2.setStyle(allStyles.baseStyle);
  pointSource.addFeature(points1);
  pointSource.addFeature(points2);
  const pointLayer = new VectorImageLayer();
  pointLayer.setSource(pointSource);

  const initMap = () => {
    map.value = new MapServer({
      target: 'map',
      view: new View({
        projection: 'EPSG:3857',
        center: transform([110, 30], 'EPSG:4326', 'EPSG:3857'),
        zoom: 4.2
      }),
      layers: []
    });
    map.value!.addLayer(baseVec);
    map.value!.addLayer(pointLayer);
    map.value!.addLayer(pathLayer);
    pathLayer.setVisible(false);
  };

  let highlight: any;
  // const featureOverlay = new VectorLayer({
  //   source: new VectorSource(),
  //   map: map.value as Map,
  //   style: highlightStyle
  // });
  const featureHover = (pixel: Pixel) => {
    pointLayer.getFeatures(pixel).then((features) => {
      const feature = features.length ? features[0] : undefined;
      // console.log(feature, highlight);
      if (feature !== highlight) {
        if (highlight) {
          (highlight as Feature).setStyle(allStyles.baseStyle);
          console.log('hover active');
        }
        if (feature) {
          (feature as Feature).setStyle(allStyles.highlightStyle);
          // pointLayer.getSource()!.addFeature(feature as Feature);
          // console.log(feature, featureOverlay.getSource());
        }
        highlight = feature;
      }
    });
  };

  let highlight1: any;
  const featureClick = (pixel: Pixel) => {
    pointLayer.getFeatures(pixel).then((features) => {
      const feature = features.length ? features[0] : undefined;
      // 取消hover事件监听
      unByKey(moveKey.value);
      // console.log(feature, highlight);
      if (feature !== highlight1) {
        if (highlight1) {
          (highlight1 as Feature).setStyle(allStyles.baseStyle);
          console.log('hilight1:', highlight1);
        }
        if (feature) {
          drawerVisible.value = true;
          (feature as Feature).setStyle(allStyles.highlightStyle1);
          console.log(feature);
        } else {
          closeMobile();
          drawerVisible.value = false;
          moveKey.value = map.value!.on('pointermove', (evt: any) => {
            if (evt.dragging) {
              return;
            }
            const pixel = map.value!.getEventPixel(evt.originalEvent);
            featureHover(pixel);
          });
        }
        highlight1 = feature;
      }
    });
  };

  // 添加移动轨迹

  const getStyle = (feature: any) => {
    return allStyles[feature.getGeometry().getType()];
  };
  const coordinates = [
    transform([111.560502648354, 22.760694315193], 'EPSG:4326', 'EPSG:3857'),
    transform([112.560502648354, 20.760694315193], 'EPSG:4326', 'EPSG:3857'),
    transform([113.560502648354, 24.760694315193], 'EPSG:4326', 'EPSG:3857')
  ];
  allStyles.LineString = new Style({
    stroke: new Stroke({ color: '#1D7FF1', width: 2 }),
    fill: new Fill({ color: 'white' })
  });

  const geoObject = {
    type: 'FeatureCollection',
    crs: { type: 'name', properties: { name: 'EPSG:3857' } },
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates
        }
      },
      {
        type: 'Feature',
        geometry: { type: 'MultiPoint', coordinates }
      }
    ]
  };
  const pathSrc = new VectorSource({
    features: new GeoJSON().readFeatures(geoObject)
  });
  const pathLayer = new VectorLayer({
    source: pathSrc,
    style: getStyle as any
  });

  const showMobile = () => {
    pointLayer.setVisible(false);
    pathDetail.value = true;
    pathLayer.setVisible(true);
  };

  const closeMobile = () => {
    pointLayer.setVisible(true);
    pathDetail.value = false;
    pathLayer.setVisible(false);
  };

  const closeDrawer = () => {
    drawerVisible.value = false;
    (highlight1 as Feature).setStyle(allStyles.baseStyle);
    pathLayer.setVisible(false);
    pointLayer.setVisible(true);
  };
  // select 方式增加点击事件
  // const selected = new Style({
  //   image: new CircleStyle({
  //     radius: 20,
  //     fill: new Fill({ color: 'rgba(10, 10, 10, 0.8)' }),
  //     stroke: new Stroke({ color: 'red', width: 2 })
  //   })
  // });
  // const selectClick = new Select({
  //   condition: click,
  //   style: selected
  // });
  // const changeInteraction = () => {
  //   map.value!.addInteraction(selectClick);
  // };

  const drawerVisible = ref(false);
  const moveKey: any = ref();
  const pathDetail = ref(false);
  onMounted(() => {
    initMap();
    moveKey.value = map.value!.on('pointermove', (evt: any) => {
      if (evt.dragging) {
        return;
      }
      const pixel = map.value!.getEventPixel(evt.originalEvent);
      featureHover(pixel);
    });

    map.value!.on('click', function (evt) {
      featureClick(evt.pixel);
    });
    // changeInteraction();
    // pointLayer.setVisible(false);
  });
</script>

<template>
  <div id="map" ref="mapRef" relative>
    <transition name="fade" absolute>
      <div v-if="drawerVisible" class="map-drawer" absolute>
        <div class="drawer-nav h-[30px]" relative w-full>
          <div
            v-if="pathDetail"
            frc
            absolute
            style="font-size: 26px; width: 30px; height: 30px"
            cursor-pointer
            @click="closeMobile"
            >&lt;</div
          >
          <div
            frc
            absolute
            style="font-size: 26px; width: 30px; height: 30px; right: 0"
            cursor-pointer
            @click.stop="closeDrawer"
            >x
          </div>
        </div>
        <template v-if="!pathDetail">
          <div class="drawer-title">
            <span>站点名称</span>
          </div>
          <div class="drawer-meta bg-#F3F7FB" style="padding: 1rem 0" w-full frc>
            <div class="meta-item" flex-1 frc flex-col style="border-right: 1px solid #dae0e5">
              <div>类型</div>
              <div>便携站</div>
            </div>
            <div class="meta-item" flex-1 frc flex-col style="border-right: 1px solid #dae0e5">
              <div>编码</div> <div>210027</div></div
            >
            <div class="meta-item" flex-1 frc flex-col>
              <div>所属单位</div> <div>单位名称</div></div
            >
          </div>
          <div class="drawer-move" w-full>
            <el-button
              @click="showMobile"
              w-full
              style="
                border: 1px solid black;
                height: 44px;
                padding: 10px, 18px, 10px, 12px;
                font-size: 16px;
              "
            >
              移动轨迹
              <template #icon> <path-map></path-map> </template
            ></el-button>
          </div>
          <div class="drawer-foot" w-full>
            <div
              w-full
              style="
                border-left: 4px solid black;
                padding-left: 4px;
                font-size: 16px;
                font-weight: 700;
                margin-bottom: 10px;
              "
              >详细信息
            </div>
            <el-descriptions :column="1" border>
              <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
              <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
              <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
            </el-descriptions>
          </div>
        </template>
        <template v-if="pathDetail">
          <div class="path-title">
            <span style="font-size: 20px; font-weight: 700"> xxx的移动轨迹</span>
            <span inline-flex style="font-size: 14px; font-weight: 400">
              <p mr>编码 : 210027</p> <p mr>类型 : 便携站</p> <p>所属单位 : 部门1</p>
            </span>
          </div>
          <div class="path-search" style="margin-bottom: 2rem" w-full>
            <div
              w-full
              style="
                border-left: 4px solid black;
                padding-left: 4px;
                font-size: 16px;
                font-weight: 700;
                margin-bottom: 10px;
              "
              >轨迹查询
            </div>
            <div>this is a search time box</div>
          </div>
          <div class="path-timeline" w-full>
            <div class="timeline-title" frb>
              <span style="font-weight: 700; line-height: 30px; font-size: 20px">共xxxx件</span>
              <span style="font-size: 14px; font-weight: 400"
                >历时 : <strong>123天12h </strong> 历程 : <strong>12345km </strong></span
              >
            </div>
            <el-timeline>
              <el-timeline-item center placement="top">
                <el-card
                  ><p>Tom committed 2018/4/12 20:46</p>
                  <p>Update Github template</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item center placement="top">
                <el-card
                  ><p>Tom committed 2018/4/12 20:46</p>
                  <p>Update Github template</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </template>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .ol-control {
    position: absolute;
    right: 0;
    display: none;
  }
  .ol-zoom {
    bottom: 0;
    height: 3rem;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }

  .ol-rotate {
    bottom: 4rem;
  }
  .ol-attribution {
    bottom: 0;
    right: 10rem;
    // color: #fff;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }

  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(400px);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease-in-out;
  }
</style>

<style lang="scss" scoped>
  #map {
    height: calc(100vh - 4rem);
    width: 100%;
    overflow: hidden;
    background-color: #f3f3f3;
    .map-drawer {
      right: 0;
      top: 0;
      background-color: #fff;
      // width: 30%;
      width: 400px;
      height: 100%;
      z-index: 2;
      padding: 12px 16px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-left: 1px solid #f3f3f3;

      & > div {
        margin-bottom: 1rem;
      }

      .drawer-title {
        font-size: 20px;
        font-weight: 700;
      }

      .drawer-meta {
        .meta-item {
          & > div:first-child {
            color: #798087;
            font-weight: 400;
            padding-bottom: 4px;
          }

          & > div:last-child {
            font-weight: 700;
          }
        }
      }
      .drawer-move {
        & .el-button:hover {
          color: #3ac096;
        }
      }

      .timeline-title {
        border-bottom: 1px solid #dae0e5;
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
      }
    }
  }

  :deep(.el-timeline-item__wrapper) {
    // box-sizing: border-box;
    // border: 1px solid black;
  }
</style>

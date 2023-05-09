<!-- <script
  lang="ts"
  src="https://webapi.amap.com/maps?v=2.0&key=d346d15e2e965ccc3206b72328f2434e"
></script>
<script
  lang="ts"
  src="https://webapi.amap.com/loca?v=2.0.0&key=d346d15e2e965ccc3206b72328f2434e"
></script> -->
<script lang="ts" setup>
  // import AMapLoader from '@amap/amap-jsapi-loader';
  // import { onMounted } from 'vue';
  // //   import AMap.Loca from '@amap/amap-jsapi-loader';
  // window._AMapSecurityConfig = {
  //   securityJsCode: 'cd62eef45fb33d912b8807fe1905c8e8'
  // };
  // onMounted(() => {
  //   AMapLoader.load({
  //     key: '3a10eed255a8988876ead1c3549cf737', // 申请好的Web端开发者Key，首次调用 load 时必填
  //     version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  //     plugins: [],
  //     Loca: {
  //       // 是否加载 AMap.Loca， 缺省不加载
  //       version: '2.0.0' // AMap.Loca 版本，缺省 1.3.2
  //     }
  //   })
  //     .then((AMap) => {
  //       const map = new AMap.Map('map', {
  //         zoom: 12,
  //         viewMode: '3D', // 地图设置成 3D 模式，否则图层会失去高度信息
  //         center: [104.780269, 34.955403],
  //         mapStyle: 'amap://styles/45311ae996a8bea0da10ad5151f72979'
  //       });

  //       // 创建 AMap.Loca 实例
  //       const loca = new Loca.Container({
  //         map: map
  //       });

  //       // 呼吸点
  //       const scatter = new Loca.ScatterLayer({
  //         loca,
  //         zIndex: 10,
  //         opacity: 0.6,
  //         visible: true,
  //         zooms: [2, 22]
  //       });

  //       const pointGeo = new Loca.GeoJSONSource({
  //         url: 'https://a.amap.com/AMap.Loca/static/loca-v2/demos/mock_data/pulselink-china-city-point.json'
  //       });
  //       scatter.setSource(pointGeo);
  //       scatter.setStyle({
  //         unit: 'meter',
  //         size: [100000, 100000],
  //         borderWidth: 0,
  //         texture: 'https://a.amap.com/AMap.Loca/static/loca-v2/demos/images/breath_red.png',
  //         duration: 2000,
  //         animate: true
  //       });
  //       loca.add(scatter);

  //       // 弧线
  //       const pulseLink = new Loca.PulseLinkLayer({
  //         // loca,
  //         zIndex: 10,
  //         opacity: 1,
  //         visible: true,
  //         zooms: [2, 22],
  //         depth: true
  //       });

  //       const geo = new Loca.GeoJSONSource({
  //         url: 'https://a.amap.com/AMap.Loca/static/loca-v2/demos/mock_data/data-line-out.json'
  //         // url: 'src/assets/中华人民共和国.json'
  //       });

  //       pulseLink.setSource(geo);
  //       pulseLink.setStyle({
  //         unit: 'meter',
  //         dash: [40000, 0, 40000, 0],
  //         lineWidth: function () {
  //           return [20000, 1000];
  //         },
  //         height: function (index, feat) {
  //           return feat.distance / 3 + 10;
  //         },
  //         // altitude: 1000,
  //         smoothSteps: 30,
  //         speed: function (index, prop) {
  //           return 1000 + Math.random() * 200000;
  //         },
  //         flowLength: 100000,
  //         lineColors: function (index, feat) {
  //           return ['rgb(255,228,105)', 'rgb(255,164,105)', 'rgba(1, 34, 249,1)'];
  //         },
  //         maxHeightScale: 0.3, // 弧顶位置比例
  //         headColor: 'rgba(255, 255, 0, 1)',
  //         trailColor: 'rgba(255, 255,0,0)'
  //       });
  //       loca.add(pulseLink);
  //       loca.animate.start();

  //       // 点击事件处理
  //       const clickInfo = new AMap.Marker({
  //         anchor: 'bottom-center',
  //         position: [116.396923, 39.918203, 0]
  //       });
  //       clickInfo.setMap(map);
  //       clickInfo.hide();
  //       map.on('click', function (e) {
  //         const feat = pulseLink.queryFeature(e.pixel.toArray());

  //         if (feat) {
  //           clickInfo.show();
  //           const props = feat.properties;
  //           clickInfo.setPosition(feat.coordinates[1]);
  //           clickInfo.setContent(
  //             '<div style="text-align: center; height: 20px; width: 150px; color:#fff; font-size: 14px;">' +
  //               '速率: ' +
  //               feat.properties['ratio'] +
  //               '</div>'
  //           );
  //         } else {
  //           clickInfo.hide();
  //         }
  //       });

  //       const dat = new Loca.Dat();
  //       dat.addLayer(pulseLink);
  //     })
  //     .catch((e: any) => {
  //       console.log(e);
  //     });
  // });
</script>

<template>
  <!-- <div id="map" class="map-container"> </div> -->
  <iframe
    src="src/assets/gaode/migration.html"
    frameborder="0"
    style="height: calc(100vh - 40px); width: 100%"
  ></iframe>
</template>

<style lang="scss" scoped></style>

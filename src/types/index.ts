const CITIES = [
  '北京市',
  '天津市',
  '河北省',
  '山西省',
  '内蒙古自治区',
  '辽宁省',
  '吉林省',
  '黑龙江省',
  '上海市',
  '江苏省',
  '浙江省',
  '安徽省',
  '福建省',
  '江西省',
  '山东省',
  '河南省',
  '湖北省',
  '湖南省',
  '广东省',
  '广西壮族自治区',
  '海南省',
  '重庆市',
  '四川省',
  '贵州省',
  '云南省',
  '西藏自治区',
  '陕西省',
  '甘肃省',
  '青海省',
  '宁夏回族自治区',
  '新疆维吾尔自治区',
  '台湾省',
  '香港特别行政区',
  '澳门特别行政区',
  '港澳台或国外'
];

const WCITIES = [
  '北京市',
  '天津市',
  '河北省',
  '山东省',
  '江苏省',
  '上海市',
  '浙江省',
  '福建省',
  '广东省',
  '海南省',
  '香港特别行政区',
  '澳门特别行政区',
  '台湾省'
];
const MCITIES = ['山西省', '吉林省', '黑龙江省', '安徽省', '江西省', '河南省', '湖北省', '湖南省'];
const ECITIES = [
  '重庆市',
  '四川省',
  '云南省',
  '贵州省',
  '西藏自治区',
  '陕西省',
  '甘肃省',
  '青海省',
  '新疆维吾尔自治区',
  '宁夏回族自治区',
  '内蒙古自治区',
  '广西壮族自治区'
];

const CENTERS = [
  { name: '北京市', center: '116.407394,39.904211' },
  { name: '天津市', center: '117.200983,39.084158' },
  { name: '河北省', center: '114.530235,38.037433' },
  { name: '山西省', center: '112.562678,37.873499' },
  { name: '内蒙古自治区', center: '111.76629,40.81739' },
  { name: '辽宁省', center: '123.431382,41.836175' },
  { name: '吉林省', center: '125.32568,43.897016' },
  { name: '黑龙江省', center: '126.661665,45.742366' },
  { name: '上海市', center: '121.473662,31.230372' },
  { name: '江苏省', center: '118.762765,32.060875' },
  { name: '浙江省', center: '120.152585,30.266597' },
  { name: '安徽省', center: '117.329949,31.733806' },
  { name: '福建省', center: '119.295143,26.100779' },
  { name: '江西省', center: '115.81635,28.63666' },
  { name: '山东省', center: '117.019915,36.671156' },
  { name: '河南省', center: '113.753394,34.765869' },
  { name: '湖北省', center: '114.341745,30.546557' },
  { name: '湖南省', center: '112.9836,28.112743' },
  { name: '广东省', center: '113.26641,23.132324' },
  { name: '广西壮族自治区', center: '108.327546,22.815478' },
  { name: '海南省', center: '110.349228,20.017377' },
  { name: '重庆市', center: '106.551643,29.562849' },
  { name: '四川省', center: '104.075809,30.651239' },
  { name: '贵州省', center: '106.70546,26.600055' },
  { name: '云南省', center: '102.710002,25.045806' },
  { name: '西藏自治区', center: '91.117525,29.647535' },
  { name: '陕西省', center: '108.954347,34.265502' },
  { name: '甘肃省', center: '103.826447,36.05956' },
  { name: '青海省', center: '101.780268,36.620939' },
  { name: '宁夏回族自治区', center: '106.259126,38.472641' },
  { name: '新疆维吾尔自治区', center: '87.627704,43.793026' },
  { name: '香港特别行政区', center: '114.171203,22.277468' },
  { name: '澳门特别行政区', center: '113.543028,22.186835' }
];

const ALLCENTER = [
  {
    id: '北京市',
    name: 'cities',
    lon: 116.407394,
    lat: 39.904211,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '天津市',
    name: 'cities',
    lon: 117.200983,
    lat: 39.084158,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '河北省',
    name: 'cities',
    lon: 114.530235,
    lat: 38.037433,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '山西省',
    name: 'cities',
    lon: 112.562678,
    lat: 37.873499,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '内蒙古自治区',
    name: 'cities',
    lon: 111.76629,
    lat: 40.81739,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '辽宁省',
    name: 'cities',
    lon: 123.431382,
    lat: 41.836175,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '吉林省',
    name: 'cities',
    lon: 125.32568,
    lat: 43.897016,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '黑龙江省',
    name: 'cities',
    lon: 126.661665,
    lat: 45.742366,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '上海市',
    name: 'cities',
    lon: 121.473662,
    lat: 31.230372,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '江苏省',
    name: 'cities',
    lon: 118.762765,
    lat: 32.060875,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '浙江省',
    name: 'cities',
    lon: 120.152585,
    lat: 30.266597,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '安徽省',
    name: 'cities',
    lon: 117.329949,
    lat: 31.733806,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '福建省',
    name: 'cities',
    lon: 119.295143,
    lat: 26.100779,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '江西省',
    name: 'cities',
    lon: 115.81635,
    lat: 28.63666,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '山东省',
    name: 'cities',
    lon: 117.019915,
    lat: 36.671156,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '河南省',
    name: 'cities',
    lon: 113.753394,
    lat: 34.765869,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '湖北省',
    name: 'cities',
    lon: 114.341745,
    lat: 30.546557,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '湖南省',
    name: 'cities',
    lon: 112.9836,
    lat: 28.112743,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '广东省',
    name: 'cities',
    lon: 113.26641,
    lat: 23.132324,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '广西壮族自治区',
    name: 'cities',
    lon: 108.327546,
    lat: 22.815478,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '海南省',
    name: 'cities',
    lon: 110.349228,
    lat: 20.017377,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '重庆市',
    name: 'cities',
    lon: 106.551643,
    lat: 29.562849,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '四川省',
    name: 'cities',
    lon: 104.075809,
    lat: 30.651239,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '贵州省',
    name: 'cities',
    lon: 106.70546,
    lat: 26.600055,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '云南省',
    name: 'cities',
    lon: 102.710002,
    lat: 25.045806,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '西藏自治区',
    name: 'cities',
    lon: 91.117525,
    lat: 29.647535,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '陕西省',
    name: 'cities',
    lon: 108.954347,
    lat: 34.265502,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '甘肃省',
    name: 'cities',
    lon: 103.826447,
    lat: 36.05956,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '青海省',
    name: 'cities',
    lon: 101.780268,
    lat: 36.620939,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '宁夏回族自治区',
    name: 'cities',
    lon: 106.259126,
    lat: 38.472641,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '新疆维吾尔自治区',
    name: 'cities',
    lon: 87.627704,
    lat: 43.793026,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '香港特别行政区',
    name: 'cities',
    lon: 114.171203,
    lat: 22.277468,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '澳门特别行政区',
    name: 'cities',
    lon: 113.543028,
    lat: 22.186835,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  },
  {
    id: '台湾省',
    name: 'cities',
    lon: 121.509062,
    lat: 25.044332,
    dataLabels: {
      y: 0
    },
    marker: {
      symbol: 'circle'
    }
  }
];

interface FlowRoute {
  from: string;
  to: string;
  curveFactor: number;
  weight: number;
  growTorwards: boolean;
  markerEnd: {
    enabled: boolean;
    height: number;
    width: number;
  };
}

export { CITIES, CENTERS, ALLCENTER, WCITIES, MCITIES, ECITIES };
export type { FlowRoute };

// let allCityCenter = [];
// for (const each of CENTERS) {
//   allCityCenter.push({
//     id: each.name,
//     name: 'cities',
//     lon: parseFloat(each.center.split(',')[0]),
//     lat: parseFloat(each.center.split(',')[1]),
//     dataLabels: {
//       y: 0
//     },
//     marker: {
//       symbol: 'circle'
//     }
//   });
// }
// console.log(allCityCenter);

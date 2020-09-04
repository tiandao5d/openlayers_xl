import {
  createMap,
  MapLayerVector,
  MapFeaturePoint,
  MapLayerBasemap,
  MapFeaturePolygon,
  MapFeatureHeatmap,
  MapFeatureCircle,
  MapFeatureRectangle,
  MapLayerHeadmap,
} from "./MapService";
import "./style.scss";
let box = document.getElementById("app");
const map = createMap(box);
const layer = new MapLayerVector();
const layerHeat = new MapLayerHeadmap();
const heatPoints = [
  {
    point: [99, 35],
    weight: 0.8,
    data: {
      // 给当前feature添加一些标识数据
      id: "123",
    },
  },
  {
    point: [99, 35],
    weight: 0.8,
    data: {
      // 给当前feature添加一些标识数据
      id: "123",
    },
  },
  {
    point: [99, 35],
    weight: 0.8,
    data: {
      // 给当前feature添加一些标识数据
      id: "123",
    },
  },
];
const points = [
  {
    point: [105, 40],
    style: [
      {
        color: "#f00",
        font: "50px arial",
        text: "\u25cf",
      },
      {
        color: "#fff",
        font: "12px arial",
        text: "11",
      },
    ],
    data: {
      // 给当前feature添加一些标识数据
      id: "123",
    },
  },
];

const polygons = [
  {
    type: "circle",
    style: {
      fill: "rgba(0,0,0,0.5)",
      stroke: {
        color: "#ff0",
        width: 5,
      },
    },
    radius: 100000,
    center: [105, 35],
  },
  {
    type: "rectangle",
    style: {
      fill: "rgba(0,0,0,0.5)",
      stroke: {
        color: "#ff0",
        width: 5,
      },
    },
    width: 1000000,
    height: 1000000,
    lefttop: [115,35],
  },
  {
    type: "polygon",
    style: {
      fill: "rgba(0,0,0,0.5)",
      stroke: {
        color: "#ff0",
        width: 5,
      },
    },
    point: [
      [114.28064346313474, 31.075578649611813],
      [113.22286605834958, 29.615102609496375],
      [117.64400482177732, 29.039662137909062],
      [119.03617858886714, 31.77589914665863],
      [117.22635269165036, 34.52197428173629],
      [113.45924377441405, 32.4705226707223],
      [114.28064346313474, 31.075578649611813],
    ],
  },
];
const features = points.map((o) => new MapFeaturePoint({ oriItem: o }));
const polygonFeatures = polygons.map((o) => {
  if (o.type === "circle") {
    return new MapFeatureCircle({ oriItem: o });
  } else if (o.type === "rectangle") {
    return new MapFeatureRectangle({ oriItem: o });
  } else if (o.type === "polygon") {
    return new MapFeaturePolygon({ oriItem: o });
  }
});
const heats = heatPoints.map(o => new MapFeatureHeatmap({oriItem: o}));
layer.xlAddFeatures([...features, ...polygonFeatures]);
layerHeat.xlAddFeatures(heats);
map.addLayer(layer);
map.addLayer(layerHeat);

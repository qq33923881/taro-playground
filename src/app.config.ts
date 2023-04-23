/*
 * @Author: iChengbo
 * @Date: 2021-07-19 14:37:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-03 18:57:38
 * @FilePath: /taro-react-native/src/app.config.ts
 */

const tabs = [
  {
    iconPath: './assets/iconpark/system.png',
    selectedIconPath: './assets/iconpark/system_selected.png',
    pagePath: 'pages/home/index',
    text: '项目'
  },
  {
    iconPath: './assets/iconpark/cycle.png',
    selectedIconPath: './assets/iconpark/cycle_selected.png',
    pagePath: 'pages/global/index',
    text: '全局'
  },
  {
    iconPath: './assets/iconpark/components.png',
    selectedIconPath: './assets/iconpark/components_selected.png',
    pagePath: 'pages/components/index',
    text: '组件'
  },
  {
    iconPath: './assets/iconpark/ring.png',
    selectedIconPath: './assets/iconpark/ring_selected.png',
    pagePath: 'pages/apis/index',
    text: '接口'
  },
  {
    iconPath: './assets/iconpark/painted-eggshell.png',
    selectedIconPath: './assets/iconpark/painted-eggshell_selected.png',
    pagePath: 'pages/explore/index',
    text: '探索'
  },
  {
    iconPath: './assets/iconpark/user.png',
    selectedIconPath: './assets/iconpark/user_selected.png',
    pagePath: 'pages/about/index',
    text: '关于'
  }
];

const pages = [
  'pages/home/index',
  // 全局相关 start
  'pages/global/index',
  'pages/global/pages/hooks/page',
  'pages/global/pages/lifecycle/page',
  'pages/global/pages/router/index',
  'pages/global/pages/styles/size',
  'pages/global/pages/styles/platform',
  // 全局相关 end
  // 组件相关 start
  'pages/components/index',
  'pages/components/pages/view/view',
  'pages/components/pages/scroll-view/scroll-view',
  'pages/components/pages/icon/icon',
  'pages/components/pages/progress/progress',
  'pages/components/pages/image/image',
  // 'pages/components/pages/audio/audio',
  'pages/components/pages/camera/camera',
  'pages/components/pages/video/video',
  'pages/components/pages/swiper/swiper',
  'pages/components/pages/form/form',
  'pages/components/pages/input/input',
  'pages/components/pages/checkbox/checkbox',
  'pages/components/pages/radio/radio',
  'pages/components/pages/button/button',
  'pages/components/pages/text/text',
  'pages/components/pages/label/label',
  'pages/components/pages/page-container/page-container',
  'pages/components/pages/picker/picker',
  'pages/components/pages/picker-view/picker-view',
  'pages/components/pages/rich-text/rich-text',
  'pages/components/pages/slider/slider',
  'pages/components/pages/switch/switch',
  'pages/components/pages/textarea/textarea',
  // 'pages/components/pages/canvas/canvas',
  // 'pages/components/pages/map/map',
  'pages/components/pages/navigator/navigator',
  'pages/components/pages/virtual-list/virtual-list',
  'pages/components/pages/movable-view/movable-view',
  // 组件相关 end
  // api 相关 start
  'pages/apis/index',
  'pages/apis/pages/basic/system/index',
  'pages/apis/pages/surface/interactive/index',
  'pages/apis/pages/surface/navigationBar/index',
  'pages/apis/pages/surface/background/index',
  'pages/apis/pages/surface/refresh/index',
  'pages/apis/pages/surface/scroll/index',
  'pages/apis/pages/surface/tabBar/index',
  'pages/apis/pages/surface/window/index',
  'pages/apis/pages/surface/keyboard/index',
  'pages/apis/pages/network/request/index',
  'pages/apis/pages/storage/index/index',
  'pages/apis/pages/media/image/index',
  'pages/apis/pages/media/video/index',
  'pages/apis/pages/media/camera/index',
  'pages/apis/pages/location/index/index',
  'pages/apis/pages/device/network/index',
  'pages/apis/pages/device/screen/index',
  'pages/apis/pages/device/phone/index',
  'pages/apis/pages/device/accelerometer/index',
  'pages/apis/pages/device/deviceMotion/index',
  'pages/apis/pages/device/gyroscope/index',
  'pages/apis/pages/device/scanCode/index',
  'pages/apis/pages/device/vibrate/index',
  'pages/apis/pages/open-api/settings/index',
  // api 相关 end
  'pages/about/index',
  'pages/about/dep',
  'pages/about/mini',
  'pages/about/rn',
  'pages/webview/index',
  // 探索
  'pages/explore/index'
];

const subpackages = [
  {
    root: 'pages/explore/animate',
    pages: ['lottie/index']
  },
  {
    root: 'pages/explore/others',
    pages: ['linear-gradient/index']
  }
];

if (process.env.TARO_ENV === 'rn') {
  subpackages.push({
    root: 'pages/explore/charts',
    // pages: ['echarts']
    pages: [
      'entry',
      'pages/bar/barPolarRealEstate',
      'pages/scatter/bubbleGradient',
      'pages/pie/pieNest',
      'pages/pie/pieSimple',
      'pages/pie/pieBorderRadius',
      'pages/pie/pieDoughnut',
      'pages/pie/pieCustom',
      'pages/pie/piePattern',
      'pages/pie/pieRoseType',
      'pages/pie/pieRoseTypeSimple',
      'pages/pie/pieAlignTo',
      'pages/pie/pieLabelLineAdjust',
      'pages/pie/pieLegend',
      'pages/scatter/scatterLarge',
      'pages/line/lineMarkline',
      'pages/scatter/effectScatterBmap',
      'pages/bar/barNegative',
      'pages/line/areaPieces',
      'pages/line/lineSections',
      'pages/line/lineTooltipTouch',
      'pages/line/lineSimple',
      'pages/line/lineSmooth',
      'pages/line/areaBasic',
      'pages/line/lineStack',
      'pages/line/areaStack',
      'pages/line/areaStackGradient',
      'pages/line/lineMarker',
      'pages/line/dataTransformFilter',
      'pages/line/lineGradient',
      'pages/line/confidenceBand',
      'pages/line/gridMultiple',
      'pages/line/lineAqi',
      'pages/line/multipleXAxis',
      'pages/line/areaRainfall',
      'pages/line/areaTimeAxis',
      'pages/line/dynamicData2',
      'pages/line/lineFunction',
      'pages/line/lineRace',
      'pages/line/lineStyle',
      'pages/line/lineInCoordinateSystem',
      'pages/line/lineLog',
      'pages/line/lineStep',
      'pages/line/lineEasing',
      'pages/line/lineYCategory',
      'pages/line/linePen',
      'pages/line/linePolar',
      'pages/line/linePolar2',
      'pages/line/barBackground',
      'pages/line/barSimple',
      'pages/line/barTickAlign',
      'pages/line/barDataColor',
      'pages/line/barWaterfall',
      'pages/bar/Bar1',
      'pages/bar/barPolarLabelRadial',
      'pages/bar/barPolarLabelTangential',
      'pages/bar/barYCategory',
      'pages/bar/barGradient',
      'pages/bar/barLabelRotation',
      'pages/bar/barStack',
      'pages/bar/barWaterfall2',
      'pages/bar/barYCategoryStack',
      'pages/bar/barBrush',
      'pages/bar/barNegative2',
      'pages/bar/mixLineBar',
      'pages/bar/mixZoomOnValue',
      'pages/bar/multipleYAxis',
      'pages/bar/barAnimationDelay',
      'pages/bar/barDrilldown',
      'pages/bar/barLarge',
      'pages/bar/barRace',
      'pages/bar/barRaceCountry',
      'pages/bar/dynamicData',
      'pages/bar/mixTimelineFinance',
      'pages/bar/watermark',
      'pages/bar/barPolarStack',
      'pages/bar/barPolarStackRadial',
      'pages/bar/polarRoundCap',
      'pages/scatter/scatterSingleAxis',
      'pages/scatter/scatterSimple',
      'pages/scatter/scatterAnscombeAuartet',
      'pages/scatter/scatterClustering',
      'pages/scatter/scatterClusteringProcess',
      'pages/scatter/scatterExponentialRegression',
      'pages/scatter/scatterLinearRegression',
      'pages/scatter/scatterPolynomialRegression',
      'pages/scatter/scatterLogarithmicRegression',
      'pages/scatter/scatterEffect',
      'pages/scatter/scatterPunchCard',
      'pages/scatter/scatterWeight',
      'pages/scatter/scatterAggregateBar',
      'pages/scatter/scatterLabelAlignRight',
      'pages/scatter/scatterLabelAlignTop',
      'pages/scatter/scatterSymbolMorph',
      'pages/scatter/scatterNebula',
      'pages/scatter/scatterStreamVisual',
      'pages/scatter/scatterAqiColor',
      'pages/scatter/scatterNutrients',
      'pages/scatter/scatterNutrientsMatrix',
      'pages/scatter/scatterPolarPunchCard',
      'pages/scatter/scatterLifeExpectancyTimeline',
      'pages/scatter/scatterPainterChoice',
      'pages/map/geoBeefCuts',
      'pages/map/mapUsaPie',
      'pages/map/geoOrgan',
      'pages/map/geoSeatmapFlight',
      'pages/map/geoSvgLines',
      'pages/map/geoSvgMap',
      'pages/map/geoSvgScatterSimple',
      'pages/map/geoSvgTraffic',
      'pages/candlestick/candlestickSimple',
      'pages/candlestick/customOhlc',
      'pages/candlestick/candlestickSh',
      'pages/candlestick/candlestickTouch',
      'pages/radar/radar',
      'pages/radar/radarAqi',
      'pages/radar/radar2',
      'pages/radar/radarCustom',
      'pages/radar/radarMultiple',
      'pages/boxplot/boxplotLightVelocity',
      'pages/boxplot/boxplotMulti',
      'pages/boxplot/boxplotLightVelocity2',
      'pages/heatmap/heatmapCartesian',
      'pages/heatmap/heatmapLargePiecewise',
      'pages/graph/graphForce2',
      'pages/graph/GraphForceDynamic',
      'pages/graph/graphSimple',
      'pages/lines/hangzhouLines',
      'pages/tree/treeBasic',
      'pages/tree/multipleTrees',
      'pages/tree/bottomTopTree',
      'pages/tree/rightLeftTree',
      'pages/tree/polylineTree',
      'pages/tree/radialTree',
      'pages/tree/topBottomTree',
      'pages/treemap/sunburstTransition',
      'pages/treemap/echartsOptionQuery',
      'pages/treemap/howTrillionSpent',
      'pages/treemap/showParentLabels',
      'pages/treemap/basicTreemap',
      'pages/treemap/gradientMapping',
      'pages/treemap/treemapDisk',
      'pages/sunburst/sunburstSimple',
      'pages/sunburst/roundedCornerSunburst',
      'pages/sunburst/sunburstLabelRotate',
      'pages/sunburst/monochromeSunburst',
      'pages/sunburst/sunburstVisualMap',
      'pages/sunburst/drinkFlavors',
      'pages/sunburst/bookRecords',
      'pages/parallel/parallelSimple',
      'pages/parallel/parallelAqi',
      'pages/parallel/parallelNutrients',
      'pages/parallel/scatterMatrix',
      'pages/sankey/sankeySimple',
      'pages/sankey/sankeyOrientVertical',
      'pages/sankey/specifyItemStyle',
      'pages/sankey/levelsSetting',
      'pages/sankey/gradientEdge',
      'pages/sankey/nodeAlignLeft',
      'pages/sankey/nodeAlignRight',
      'pages/funnel/funnelChart',
      'pages/funnel/funnelCompare',
      'pages/funnel/funnelCustomize',
      'pages/funnel/funnel',
      'pages/gauge/gaugeBasic',
      'pages/gauge/gaugeSimple',
      'pages/gauge/speedGauge',
      'pages/gauge/progressGauge',
      'pages/gauge/stageSpeedGauge',
      'pages/gauge/gradeGauge',
      'pages/gauge/multiTitleGauge',
      'pages/gauge/temperatureGauge',
      'pages/gauge/ringGauge',
      'pages/gauge/gaugeBarometer',
      'pages/gauge/clock',
      'pages/gauge/gaugeCar',
      'pages/pictorialBar/transition',
      'pages/pictorialBar/pictorialBarBodyFill',
      'pages/pictorialBar/dottedBar',
      'pages/pictorialBar/expansionForest',
      'pages/pictorialBar/wishAndMountain',
      'pages/pictorialBar/spirits',
      'pages/pictorialBar/vehicles',
      'pages/pictorialBar/velocityOfReindeers',
      'pages/themeRiver/themeRiverBasic',
      'pages/themeRiver/themeRiverLastfm',
      'pages/calendar/calendarSimple',
      'pages/calendar/heatmap',
      'pages/calendar/heatmapVertical',
      'pages/calendar/heatmapHorizontal',
      'pages/calendar/calendarGraph',
      'pages/calendar/calendarLunar',
      'pages/calendar/calendarPie',
      'pages/calendar/calendarCharts',
      'pages/calendar/customCalendarIcon',
      'pages/custom/histogram',
      'pages/custom/customProfit',
      'pages/custom/errorScatter',
      'pages/custom/customBarTrend',
      'pages/custom/cartesianPolygon',
      'pages/custom/errorBar',
      'pages/custom/cyclePlot',
      'pages/custom/ganttChart',
      'pages/custom/polarHeatmap',
      'pages/custom/windBarb',
      'pages/custom/customCalendarIcon',
      'pages/custom/windVectors',
      'pages/custom/hexagonalBinning',
      'pages/custom/PieParliamentTransition',
      'pages/custom/CustomGauge',
      'pages/custom/customizedEffect',
      'pages/custom/customProfile',
      'pages/custom/circlePacking',
      'pages/custom/customSpiralRace',
      'pages/dataset/dataTransformSortBar',
      'pages/dataset/DatasetLink',
      'pages/dataset/datasetEncode0',
      'pages/dataset/dataTransformMultiplePie',
      'pages/dataset/encodeAndMatrix',
      'pages/dataset/datasetSeriesLayoutBy',
      'pages/dataset/datasetSimple0',
      'pages/dataset/datasetSimple1',
      'pages/dataset/datasetDefault',
      'pages/dataZoom/customErrorScatter',
      'pages/dataZoom/areaSimple',
      'pages/graphic/graphicStrokeAnimation',
      'pages/graphic/graphicLoading',
      'pages/graphic/GraphicWaveAnimation',
      'pages/graphic/lineGraphic',
      'pages/graphic/LineDraggable',
      'pages/rich/barRichText',
      'pages/rich/pieRichText'
    ]
  });
}

export default {
  // entryPagePath: 'pages/home/index',
  pages: process.env.TARO_ENV === 'rn' ? pages : pages.splice(1),
  subpackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#333333',
    selectedColor: '#6190E8', // 主题色
    list: process.env.TARO_ENV === 'rn' ? tabs : tabs.splice(1)
  },
  rn: {
    useNativeStack: true // 使用 @react-navigation/native-stack
  }
};

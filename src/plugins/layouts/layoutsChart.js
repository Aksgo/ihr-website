import i18n from '@/i18n'

const { t } = i18n.global

const COMMON_FEATURE = {
  hovermode: 'closest',
  margin: { t: 10, b: 10, l: 80, r: 80 },
}

export const COMMON_WITH_LEGEND = {
  ...COMMON_FEATURE,
  showlegend: true,
  legend: {
    x: 0,
    y: 1.2,
    orientation: 'h',
  },
  yaxis: {
    automargin: true,
  },
  xaxis: {
    autorange: true,
    automargin: true,
  },
}

var NET_DELAY_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  yaxis: {
    title: t('charts.networkDelay.yaxis'),
    autorange: true,
  },
}

var NET_DELAY_ALARMS_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  yaxis: {
    title: t('charts.networkDelayAlarms.yaxis'),
    autorange: true,
  },
}

var DISCO_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  yaxis: {
    title: '',
    autorange: 'reversed',
  },
}

var DELAY_CHART_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  yaxis: {
    title: t('charts.linkDelays.yaxis'),
    autorange: true,
  },
}

var DELAY_AND_FORWARDING_LAYOUT = {
  ...COMMON_FEATURE,
  yaxis: {
    title: t('charts.delayAndForwarding.yaxis'),
    domain: [0.55, 1],
    autorange: true,
  },
  yaxis2: {
    title: t('charts.delayAndForwarding.yaxis2'),
    domain: [0, 0.45],
    autorange: true,
  },
}

var AS_INTERDEPENDENCIES_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  yaxis: {
    title: '',
    domain: [0.6, 1],
    range: [0, 101],
    ticksuffix: '%'
  },
  yaxis2: {
    domain: [0, 0.4],
    autorange: true,
  },
}

var HEGEMONY_ALARMS_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  yaxis: {
    title: '',
    domain: [0.6, 1],
    range: [0, 1.1],
  },
  yaxis2: {
    domain: [0, 0.4],
    autorange: true,
  },
}

var RIR_COUNTRY_SUNBURST_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  margin: { l: 5, r: 5, b: 5, t: 5 },
}

var IODA_ALARMS_SPECIFIC_ENTRY_TIMESERIES_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  title: '',
  xaxis: { title: '', autorange: true },
  yaxis: { ticksuffix: '%', autoragne: true },
  margin: { t: 10, b: 40, l: 80, r: 80 },

}

var AGGREGATED_ALARMS_WORLDMAP_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  margin: { t: 80, b: 10, l: 80, r: 80 },
  geo: {
    showframe: false,
    showcoastlines: false,
    showland: true,
    landcolor: 'rgb(215, 215, 215)',
    countrycolor: 'rgb(235, 235, 235)',
    showcountries: true,
  },
  height: 400
}

var AGGREGATED_ALARMS_TIMESERIES_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  margin: { t: 50, b: 65, l: 40, r: 0 },
  xaxis: { title: 'Time (UTC)', autorange: true },
  hovermode: 'closest',
  showlegend: true,
  legend: {
    x: 1,
    xanchor: 'top',
    y: 1
  },
  height: 400
}

var AGGREGATED_ALARMS_TREEMAP_LAYOUT = {
  ...COMMON_WITH_LEGEND,
  margin: { t: 50, b: 0, l: 0, r: 0 },
  height: 400,
}

export {
  COMMON_FEATURE,
  HEGEMONY_ALARMS_LAYOUT,
  NET_DELAY_ALARMS_LAYOUT,
  DISCO_LAYOUT,
  DELAY_AND_FORWARDING_LAYOUT,
  AS_INTERDEPENDENCIES_LAYOUT,
  DELAY_CHART_LAYOUT,
  NET_DELAY_LAYOUT,
  RIR_COUNTRY_SUNBURST_LAYOUT,
  IODA_ALARMS_SPECIFIC_ENTRY_TIMESERIES_LAYOUT,
  AGGREGATED_ALARMS_WORLDMAP_LAYOUT,
  AGGREGATED_ALARMS_TIMESERIES_LAYOUT,
  AGGREGATED_ALARMS_TREEMAP_LAYOUT,
}
import { Map } from 'mapbox-gl'
import { TEMPERATURE_LAYER_ID, TEMPERATURE_SOURCE_ID } from '../../data'

const shadesGenerator = (from: number) => {
  const temperatureGradient = [
    '#fff',
    '#003',
    '#006',
    '#000099',
    '#0000cc',
    '#0000ff',
    '#3333ff',
    '#6666ff',
    '#9999ff',
    '#ff9999',
    '#ff6666',
    '#ff3333',
    '#ff0000',
    '#cc0000',
    '#990000',
    '#800',
    '#700',
    '#600',
    '#500',
    '#400',
    '#300',
  ]

  return temperatureGradient.flatMap((color, i) => [from + i, color])
}

export const addTemperature = <T extends { features: any[] }>(map: Map, data: T) => {
  map.addSource(TEMPERATURE_SOURCE_ID, {
    type: 'geojson',
    data: { type: 'FeatureCollection', features: data.features },
  })

  map.addLayer({
    id: TEMPERATURE_LAYER_ID,
    type: 'fill',
    source: TEMPERATURE_SOURCE_ID,
    layout: {},
    paint: {
      'fill-opacity': 0.1,
      'fill-color': ['step', ['get', 'Teplota'], 'transparent', ...shadesGenerator(16)],
    },
  })
}

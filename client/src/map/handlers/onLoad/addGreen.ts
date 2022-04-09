import { Map } from 'mapbox-gl'
import { GREEN_LAYER_ID, GREEN_SOURCE_ID } from '../../data'

export const addGreen = <T extends { features: any[] }>(map: Map, data: T) => {
  map.addSource(GREEN_SOURCE_ID, {
    type: 'geojson',
    data: { type: 'FeatureCollection', features: data.features },
  })

  map.addLayer({
    id: GREEN_LAYER_ID,
    type: 'fill',
    source: GREEN_SOURCE_ID,
    layout: {},
    paint: {
      'fill-opacity': 0.1,
      'fill-color': '#00aa00',
    },
  })
}

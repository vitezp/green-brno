import { Map } from 'mapbox-gl'
import { MAJOR_GREEN_LAYER_ID, MAJOR_GREEN_SOURCE_ID } from '../../data'

export const addMajorGreen = <T extends { features: any[] }>(map: Map, data: T) => {
  map.addSource(MAJOR_GREEN_SOURCE_ID, {
    type: 'geojson',
    data: { type: 'FeatureCollection', features: data.features },
  })

  map.addLayer({
    id: MAJOR_GREEN_LAYER_ID,
    type: 'fill',
    source: MAJOR_GREEN_SOURCE_ID,
    layout: {},
    paint: {
      'fill-opacity': 0.1,
      'fill-color': '#00cc00',
    },
  })
}

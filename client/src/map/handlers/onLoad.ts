import type { Map, MapboxGeoJSONFeature } from 'mapbox-gl'

const TEMPERATURE_SOURCE_ID = 'temperature-source'
const TEMPERATURE_LAYER_ID = 'temperature-layer'

export const onLoad =
  ({ map }: { map: Map }) =>
  async () => {
    map.addSource(TEMPERATURE_SOURCE_ID, {
      type: 'geojson',
      // data: { type: 'FeatureCollection', features: temperatureData.features },
    })

    map.addLayer({
      id: TEMPERATURE_LAYER_ID,
      type: 'fill',
      source: TEMPERATURE_SOURCE_ID,
      layout: {},
      paint: { 'fill-color': 'blue', 'fill-opacity': 0.5 },
    })
  }

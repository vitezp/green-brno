import { Map } from 'mapbox-gl'
import { STREET_LIGHTS_LAYER_ID, STREET_LIGHTS_SOURCE_ID, STREET_LIGHTS_SOURCE_ID_LED, STREET_LIGHTS_LAYER_ID_LED } from 'streetLightsMap/data'

export const addStreetLights = <T extends { features: any[] }>(map: Map, data: T) => {

  const middleIndex = Math.ceil(data.features.length / 2);
  const ledLamps = data.features.splice(0, middleIndex);
  const badLamps = data.features.splice(-middleIndex);

  map.loadImage(
    'https://cdn-icons-png.flaticon.com/512/6134/6134812.png',
    (error: any, image: any) => {
      if (error) throw error;

      map.addImage('badLamp', image);

      map.addSource(STREET_LIGHTS_SOURCE_ID_LED, {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: ledLamps },
      });

      map.addLayer({
        'id': STREET_LIGHTS_LAYER_ID_LED,
        'type': 'symbol',
        'source': STREET_LIGHTS_SOURCE_ID_LED, // reference the data source
        'layout': {
          'icon-image': 'badLamp', // reference the image
          'icon-size': 0.06,
        }
      })

    }
  )

  map.loadImage(
    'https://cdn-icons-png.flaticon.com/512/427/427735.png',
    (error: any, image: any) => {
      if (error) throw error;

      map.addImage('eslamp', image);

      map.addSource(STREET_LIGHTS_SOURCE_ID, {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: badLamps },
      });

      map.addLayer({
        'id': STREET_LIGHTS_LAYER_ID,
        'type': 'symbol',
        'source': STREET_LIGHTS_SOURCE_ID, // reference the data source
        'layout': {
          'icon-image': 'eslamp', // reference the image
          'icon-size': 0.06,
        }
      })

    }
  )
}

import type { Map } from 'mapbox-gl'
import { STREET_LIGHTS_JSON_URL } from '../../data'
import { addStreetLights } from './addStreetLights'

export const onLoad =
  ({ map }: { map: Map }) =>
  async () => {
    const streetLightsDataPromise = fetch(STREET_LIGHTS_JSON_URL).then((response) => response.json())

    const [streetLightsData] = await Promise.all([
        streetLightsDataPromise
    ])

    addStreetLights(map, streetLightsData)
  }

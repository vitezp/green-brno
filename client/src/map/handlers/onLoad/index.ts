import type { Map } from 'mapbox-gl'
import { GREEN_JSON_URL, MAJOR_GREEN_JSON_URL, TEMPERATURE_JSON_URL } from '../../data'
import { addTemperature } from './addTemperature'
import { addMajorGreen } from './addMajorGreen'
import { addGreen } from './addGreen'

export const onLoad =
  ({ map }: { map: Map }) =>
  async () => {
    const temperatureDataPromise = fetch(TEMPERATURE_JSON_URL).then((response) => response.json())
    const majorGreenDataPromise = fetch(MAJOR_GREEN_JSON_URL).then((response) => response.json())
    const greenDataPromise = fetch(GREEN_JSON_URL).then((response) => response.json())

    const [temperatureData, majorGreenData, greenData] = await Promise.all([
      temperatureDataPromise,
      majorGreenDataPromise,
      greenDataPromise,
    ])

    const temperatures: Record<number, number> = {}
    temperatureData.features.forEach((feature: any) => {
      const temperature = feature.properties?.Teplota
      if (temperature) {
        temperatures[temperature] = (temperatures[temperature] ?? 0) + 1
      }
    })

    addTemperature(map, temperatureData)
    addMajorGreen(map, majorGreenData)
    addGreen(map, greenData)
  }

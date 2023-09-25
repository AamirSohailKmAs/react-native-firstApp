/* eslint-disable no-extra-semi */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
// import { StatusBar } from 'expo-status-bar'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])

  const getWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}`
      const response = await fetch(url)
      const data = await response.json()
      setWeather(data)
    } catch (exception) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      const location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLong(location.coords.longitude)
      await getWeather()
    })()
  }, [lat, long])

  return [loading, error, weather]
}

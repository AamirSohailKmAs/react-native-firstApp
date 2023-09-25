import React from 'react'
// import { StatusBar } from 'expo-status-bar'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

const App = () => {
  const [loading, error, weather] = useGetWeather()
  // console.log(loading, error, weather)

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App

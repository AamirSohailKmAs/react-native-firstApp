import React from 'react'
// import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'

const Weather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  const weatherCondtion = weather[0].main

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherCondtion].backgroundColor }
      ]}
    >
      <Feather
        name={weatherType[weatherCondtion].icon}
        size={100}
        color="black"
      />
      <View style={styles.container}>
        <Text style={styles.text48}>{`Current Weather ${temp}`}</Text>
        <Text>feels {feels_like}</Text>
        <Text>max: {temp_max}</Text>
        <Text>min: {temp_min}</Text>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.text30}>{weather[0].description}</Text>
        <Text>home so</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodyWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 20
  },
  text48: {
    color: 'white',
    fontSize: 48
  },
  text30: {
    color: 'white',
    fontSize: 30
  }
})

export default Weather

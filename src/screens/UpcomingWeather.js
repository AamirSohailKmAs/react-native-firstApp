import React from 'react'
import { FlatList, StyleSheet, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      dt_text={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  )
  const { wrapper, image } = styles
  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        source={require('../../assets/flowers.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'magenta'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather

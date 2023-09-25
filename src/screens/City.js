import React from 'react'
// import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={styles.imageLayout}
      >
        <Text style={[styles.text, styles.font40]}>{name}</Text>
        <Text style={[styles.text, styles.font30]}>{country}</Text>
        <View style={[styles.popul, styles.text]}>
          <Feather name="user" size={50} color="red" />
          <Text style={[styles.font30, styles.textRed]}>{population}</Text>
        </View>
        <Text style={[styles.text, styles.font30]}>
          {moment(sunset).format('h:mm:ss a')}
        </Text>
        <Text style={[styles.text, styles.font30]}>
          {moment(sunrise).format('h:mm:ss a')}
        </Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  imageLayout: {
    flex: 1
  },
  text: {
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  popul: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRed: {
    color: 'red'
  },
  font30: {
    fontSize: 30
  },
  font40: {
    fontSize: 40
  }
})

export default City

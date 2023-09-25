import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

const ListItem = ({ condition, dt_text, min, max }) => {
  return (
    <View style={styles.item}>
      <View style={styles.dateTextWrapper}>
        <Text>{moment(dt_text).format('dddd')}</Text>
        <Text>{moment(dt_text).format('h:mm:ss a')}</Text>
      </View>
      <Text>Min: {min}</Text>
      <Text>Max: {max}</Text>
      <Feather name={weatherType[condition].icon} size={20} color={'white'} />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
})

export default ListItem

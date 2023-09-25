import React from 'react'
// import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'

const ErrorItem = ({ message }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text48}>{message ?? 'Something went wrong '}</Text>
        <Feather name={'frown'} size={100} color="white" />
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

export default ErrorItem

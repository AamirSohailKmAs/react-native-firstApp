import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Counter = () => {
  const { container, title } = styles
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`count is ${count}`)
  })
  return (
    <View style={container}>
      <Text style={title}>{`count: ${count}`}</Text>
      <Button
        color={'green'}
        title={'Increase'}
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={'red'}
        title={'Decrease'}
        onPress={() => setCount(count - 1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  }
})

export default Counter

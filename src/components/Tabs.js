/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
// import { StatusBar } from 'expo-status-bar'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Weather from '../screens/Weather'
import UpComingWeather from '../screens/UpcomingWeather'
import { Feather } from '@expo/vector-icons'
import Counter from '../temp/Counter'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'lightgreen'
        },
        headerStyle: {
          backgroundColor: 'lightgreen'
        },
        headerTitleStyle: {
          color: 'red',
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'red' : 'green'}
            />
          )
        }}
      >
        {() => <Weather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcomming"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'red' : 'green'}
            />
          )
        }}
      >
        {() => <UpComingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="user"
        component={Counter}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'user'}
              size={25}
              color={focused ? 'red' : 'green'}
            />
          )
        }}
      />
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'red' : 'green'}
            />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs

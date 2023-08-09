
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Header } from './components/Header';
Header

const Stack = createNativeStackNavigator();

const App = () => {
  const btnAction = () => {
    console.warn("btn Pressed")
  }
  return (<NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 25
        }
      }}
    >
      <Stack.Screen name='Login' component={Login}
        options={{
          headerTitle: () => <Button onPress={btnAction} title='Left' />,
          headerRight: () => <Header />,
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontSize: 25
          }
        }}
      />
      <Stack.Screen name='Home' component={Home} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;

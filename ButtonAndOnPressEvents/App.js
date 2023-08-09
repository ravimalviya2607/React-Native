// React Native in Button and OnPress Events

import React from 'react';
import { Button, View, Text } from 'react-native';

const App  = () => {
  const fruit = (val) => {
    console.warn(val)
  }
  return(
    <View>
      <Text style={{ fontSize: 30}}>Button and OnPress Events</Text>
      <Button title='On Press 1' onPress={()=>fruit("Hello Ravi")} color={'green'}/>
      <Button title='On Press 2' onPress={fruit} color={'blue'}/>
    </View>
  );
};


export default App;

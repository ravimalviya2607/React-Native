// React Native in States And Variables

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [name, setName] = useState("Ravi");
  let data="Sonu"

  function testName() {
    setName("Hitesh")
    data ="peter"
  }
  return(
    <View>
      <Text style={{ fontSize: 30 }} >{name}</Text>
      <Text style={{ fontSize: 30 }} >{data}</Text>
      <Button title='Update Name' onPress={testName}/>
    </View>
  );
};




export default App;

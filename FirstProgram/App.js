
import React from 'react';
import { Text, View, Button } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello First Text Component</Text>
      <Text style={{ fontSize: 20 }}>Hello Second Text Component</Text>
      <Text style={{ fontSize: 15 }}>Hello Third Text Component</Text>
      <Button title='Press Here'></Button>
      <Button title='Press Me Here'></Button>

    </View>
  );
}


export default App;

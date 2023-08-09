
// React Native In Props 

import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

const App = () => {
  const [name, setName] = useState("Bruce");
  return (
    <View>
      <Text style={{ fontSize: 30 }}> Props in React Native</Text>
      <Button title = 'Update Props' onPress={()=>setName("Peter")}/>
      <User name={name} age={29}/>
    </View>
  );
};

const User=(props)=>{
  return (
    <View style={{backgroundColor: 'green', padding: 5}}> 
      <Text style={{ fontSize: 30}}>Name :{props.name}</Text>
      <Text style={{ fontSize: 30}}>Age :{props.age}</Text>
    </View>
  );
};


export default App;

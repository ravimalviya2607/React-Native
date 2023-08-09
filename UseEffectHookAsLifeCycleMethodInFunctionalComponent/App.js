

import React, {useEffect, useState} from 'react';
import { View,Text, Button } from 'react-native';

const App = () => {

  const [count,setCount]=useState(0);

  // Mounting(Load Program)
  useEffect(()=>{
    console.warn("hello")
  },[])

  return (
    <View>
      <Text style={{ fontSize:25}}>Life Cycle with UseEffect Hooks {count}</Text>
      <Button title='UpdateCount' onPress={()=>setCount(count+1)}/>
    </View>
  );
};


export default App;

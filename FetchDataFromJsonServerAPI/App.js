

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = "http://10.0.2.2:3000/uesrs";
    let result = await fetch(url);
    result = await result.json();
    console.warn(result)
    setData(result)
  }

  useEffect(() => {
    getAPIData();
  }, [])
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Call JSON API</Text>
      {
        data.length ?

        data.map((item)=>
        <View style={{borderWidth:1,borderColor:"gold"}}>
          <Text style={{ fontSize: 30 }}>{item.name}</Text>
          <Text style={{ fontSize: 30 }}>{item.age}</Text>
          <Text style={{ fontSize: 30 }}>{item.email}</Text>
        </View>)
        :
        null
      }
    </View>
  );
};


export default App;

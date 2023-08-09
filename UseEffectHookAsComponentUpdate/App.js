

import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  //  useEffect(()=>{
  //    console.warn(count,data);
  //  },[count,data]);

  // useEffect(()=>{
  //   console.warn("Do Some Animation");
  // },[count]);

  // useEffect(()=>{
  //   console.warn("Call Some Api Here");
  // },[data]);

  return (
    <View>
      <Text style={{ fontSize: 24 }}> {data}, useEffect as ComponentDidUpdate {count}</Text>
      <Button title='Update Counter' onPress={() => setCount(count + 1)} />
      <Button title='Update Data' onPress={() => setData(data + 1)} />
      <User info={{ data, count }} />
    </View>
  );
};

const User = (props) => {

  useEffect(() => {
    console.warn("Run this code when data props is updated");
  }, [props.info.data])

  useEffect(() => {
    console.warn("Run this code when count props is updated");
  }, [props.info.count])
  return (
    <View>
      <Text style={{ fontSize: 30, color: 'orange' }}>Data : {props.info.data}</Text>
      <Text style={{ fontSize: 30, color: 'orange' }}>Count : {props.info.count}</Text>
    </View>
  );
};

export default App;

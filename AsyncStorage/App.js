
import React, { useState } from 'react';
import {View,Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App=()=>{
  const [user,setUser] = useState('');
  const setData = async()=>{
    await AsyncStorage.setItem("user", "Ravi Malviya")
  }
  const getData = async()=>{
    const name = await AsyncStorage.getItem("user");
    setUser(name)
  }

  const removeData = async()=>{
    await AsyncStorage.removeItem("user");
    setUser('');
  }
  return(
    <View>
      <Text style={{fontSize:40}}>AsyncStorage with React Native {user}</Text>
      <Button title='Set Data' onPress={setData}/>
      <Button title='Get Data' onPress={getData}/>
      <Button title='Remove Data' onPress={removeData}/>
    </View>
  );
};
export default App;

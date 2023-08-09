import React from 'react';
import {View,Text, Button} from 'react-native';

const App=()=>{

  const saveAPIData = async()=>{
    const data={
      name:"Sonu",
      age:25,
      email:"Sonu@gmail.com"
    }
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    })
    result=  await result.json();
    console.warn(result);
  }

  return(
    <View>
      <Text style={{fontSize:30,alignItems:'center'}}>Post API Call</Text>
      <Button title='Save Data' onPress={saveAPIData}/>
    </View>
  )
}


export default App;

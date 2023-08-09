

import React, { useState } from 'react';
import {View,Text,TextInput} from 'react-native'

const App=()=>{
  const [data,setData] = useState([]);

  const searchUser = async(text)=>{
    const url=`http://10.0.2.2:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if(result){
      setData(result)
    }
  }
  return(
    <View style={{flex:1}}>
      <TextInput style={{borderWidth:1,borderColor:'skyblue',margin:15,fontSize:20}}
      placeholder={'Search'}
      onChangeText={(text)=>searchUser(text)}
      />
      {
        data.length ?
        data.map((item)=><View>
          <Text style={{fontStyle:30}}> {item.name}</Text>
        </View>)
        :
        null
      }

    </View>
  );
};


export default App;

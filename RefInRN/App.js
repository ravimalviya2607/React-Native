

import React, {useRef} from 'react';
import { Button, TextInput,View,StyleSheet} from 'react-native';

const App=()=>{

  const input = useRef(null);

  const updateInput=()=>{

    input.current.setNativeProps({
      fonstSize:24,
      color:'green'
    })
  }

  return(
    <View style={styles.container}>
      <TextInput ref={input} style={styles.input} placeholder='Enter Name'/>
      <TextInput style={styles.input} placeholder='Enter Password'/>
      <Button title='Update Input' onPress={updateInput}/>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:16
  },
  input:{
    borderColor:'skyblue',
    borderWidth:1,
    margin:10,

  }
})


export default App;

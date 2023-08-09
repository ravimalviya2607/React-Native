
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const [show, setShow]= useState(false)
  return (<View style={styles.container}>
    {
      show?
      <View style={styles.modal}>
      <View style={styles.body}>
        <Text style={{fontSize:25,padding:50}}>Some Text</Text>
        <Button title='Close' onPress={()=>setShow(false)} />
      </View>
    </View>
    : 
    null
    }
    <Button title='Open Dialog' onPress={()=>setShow(true)}/>
  </View>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,.5)',
    justifyContent:'center',
    alignItems:'center'
  },
  body: {
    backgroundColor:"#ffff",
    height:200,
    width:300,
    padding:20,
    justifyContent:'center',
    borderRadius:10,
    alignItems:'center'
  }
})
export default App;

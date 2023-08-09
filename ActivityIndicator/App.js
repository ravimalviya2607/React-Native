
import React, { useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Button } from 'react-native';

const App = () => {
  const [show,setShow]=useState(false)
  const displayLoader=()=>{
    setShow(true);

    setTimeout(()=>{
      setShow(false)
    }, 3000);
    //api call in 3 sec
  }
  return (
    <View style={styles.main}>
      {/* <ActivityIndicator size={100} color="gold"/>
      <ActivityIndicator size={100} color="blue"/> */}

      <ActivityIndicator size={100} color="green" animating={show}/>
      {
        show ? <ActivityIndicator size="large" color="blue"/> :null
      }
      <Button title='Show Loader' onPress={displayLoader}/>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;

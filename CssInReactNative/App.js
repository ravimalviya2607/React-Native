
// Css in React Native 

import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import ExStyles from './style'

const App = () => {
  return(
    <View>
      <Text style={{fontSize:30,color:'red',backgroundColor:'green'}}> Style in React Native</Text>

      <Text style={styles.textBox}> Style in React Native</Text>
      <Text style={styles.textBox}> Style in React Native</Text>
      <Text style={styles.textBox}> Style in React Native</Text>
      <Text style={ExStyles.textBox}> Style in React Native</Text>
      <Text style={[styles.textBox, ExStyles.textBox,{marginTop:20}]}> Style in React Native</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  textBox:{
    color:'blue',
    fontSize:25,
    backgroundColor:'yellow',
    marginBottom:10,
    padding:10,
    borderRadius:20,
    textAlignVertical:'center',
    textAlign:'center',
    borderColor:'black',
    borderWidth:5
    
    
  }
})
export default App;

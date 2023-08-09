
import React,{useState} from 'react';
import { View, StatusBar, StyleSheet, Button } from 'react-native';

const App=()=>{ 

  const [hide, setHide] =useState(false)
  const [barStyle, setBarStyle] =useState("default")
  return(
    <View style={styles.container}>
      <StatusBar
      backgroundColor="orange"
      barStyle={barStyle}
      hidden={hide}

      />
      <Button title='Toogle Status Bar' onPress={()=>setHide(!hide)}/>
      <Button title='Update Style' onPress={()=>setBarStyle("dark-content")}/>
    </View>
  );
};

const styles =StyleSheet.create({
  container:{
   flex:1,
   justifyContent:'center' 
  }
})
export default App;

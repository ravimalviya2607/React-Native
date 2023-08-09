
import React,{useState} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const App = () => {

  const [isLongPress, setIsLongPress] = useState(false);


  const handleLongPress = () => {
    setIsLongPress(true);
  }
    setTimeout(() => {
      if (isLongPress) {
        console.warn("Long Press");
        // Add your actions for the long press here
      }
    }, 500);
  
  return (
    
    <View style={styles.main}>
      <Pressable
//      onPress={()=>console.warn("Normal on Press")}
      onLongPress={()=>{setIsLongPress(handleLongPress)}}
//      onPressIn={()=>{console.warn("Press in")}}
//      onPressOut={()=>{console.warn("Press out")}}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    flex: 1
  },
  pressableBtn:{
     backgroundColor:'blue',
     color:"#ffff",
     padding:10,
     margin:10,
     borderRadius:10,
     fontSize:20,
     textAlign:'center',
     shadowColor:"#000",
     elevation:5
}
})

export default App;

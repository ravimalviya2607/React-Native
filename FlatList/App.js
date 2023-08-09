
import React from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';

const App =()=> {

  const users=[
    {
      id:1,
      name: "Ravi"
    },
    {
      id:2,
      name: "Sonu"
    },
    {
      id:3,
      name: "Hitesh"
    },
    {
      id:4,
      name: "Mummy"
    },
    {
      id:5,
      name: "Papa"
    }
  ]
  return(

    <View>
      <Text style={{fontSize:30}}>List with Flat List Component</Text>
      <FlatList
      data={users}
      renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
      keyExtractor={item=>item.id}
      />
    </View>
  );
};

const styles =StyleSheet.create({
  item:{
    fontSize: 24,
    padding: 10,
    color: "#ffff",
    backgroundColor: "blue",
    borderColor:"black",
    borderWidth:3,
    margin:10
  }
})


export default App;

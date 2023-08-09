import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

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
    },
    {
      id:6,
      name: "Sinu"
    },
    {
      id:7,
      name: "Payal"
    },
    {
      id:8,
      name: "Deepu"
    },
    {
      id:9,
      name: "Massi"
    },
    {
      id:10,
      name: "Masoji"
    },
    {
      id:5,
      name: "Dadi"
    },
    {
      id:5,
      name: "Dada"
    },
    {
      id:5,
      name: "Mama"
    }
  ]
  return(

    <View>
      <Text style={{fontSize:30}}>List with Map Function</Text>
      <ScrollView style={{marginBottom:50}}>
      {
        users.map((item)=><Text style={styles.item}>{item.name}</Text>)
      }
      </ScrollView>
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
    borderWidth:1,
    margin:10
  }
})

export default App;


import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const App = () => {

  const users = [
    {
      id: 1,
      name: "Ravi"
    },
    {
      id: 2,
      name: "Sonu"
    },
    {
      id: 3,
      name: "Hitesh"
    },
    {
      id: 4,
      name: "Mummy"
    },
    {
      id: 5,
      name: "Papa"
    },
    {
      id: 6,
      name: "Sinu"
    },
    {
      id: 7,
      name: "Payal"
    },
    {
      id: 8,
      name: "Deepu"
    },
    {
      id: 9,
      name: "Massi"
    },
    {
      id: 10,
      name: "Masoji"
    },
    {
      id: 11,
      name: "Dadi"
    },
    {
      id: 12,
      name: "Dada"
    },
    {
      id: 13,
      name: "Mama"
    },
    {
      id: 14,
      name: "Massi"
    },
    {
      id: 15,
      name: "Masoji"
    },
    {
      id: 16,
      name: "Dadi"
    },
    {
      id: 17,
      name: "Dada"
    },
    {
      id: 18,
      name: "Mama"
    },
    {
      id: 20,
      name: "Massi"
    },
    {
      id: 21,
      name: "Masoji"
    },
    {
      id: 22,
      name: "Dadi"
    },
    {
      id: 23,
      name: "Dada"
    },
    {
      id: 24,
      name: "Mama"
    }
  ]
  return (
    <View>
      <Text style={{ fontSize: 31 }}>Grid With Dynamic Data</Text>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          {
            users.map((item) => <Text style={styles.item}>{item.name}</Text>)
          }
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: "blue",
    color: "#ffff",
    margin: 5,
    width: 120,
    padding: 5,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center'

  }
})

export default App;

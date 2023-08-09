
import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Platform: {Platform.OS}</Text>
      {Platform.OS === 'android' ? (
        <View style={{ backgroundColor: 'green', height: 100, width: 100 }}></View>
      ) : (
        <View style={{ backgroundColor: 'red', height: 100, width: 100 }}></View>
      )}
      <Text style={styles.text}>Hello</Text>
      <Text style={{fontSize:20}}>{JSON.stringify(Platform)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    color : Platform.OS=="android" ? "blue" : "orange",
    fontSize:30
  }
});

export default App;


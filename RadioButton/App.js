
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {

  const [SelectedRadio, setSelectedRadio] = useState(1)
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              SelectedRadio == 1 ? <View style={styles.radioBg}></View> : null
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              SelectedRadio == 2 ? <View style={styles.radioBg}></View> : null
            }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioText: {
    fontSize: 20,
    color:'skyblue'
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioBg: {
    backgroundColor: 'skyblue',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4
  }
})

export default App;

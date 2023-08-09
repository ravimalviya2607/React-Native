
import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet, Text} from 'react-native';

const App=()=>{
  const [showModal,setShowModal]=useState(false)
  return(
    <View style={styles.main}>
      <Modal
      transparent={true}
      visible={showModal}
      animationType="fade"
      >
        <View style={styles.centreView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello Code By Ravi Malviya</Text>
            <Button title='Close Modal' onPress={()=> setShowModal(false)}/>
            </View>
        </View>
      </Modal>
      <View style={styles.buttonView}><Button title='Open Modal' onPress={()=> setShowModal(true)}/></View>
    </View>
  );
};

const styles=StyleSheet.create({
  main:{
    flex: 1
  },
  buttonView:{
    flex:1,
    justifyContent:'flex-end'
  },
  centreView:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalView:{
    backgroundColor:'#ffff',
    padding:30,
    borderRadius:20,
    shadowColor:'black',
    elevation:5
  },
  modalText:{
    fontSize:25,
    marginBottom:20
  }
})


export default App;

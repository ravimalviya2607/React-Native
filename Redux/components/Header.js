import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux'

const Header=()=>{

  const cartData=useSelector((state)=>state.reducer)
  const [cartItems,setCartItems]=useState(0)
  
  useEffect(()=>{
    if(cartData){
    setCartItems(cartData.length)}
  },[cartData])

  return(
    <View>
        <Text style={{fontSize:30,textAlign:'right',padding:10,backgroundColor:'orange'}}>{cartItems}</Text>
    </View>
  );
};

const style=StyleSheet.create({
  container:{
    flex:1
  }
})

export default Header;
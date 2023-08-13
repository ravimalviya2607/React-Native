import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeToCart } from './redux/action';


const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isadded, setIsAdded] = useState(false)

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))

  }

  const handleRemoveFromCart=(item)=>{
    dispatch(removeToCart(item.name))
  }

  useEffect(() => {
   let result = cartItems.filter((element)=>{
    return element.name === item.name
   });
   if(result.length){
    setIsAdded(true)
   }else{
    setIsAdded(false)
   }
  }, [cartItems])

  return (
    <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10 }}>
      <View>
        <Text style={{ fontSize: 24 }}>{item.name}</Text>
        <Text style={{ fontSize: 24 }}>{item.price}</Text>
        <Text style={{ fontSize: 24 }}>{item.color}</Text>
        <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
        {
          isadded ?
            <Button title='Remove To Cart' onPress={() => handleRemoveFromCart(item)} />
            :
            <Button title='Add To Cart' onPress={() => handleAddToCart(item)} />
        }
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Product;
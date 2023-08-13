

import React from 'react';
import {View, Text, StyleSheet,Image, Button, ScrollView} from 'react-native';
import Header from './Header';
import Product from './Product';


const ProductWrapper=({navigation})=>{
  
  const products=[
    {
      name: "Samsung S23 Utra",
      price: "white",
      color:'black',
      price: 125000,
      image:"https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-Ultra.png",
  
      
    },
    {
      name: "IPhone 14 Pro Max",
      color: "black",
      price: 130000,
      image:"https://d1231c29xbpffx.cloudfront.net/store/product/185450/image/205e8a643ff95366981942e553bb57bc.png?Expires=1691724699&Signature=e~g8IceRndZGoTWzM55zGdbs2YKGUaWxJuqFx~9t4UBQ~Qps8CYvvLJ1OuJGPfs6oGM1rFuPGY9Gld23K-aiMzOKnAERYnS9OmZujw5pyZ7NsMY~FdgecFRQaxkPAxImKuMei~QZKxd1Kw9SRKXzks~aqn8FaQOGe11AoT52i2zgfB30DSV-te2f6el51NLXBZydO5w9i7B8bYaC90QQLzX4fq1YOQgLlScoBTP6xuvd0whAAG0H2MDQfIvtEC1hS4NORujL7v7EjdTBebcClI-Qz7GZoHsyt7zcptfmmd5g3Ka-neEuQ-Y5U7SZhCutlgnfQkdKyeoK4JFta4STew__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ",
      
    },
    {
      name: "Oneplus 10 Pro",
      color:'blue',
      price: 130000,
      image:"https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-10-pro-1.jpg",

    }
  ]
    
  
  return(
    <View style={styles.container}>
        <Header/>
        <Button title='Go To User List' onPress={()=>navigation.navigate("User")}/>
      <ScrollView style={{marginBottom:90}}>
      {
        products.map((item)=><Product item={item}/> )
      }
      </ScrollView>
      
      
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})

export default ProductWrapper;

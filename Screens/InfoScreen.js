import React, {Component} from 'react';
import {StyleSheet, Text,View,Button} from 'react-native';

export default class InfoScreen extends Component{



render(){
    return (
        <View style={Styles.container}>
      <Text>hola</Text>
    </View>
    );    
}
}

const Styles= StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems:'center',
       justifyContent:'center',

   }
   });



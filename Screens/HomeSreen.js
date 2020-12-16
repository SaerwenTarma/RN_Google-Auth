import React, {Component} from 'react';
import {StyleSheet, Text,View,Button, TextInput} from 'react-native';
const axios = require('axios');

export default class InfoScreen extends Component{
    handlerBtn(){
 
        axios.get("https://www.amiiboapi.com/api/amiibo", {params:{name:this.state.nombre}})
        .then( response => {
          console.log(response.data);
          this.setState(()=>{return {consulteApi:true, nombre: response.data.amiibo[0].name,
        serie: response.data.amiibo[0].amiiboSeries}});
        })
        .catch( error => {
          console.log(error);
        });
      
         
       }
        
       handlerTxt(text){
       
         this.setState({nombre:text});
      
       }  



render(){
    
    return (
        <View style={Styles.container}>
                <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:200 }}
                      onChangeText={text =>  this.handlerTxt(text)}
                       />

                 <Button
                    onPress={this.handlerBtn.bind(this)}
                     title="Consultar API"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"/>
      
  <Text>{ if(consulteApi) {this.state.nombre}}  </Text>
      
           
      
     );
     


      
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



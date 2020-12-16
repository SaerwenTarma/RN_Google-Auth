import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "./HomeSreen";
import InfoScreen from "./InfoScreen";

const Drawer = createDrawerNavigator();

export default class MainScreen extends Component{

    handlerLogout(){
        this.props.onLogout();
    }

    render(){
        return (
           
                <NavigationContainer>
                      
                          <Drawer.Navigator screenOptions={{headerShown:true}}>
                          <Drawer.Screen name="Home" component ={HomeScreen}/>
                          <Drawer.Screen name="Info" component ={InfoScreen}/>
                          
                      </Drawer.Navigator>
                </NavigationContainer>




           
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

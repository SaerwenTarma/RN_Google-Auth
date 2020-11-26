import React, {Component} from 'react';
import LoginScreen from "./Screens/LoginScreen";
import MainScreen from "./Screens/MainScreen";
const Drawer = createDrawerNavigator();



export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {isLoggedIn:false}
    }

    setLogin(){
        this.setState({isLoggedIn:true});
    }

    setLogout(){
        this.setState({isLoggedIn:false});
    }

    render(){

        <NavigationContainer>
        {/*<DrawerDefaultNavigator />*/}
        <DrawerCustomNavigator />
      </NavigationContainer>

        let screen;
        if(this.state.isLoggedIn){
            screen = <MainScreen onLogout={() => this.setLogout()}/>
        } else {
            screen = <LoginScreen onLogin={() => this.setLogin()}/>
        }

        return screen;

    }

}
  import React ,{Component} from 'react'
import{
    Text,
    Font,
    TextInput,
    Button,
    View
}from 'react-native'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from "react-navigation-drawer";

class App extends Component{
    render() {

        return (

            <View style={{
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{height: 120, width: 120, backgroundColor: 'red'}}></View>
                <View style={{height: 120, width: 120, backgroundColor: 'blue'}}></View>
                <View style={{height: 120, width: 120, backgroundColor: 'green'}}></View>
                <View style={{height: 120, width: 120, backgroundColor: 'orange'}}></View>
                <View><Button title='Go to Profile' onPress={() => {
                    this.props.navigation.navigate("Profile")
                }}/></View>
                <View><Button title='Go to About' onPress={() => {
                    this.props.navigation.navigate("About")
                }}/></View>
            </View>


        );
    }
}


function Profile(props){
        return (

            <View style={{
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{height: 120, width: 120, backgroundColor: 'red'}}></View>
                <View style={{height: 120, width: 120, backgroundColor: 'blue'}}></View>
                <View style={{height: 120, width: 120, backgroundColor: 'green'}}></View>
                <View><Button title='Go to Home' onPress={() => {
                    props.navigation.navigate("Home")
                }}/></View>
            </View>
        )
}

function About(props){
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between'
        }}>
            <View style={{height: 120, width: 120, backgroundColor: 'red'}}></View>
            <View style={{height: 120, width: 120, backgroundColor: 'blue'}}></View>
            <View><Button title='Go to Home' onPress={() => {
                props.navigation.navigate("Home")
            }}/></View>
            <View><Button title='Go to About' onPress={() => {
                props.navigation.navigate("About")
            }}/></View>
        </View>
    )
}

const appNav=createDrawerNavigator({
    Home:{
        screen:App
    },
    Profile:{
        screen:Profile
    },
    About:{
        screen:About
    }
})
export default createAppContainer(appNav);

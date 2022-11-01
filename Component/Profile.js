import {Button, View} from "react-native";
import React ,{Component} from 'react'

class App extends Component{
    render(){
        console.warn(this.props.navigation.state.params.name)
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
                this.props.navigation.navigate("Home")
            }}/></View>
        </View>
    );
    }
    }
    export default App;

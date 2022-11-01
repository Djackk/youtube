import React, {Component, useState} from 'react'
import{
    Text,
    View,Button
}from 'react-native'

class App extends Component{
    constructor()
    {
        super()
        this.state={
            data:""
        }
    }
    render() {
        return(
            <View>
                <Text>
                    {this.state.data}
                </Text>
            </View>
        )
    }
    componentDidMount() {
        this.setState({data:"Data from component did mount"})
    }
}

export default App;

import React ,{Component} from 'react'
import{
    Text,
    Font,
    TextInput,
    Button,
    View,
    ScrollView
}from 'react-native'

class App extends Component{
    render() {

        return (
            <View>
            <ScrollView horizontal={true}>
                <View style={{height: 220, width: 120, backgroundColor: 'red'}}></View>
                <View style={{height: 220, width: 120, backgroundColor: 'blue'}}></View>
                <View style={{height: 220, width: 120, backgroundColor: 'green'}}></View>
                <View style={{height: 220, width: 120, backgroundColor: 'orange'}}></View>
                <View style={{height: 220, width: 120, backgroundColor: 'grey'}}></View>
            </ScrollView>
            <Text>Scroll</Text>
            </View>
        );
    }
}

export default App;

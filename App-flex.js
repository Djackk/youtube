import React ,{Component} from 'react'
import{
    Text,
    Font,
    TextInput,
    Button,
    View
}from 'react-native'

class App extends Component{
    render()
    {
        return(
            <View style={{flex:1,flexWrap:'wrap', flexDirection:'row', alignContent:'center',justifyContent:'space-between'}}>
                <View style={{height:120,width:120, backgroundColor:'red'}}></View>
                <View style={{height:120,width:120, backgroundColor:'blue'}}></View>
                <View style={{height:120,width:120, backgroundColor:'green'}}></View>
                <View style={{height:120,width:120, backgroundColor:'orange'}}></View>
            </View>
        );
    }
}
export default App;

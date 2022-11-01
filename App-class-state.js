import React,{Component} from 'react'
import{
Text,
View,
Button
} from 'react-native'

class App extends Component{
constructor(){
    super();
    this.state={
        data:"Old state"
        }
    }
    render(){
        return(
        <View>
            <Text style={{fontSize:60}}>{this.state.data}</Text>
            <Button title="Update state" onPress={()=>{this.setState({data:"New State"})}} />
        </View>
        );
    }
}
export default App;
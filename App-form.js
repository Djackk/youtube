import React ,{Component} from 'react'
import{
    Text,
    Font,
    TextInput,
    Button,
    View
}from 'react-native'

class App extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            password:''
        }
    }
    render()
    {
        let value=''
        return(
            <View>
                <TextInput placeholder="Enter name"
                           style={{fontSize:30,color:'red',backgroundColor:'orange'}}
                           onChangeText={(e)=>{this.setState({name:e})}}
                />
                <TextInput placeholder="Enter password"
                           style={{fontSize:30,color:'red',backgroundColor:'orange'}}
                           onChangeText={(e)=>{this.setState({password:e})}}
                           secureTextEntry={true}
                />
                <Button title ="save" onPress={()=>{console.warn(this.state)}}/>
            </View>
        );
    }
}
export default App;

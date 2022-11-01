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
    name:""
}\
}
render()
{
let value=''
return(
<View>
    <Text>
    {this.state.name}
    </Text>
    <TextInput placeholder="Enter something"
    style={{fontSize:30,color:'red',backgroundColor:'orange'}}
    onChangeText={(e)=>{this.setState({name:e})}}
    />
    <Button title ="save" onPress={()=>{alert(this.state.name)}}/>
</View>
);
}
}
export default App;

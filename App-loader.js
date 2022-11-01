import React,{Component} from "react";
import {
    Text,
    Button,
    ActivityIndicator,
    View
} from "react-native";
class app extends Component{
    constructor() {
        super();
        this.state={
            loader:true
        }
    }
    componentDidMount() {
        setTimeout(
            ()=>{
                this.setState({loader:false})
            },3000
        );
    }

    render() {
        return(
            <View>{
                this.state.loader==true?
                    <View><ActivityIndicator size={80}/>
                    <Text style={{fontSize:80}}>Indicating</Text>
                    </View>
               :<Text style={{fontSize:80}}>Indicated</Text>
            }
            </View>
        );
    }
}

export default app

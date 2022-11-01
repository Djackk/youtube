import React,{Component} from "react";
import {
    View,
    Button,Text
} from "react-native";


export default class Home extends Component{
    componentWillMount() {
        console.warn("Before :",this.props.status)
    }

    test()
    {
        this.props.profile();
        console.warn("After :",this.props.status)
    }
    render() {
        return(

          <View>
              <Button title={"Redux Props"} onPress={()=>this.test()}></Button>
          </View>
        );
    }
}

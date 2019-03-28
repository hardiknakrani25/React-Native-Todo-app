import React,{Component} from 'react';
import {View,
    TextInput,
    Text,
    SafeAreaView,TouchableOpacity
}
from 'react-native';

export class Todo extends Component{
    constructor(){
        super();
        this.state={
            todos:[],
            newTodo:''
        }
    }

    handleChange(e){
        // const {value}=e.target;
        this.setState({newTodo:e})
    }

    handlePress(){
const todos=[...this.state.todos,this.state.newTodo];
this.setState({todos,newTodo:''});
    }

    render(){
        return(
<View>
    <View>
        <TextInput style={{backgroundColor:'#80aaff'}} value={this.state.newTodo} onChangeText={this.handleChange.bind(this)}/>


        <TouchableOpacity onPress={this.handlePress.bind(this)}>
            <Text>
                create
            </Text>
        </TouchableOpacity>
    </View>

    <View style={{backgroundColor:'#d9b3ff'}}>
        {this.state.todos.map((todo,i)=> <Text key={i}>{todo}</Text>)}
    </View>

</View>



        )
    }

}
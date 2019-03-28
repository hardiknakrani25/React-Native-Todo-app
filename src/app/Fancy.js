import React,{Component} from 'react';
import {View,StyleSheet,Text,SafeAreaView} from 'react-native';

export class Fancy extends Component{
    constructor(){
        super();

    }

    render(){

        return(

            <SafeAreaView style={styles.container}>
                <Text>
                Style
                </Text>
            </SafeAreaView>
        )
    }

}

const styles=StyleSheet.create(
    {
        container:{
                    flex:1,
            backgroundColor:'powderblue'
        }
    }

)
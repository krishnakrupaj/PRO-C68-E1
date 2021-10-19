import React from 'react'
import {Text,View,Image} from 'react-native'

export default class FbTab extends React.Component{
    render(){
        return(
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

            <Image styles = {{width:500,height:500,flex:1}}
            source={'fb.png'}/> 
            
            <Text styles={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold'
            }}>FACEBOOK</Text>

         </View>

        )
    }
}
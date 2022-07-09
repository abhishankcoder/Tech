import React, { Component, useRef, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";



import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CheckBox from '@react-native-community/checkbox';



export default function Login({ navigation }) {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (<>
  <ScrollView>

    <View style={{backgroundColor:'#0047AB',height:1000 }}>

    <View style={{marginHorizontal:20}}>
     
    <View style={{marginTop:150}}>
      <View style={{ marginTop: 30 }}>
        <View style={{borderRadius:10,padding:10,backgroundColor:'#E5E4E2',marginTop:10}}>
        <TextInput placeholder="Email" placeholderTextColor={'black'} style={{textAlign:'center',fontWeight:'500'}}></TextInput>
        </View>

      </View>

      <View style={{ marginTop: 20 }}>
        <View style={{borderRadius:10,padding:5,backgroundColor:'#E5E4E2',marginTop:10}}>
        <TextInput placeholder="Password" placeholderTextColor={'black'} style={{textAlign:'center',fontWeight:'500'}}></TextInput>
        </View>

      </View>
      

      <View style={{marginTop:10,flexDirection:'row'}}>
      <CheckBox
    disabled={false}
    value={toggleCheckBox}
    tintColor={'red'}
    
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
        <Text style={{fontSize:14,color:'white',fontWeight: '800',top:5,left:10}}>Remember Me</Text>
      </View>
    

      <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
      <View style={{ alignItems: 'center', marginTop: 20, borderRadius: 10,  padding: 20, backgroundColor: '#8A9A5B' }}>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '800' }}>Submit</Text>
      </View>
      </TouchableOpacity>

     


      </View>

    </View>


    </View>

    </ScrollView>

  </>);


}


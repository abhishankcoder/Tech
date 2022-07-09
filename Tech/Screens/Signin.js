import React, { Component, useRef, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";




import Icon from 'react-native-vector-icons/FontAwesome';
import Lost from './Lost';


export default function Signin( {navigation} ) {
  const [show,setShow]=useState(false)



  return (<>
  <ScrollView>

   <View>
    <View style={{padding:30,backgroundColor:'#2AAA8A'}}>
      <Icon name="navicon" size={20} color={'white'} style={{right:10}} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
      <View style={{borderTopLeftRadius:10,padding:10,borderBottomLeftRadius:10,alignItems:'center',width:'30%',backgroundColor:'#2AAA8A'}}>
        <Text style={{color:'white'}}>Leads</Text>
      </View>

      <View style={{borderTopRightRadius:10,borderWidth:1,borderColor:'red',padding:10,borderBottomRightRadius:10,alignItems:'center',width:'30%'}}>
        <Text>Follow</Text>
      </View>

      
      </View>
<TouchableOpacity onPress={() => { setShow(true)  }} >
      <View style={{ alignItems: 'center', marginTop: 580, borderRadius: 10,  padding: 20, backgroundColor:'#2AAA8A',marginHorizontal:10 }}>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '800' }}>Start Calling</Text>
      </View>
      </TouchableOpacity>

   </View>

    


    </ScrollView>
    <Lost visible={show} closeCallback={() => {setShow(false) }} navigation={navigation}/>
    

  </>);


}


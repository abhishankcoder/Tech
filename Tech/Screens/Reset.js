import React, { Component, useRef, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";



import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';



export default function Reset() {


  return (<>
  <ScrollView>

    <View style={{ marginHorizontal: 25 }}>
    </View>

    <View style={{marginHorizontal:20}}>
      <View style={{marginTop:80}}>
      <Text style={{ fontSize: 36, fontFamily: 'Poppins-Regular', fontWeight: 'bold', color: '#1D1617',textAlign:'center' }}>Reset </Text>
      </View>
      <View style={{borderColor:'#E5E4E2',borderWidth:0.5,marginTop:20}}></View>

      <View style={{ marginTop: 30 }}>
        <Text style={{fontSize:18,color:'black',fontWeight:'700'}}>Enter New Password</Text>
        <View style={{borderRadius:10,padding:5,backgroundColor:'#E5E4E2',marginTop:10}}>
        <TextInput placeholder="Enter New Password"></TextInput>
        </View>

      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{fontSize:18,color:'black',fontWeight:'700'}}>Confirm Password</Text>
        <View style={{borderRadius:10,padding:5,backgroundColor:'#E5E4E2',marginTop:10}}>
        <TextInput placeholder="Confirm Password"></TextInput>
        </View>

      </View>


      <TouchableOpacity>
      <View style={{ alignItems: 'center', marginTop: 60, borderRadius: 10, borderWidth: 1, padding: 20, backgroundColor: '#0164FF', borderColor: '#1589FF' }}>
        <Text style={{ color: '#BFF4FF', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '800' }}>Submit</Text>
      </View>
      </TouchableOpacity>

      




    </View>



    </ScrollView>

  </>);


}


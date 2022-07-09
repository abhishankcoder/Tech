import React, { Component, useRef, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";



import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';



export default function Otp() {


  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");


  return (<>
  <ScrollView>

   

    <View style={{marginHorizontal:20,marginTop:80}}>
      <View style={{marginTop:80}}>
      <Text style={{ fontSize: 36, fontFamily: 'Poppins-Regular', fontWeight: 'bold', color: '#1D1617',textAlign:'center' }}>Enter OTP  </Text>
      </View>
      <View style={{borderColor:'#E5E4E2',borderWidth:0.5,marginTop:20}}></View>

     

      <View style={styles.TopView}>
        <View style={styles.TextInputView}>
          <TextInput
            ref={pin1Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChange={(pin1) => {
              setPin1(pin1);
              if (pin1 != "") {
                pin2Ref.current.focus();
              }

            }}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin2Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChange={(pin2) => {
              setPin2(pin2);
              if (pin2 != "") {
                pin3Ref.current.focus();
              }
            }}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin3Ref}

            keyboardType={'number-pad'}
            maxLength={1}
            onChange={(pin3) => {
              setPin3(pin3);
              if (pin3 != "") {
                pin4Ref.current.focus();
              }
            }}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin4Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChange={(pin4) => {
              setPin4(pin4);
            }}
            style={styles.TextInputText}
          />

        </View>

      </View>

 

     
     

     

      <TouchableOpacity>
      <View style={{ alignItems: 'center', marginTop: 80, borderRadius: 10, borderWidth: 1, padding: 20, backgroundColor: '#0164FF', borderColor: '#1589FF' }}>
        <Text style={{ color: '#BFF4FF', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '800' }}>Submit</Text>
      </View>
      </TouchableOpacity>

      



    </View>



    </ScrollView>

  </>);


}
const styles = StyleSheet.create({
  // borderStyleBase: {
  //   width: 30,
  //   height: 45
  // },

  // borderStyleHighLighted: {
  //   borderColor: "#03DAC6",
  // },

  // underlineStyleBase: {
  //   width: 30,
  //   height: 45,
  //   borderWidth: 0,
  //   borderBottomWidth: 1,
  // },

  // underlineStyleHighLighted: {
  //   borderColor: "#03DAC6",
  // },

  TextInputView: {
    borderRadius:7,
    width: 41,
    justifyContent: 'center',
    alignItems: 'center',
    height:41,
    //backgroundColor:'#F1F6F7'
    backgroundColor:'#E5E4E2',
    margin:10


  },
  TextInputText: {
    fontSize: 18,
    color:'#A9A9A9'
  },
  TopView:{
    flexDirection:'row',
    marginTop:30,
    justifyContent:'center'
  }

});

/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Switch,
    StyleSheet
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome5';
import Phone from 'react-native-vector-icons/FontAwesome';
import Mphone from 'react-native-vector-icons/Ionicons';
import Notes from 'react-native-vector-icons/Ionicons';
import RadioButtonRN from 'radio-buttons-react-native';







const Lost = ({ visible, closeCallback, shareOptionCallback }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const data = [
        {
            label: 'Invalid Number'
        },
        {
            label: 'Intrested'
        },
        {
            label: 'Schedule Later'
        },
        {
            label: 'Not Intrested'
        },
        {
            label: 'Sale Done'
        }
    ];
    return (
        <Modal
            isVisible={visible}
            statusBarTranslucent
            transparent
            onBackdropPress={closeCallback}
            onBackButtonPress={closeCallback}
            style={{ margin: 0, justifyContent: 'flex-end' }}>
            <KeyboardAvoidingView
                enabled
                behavior={Platform.OS === 'android' ? undefined : 'position'}
                keyboardShouldPersistTaps="handled">
                <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
                    <View
                        style={{
                            height: 'auto',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: "#fff"
                        }}>

                        <View
                            style={{
                                height: 700, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>

                            <View style={{ alignItems: 'center', top: 20 }}>
                                <Icon name="closecircle" size={50} color={'lightgrey'} />
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                                <User name='user-nurse' size={30} style={{ marginLeft: 10 }} />
                                <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>Shubham</Text>
                                <Phone name='phone-square' size={30} color={"skyblue"} style={{ marginLeft: 80 }} />
                                <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>7825465865</Text>

                            </View>
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Mphone name='mic-circle-sharp' color={'darkorange'} size={40} />
                                    <Notes name='list-circle-outline' size={40} />
                                </View>
                            </View>

                            <TextInput multiline={true} numberOfLines={4} ></TextInput>

                            <View style={{ borderWidth: 1, borderColor: 'red' }}></View>

                            <View style={{ marginTop: 20 }}>
                                <RadioButtonRN

                                    data={data}
                                    box={false}
                                    activeColor={'red'}
                                    selectedBtn={(e) => console.log(e)}
                                />
                            </View>
                            <Text style={{ color: 'skyblue', fontWeight: "500", fontSize: 14, top: 30, left: 10 }}>MESSAGE AFTER CALL COMPLETE</Text>
                            <View>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "red" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <Text style={{ fontWeight: "400", fontSize: 14, color: 'grey', top: 10, left: 10 }}>Outgoing Message</Text>
                            <TextInput placeholder='Thanks for FeedBack' placeholderTextColor={'skyblue'} style={{ marginTop: 10, left: 10 }}></TextInput>
                            <View style={{ borderWidth: 0.5, borderColor: 'grey' }}></View>


                            <View style={{ flexDirection: 'row', marginTop: 20, left: 10 }}>
                                <TouchableOpacity>
                                    <View style={{ alignItems: 'center', borderRadius: 10, padding: 20, backgroundColor: '#2AAA8A', marginHorizontal: 2 }}>
                                        <Text style={{ color: 'white', fontSize: 12, fontFamily: 'Poppins-Regular', fontWeight: '800' }}>Start Calling</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ alignItems: 'center', borderRadius: 10, padding: 20, backgroundColor: '#2AAA8A', marginHorizontal: 5 }}>
                                        <Text style={{ color: 'white', fontSize: 12, fontFamily: 'Poppins-Regular', fontWeight: '800' }}>Save & Call Next</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={{ alignItems: 'center', borderRadius: 10, padding: 20, backgroundColor: '#2AAA8A' }}>
                                        <Text style={{ color: 'white', fontSize: 12, fontFamily: 'Poppins-Regular', fontWeight: '800' }}>Save & Pause</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ bottom: 200 }}></View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Lost;

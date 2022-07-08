
import { Linking, SafeAreaView, StyleSheet, Text, View, Button, Alert, ToastAndroid } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableHighlightExample from './src/components/TouchableHighlightExample'
import AlertComponent from './src/components/AlertComponent'


const App = () => {

    //JSX语法
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.layer}>
                <Text>文本1</Text>
                <Text>文本1</Text>
                <Text>文本1</Text>
                <Text>文本1</Text>
                <Text>文本1</Text>
                <Text>文本1</Text>
            </View>
            <View>
                <Text>Icons</Text>
                <Icon name="home" size={30} color="white" />
                <Icon name="home" size={30} color="white" />

            </View>
            <View>
                <Text style={styles.button} onPress={() => {AlertComponent()}}>Alert</Text>

            </View>
            <View>

                <Button style={styles.button} title="跳转到外部页面" onPress={() => {
                    Linking.openURL("https://leo94666.github.io/")
                }} />

                <Button title="跳转到Settings" onPress={() => {
                    Linking.openSettings()
                }} />

                <Text style={styles.button} onPress={() => {
                    Linking.openURL("https://leo94666.github.io/")
                }}>跳转到外部页面</Text>

                <Text style={styles.button} onPress={() => {
                    Linking.openSettings()
                }}>跳转到Settings</Text>

            </View>



            <TouchableHighlightExample>
            </TouchableHighlightExample>


        </SafeAreaView>
    )
}





export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        color: "white",
    },
    layer: {
        display: "flex",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        //color: "red",
        margin: 5,
        backgroundColor: "yellow",
        height: 50,
        width: 200,
        textAlign: "center",
        lineHeight: 50,
        borderRadius: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        color: "green",
    }
})
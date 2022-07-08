import { StyleSheet, Alert } from 'react-native'
import React from 'react'



const AlertComponent = () => {
    return (
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        )
  )
}

export default AlertComponent

const styles = StyleSheet.create({})    
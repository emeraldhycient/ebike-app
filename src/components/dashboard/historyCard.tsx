import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


const HistoryCard = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", width: "70%" }}>
                <Image source={require("../../../assets/icons/box2.png")} style={styles.icon} />
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.title}>SCP9374826473</Text>
                    <Text style={styles.subtitlee}>In progreess</Text>
                </View>
            </View>
            <MaterialIcons name='keyboard-arrow-right' color={"#1E3354"} size={20} />
        </View>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 19
    },
    icon: {
        width: 56,
        height: 56,
    },
    title: {
        color: "#1E3354",
        fontSize: 14,
        // textAlign: "center",
        fontWeight: "500",
        letterSpacing: 0.28,
        marginBottom:3
    },
    subtitlee: {
        color: "#7A809D",
        // textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 24,
        letterSpacing: 0.5
    }
})
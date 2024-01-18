import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Header from '../../components/dashboard/header'
import { Image } from 'react-native'
import { FlatList } from 'react-native'
import Colors from '../../theme/colors'
import { Button } from '../../components/common/button'
import AntDesign from "react-native-vector-icons/AntDesign"
import HistoryCard from '../../components/dashboard/historyCard'


function Orders({ navigation }: any) {

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header
                style={{ paddingHorizontal: 20 }}
                LeftComponent={<Image source={require("../../../assets/images/profile.png")} style={{ height: 40, width: 40, borderRadius: 100 }} />}
                RightComponent={<Image source={require("../../../assets/icons/bell.png")} style={{ height: 40, width: 40 }} />}
            />
            <View style={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 40 }}>
                <Text style={styles.title}>Hello good Morning!</Text>
            </View>
            <ImageBackground style={styles.box} source={require("../../../assets/bg/cardbg.png")} resizeMode='stretch'>
                <Text style={[styles.subtitle, { marginBottom: 8 }]}>Track Your Package</Text>
                <Text style={styles.orderConatinerLabel}>
                    Enter the receipt number that has been given by the officer
                </Text>
                <View style={{ width: "86%", gap: 20, justifyContent: "flex-end", alignItems: "flex-start", marginTop: 30 }}>
                    <Button title="" style={[styles.buttonContainer, { backgroundColor: "transparent", borderColor: "#031420", borderWidth: 1 }]} onPress={() => { }}>
                        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", gap: 20, paddingHorizontal: 30 }}>
                            <Text style={[styles.buttonText, { color: "#031420" }]}>Enter the receipt number</Text>
                        </View>
                    </Button>
                    <Button title="" style={styles.buttonContainer} onPress={() => navigation.navigate("Track")}>
                        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 20, paddingHorizontal: 30 }}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={styles.buttonText}>Track Now</Text>
                            </View>
                            <AntDesign name={"arrowright"} color={"white"} size={16} />
                        </View>
                    </Button>
                </View>
            </ImageBackground>

            <View style={{ marginTop: 40, paddingHorizontal: 20, }}>
                <Text style={styles.subtitle}>Tracking history</Text>
                <FlatList
                    data={[{ id: "1" }, { id: "2" }, { id: "3" }]}
                    renderItem={({ item }) => <HistoryCard />}
                    style={{ marginTop: 16 }}
                    keyExtractor={item => item?.id}
                />
            </View>
        </View>
    )
}

export default Orders


const styles = StyleSheet.create({

    box: {
        height: 320,
        width: "100%",
        marginHorizontal: "5%",
        padding: 24,
        borderRadius: 32,
    },
    title: {
        color: Colors.black,
        fontSize: 18,
        textAlign: "left",
        fontWeight: "700",
    },
    subtitle: {
        color: " #031725",
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 24,
        letterSpacing: 0.5
    },

    icon: {
        width: 190,
        height: 190,
    },
    orderBtnContainer: {
        width: "100%",
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30
    },
    orderConatinerLabel: {
        color: "#96823D",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 20,
        width: 251
    },
    buttonContainer: { borderRadius: 52, paddingHorizontal: 16, width: "100%" },
    buttonText: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 24,
        letterSpacing: 0.5,
    },
    arrow: {
        width: 24,
        height: 24,
    },
    text2: {
        color: "#424242",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 18,
        letterSpacing: 0.5
    }
})
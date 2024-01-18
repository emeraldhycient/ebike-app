import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../../components/dashboard/header'
import { Image } from 'react-native'
import { FlatList } from 'react-native'
import Colors from '../../theme/colors'
import { Button } from '../../components/common/button'
import AntDesign from "react-native-vector-icons/AntDesign"


function Home({navigation}:any) {
    return (
        <View style={{backgroundColor:"white"}}>
            <Header
                style={{ paddingHorizontal: 20 }}
                LeftComponent={<Image source={require("../../../assets/images/profile.png")} style={{ height: 40, width: 40, borderRadius: 100 }} />}
                RightComponent={<Image source={require("../../../assets/icons/bell.png")} style={{ height: 40, width: 40 }} />}
            />
            <View style={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 40 }}>
                <Text style={styles.title}>Hello good Morning!</Text>
            </View>
            <FlatList

                data={[{ id: "1" }, { id: "2" }, { id: "3" }]}
                horizontal
                renderItem={({ item }) => <View style={styles.box}>
                    <Image source={require("../../../assets/images/bike.png")} style={styles.icon} />
                </View>}
                style={{ paddingHorizontal: 10 }}
                keyExtractor={item => item?.id}
            />
            <View style={[styles.orderBtnContainer, {
                height: 109,
                backgroundColor: Colors.yellowAccent,
            }]}>
                <View style={{ width: "45%", paddingHorizontal: 32 }}>
                    <Text style={styles.orderConatinerLabel}>Gotten your
                        E-Bike yet?
                    </Text>
                </View>
                <View style={{ width: "65%", paddingHorizontal: 32, flexDirection: "row", justifyContent: "flex-end" }}>
                    <Button title="" style={styles.buttonContainer} onPress={() => navigation.navigate("Orders")}>
                        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20 }}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={styles.buttonText}>Your Orders</Text>
                            </View>
                            <AntDesign name={"arrowright"} color={"white"} size={16} />
                        </View>
                    </Button>
                </View>
            </View>
            <View style={[styles.orderBtnContainer]}>
                <View style={{ width: "45%" }}>
                    <Image source={require("../../../assets/icons/bikee.png")} style={styles.icon} />
                </View>
                <View style={{ width: "55%", paddingHorizontal: 20 }}>
                    <Text style={styles.text2}>You too can join our Elite squad of E-bikers</Text>
                </View>
            </View>

        </View>
    )
}

export default Home


const styles = StyleSheet.create({

    box: {
        height: 265,
        width: 255,
        backgroundColor: Colors.gray,
        marginHorizontal: 10,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: Colors.black,
        fontSize: 18,
        textAlign: "left",
        fontWeight: "700",
    },
    subtitle: {
        color: Colors.yellow,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
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
        lineHeight: 18,
        letterSpacing: 0.5,
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
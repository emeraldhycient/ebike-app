import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import AuthLayout from '../../components/auth/authLayout'
import Colors from '../../theme/colors';
import { Button } from '../../components/common/button';
import useAuthenticationState from '../../store/store';

const Login = () => {

    const setIsAuthenticated = useAuthenticationState((state: any) => state.setIsAuthenticated);


    return (
        <AuthLayout>
            <View style={styles.parent}>
                <View style={styles.upper}>
                    <Image source={require("../../../assets/icons/box.png")} style={styles.box} />
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Welcome to E-Bikes</Text>
                    <Text style={styles.subtitle}>Buying Electric bikes just got a lot easier,</Text>
                    <Text style={styles.subtitle}>Try us today.</Text>
                    <View style={{ flexDirection: "row", marginVertical: 20, gap: 12, marginHorizontal: "auto" }}>
                        {
                            [0, 1, 2].map((item, i) =>
                                <View key={i} style={[styles.dot, { backgroundColor: i === 0 ? Colors.black : "white" }]}></View>
                            )
                        }
                    </View>
                    <Button title='' style={styles.buttonContainer} onPress={() => setIsAuthenticated(true)}>
                        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <View style={{ height: 32, width: 32, backgroundColor: "white", borderRadius: 100, alignItems: "center", justifyContent: "center" }}>
                                <Image source={require("../../../assets/icons/google.png")} style={styles.icon} />
                            </View>
                            <View style={{ width: "90%", flexDirection: "row", justifyContent: "center" }}>
                                <Text style={styles.buttonText}>Login with Google</Text>
                            </View>
                        </View>
                    </Button>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", justifyContent: "center", gap: 5 }}>
                            <Text style={styles.sin}>Don't have any account?</Text>
                            <Text style={styles.sinup}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </AuthLayout>
    )
}

export default Login

const styles = StyleSheet.create({
    parent: {
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    upper: {
        height: "55%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    lower: {
        height: "45%",
        width: "100%",
        paddingVertical: 30,
        alignItems: "center"
    },
    box: {
        height: 300,
        width: 300
    },
    title: {
        color: Colors.black,
        fontSize: 24,
        textAlign: "center",
        fontWeight: "600",
        lineHeight: 32,
        letterSpacing: 0.48
    },
    subtitle: {
        color: Colors.yellow,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 24,
        letterSpacing: 0.5
    },
    dot: {
        height: 6,
        width: 6,
        backgroundColor: "white",
        borderRadius: 100
    },
    icon: {
        width: 24,
        height: 24,
    },
    buttonContainer: { borderRadius: 52, paddingHorizontal: 16, marginVertical: 48, width: 330 },
    buttonText: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 24,
        letterSpacing: 0.5,
    },
    sin: {
        color: Colors.yellow,
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 25,
        letterSpacing: 0.5
    },
    sinup: {
        color: "#031522",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 25,
        letterSpacing: 0.5
    }
})
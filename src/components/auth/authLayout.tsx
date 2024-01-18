import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <ImageBackground source={require("../../../assets/bg/login.png")} style={styles.cover}>
            {children}
        </ImageBackground>
    )
}

export default AuthLayout

const styles = StyleSheet.create({
    cover: {
        flex: 1,

    }
})
import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface CustomAppBarProps {
    title?: string;
    LeftComponent?: ReactNode;
    RightComponent?: ReactNode;
    backgroundColor?: string;
    style?: object;
}

const Header: React.FC<CustomAppBarProps> = ({
    title,
    LeftComponent,
    RightComponent,
    backgroundColor = '#FFF',
    style,
}) => {
    const top = Platform.OS === "ios" ? 0 : 30

    return (
        <SafeAreaView>
            <View style={[styles.headerContainer, { backgroundColor, marginTop: top }, style]}>
                <View style={styles.sideComponent}>
                    {LeftComponent}
                </View>
                <Text style={styles.title}>{title || ''}</Text>
                <View style={styles.sideComponent}>
                    {RightComponent}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    sideComponent: {
        width: 40, // Adjust the width as needed
        alignItems: 'center',
    },
});

export default Header;

import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Colors from '../../theme/colors';
import { Button } from '../../components/common/button';
import RBSheet from "react-native-raw-bottom-sheet";
import { FlatList } from 'react-native';
import HistoryCard from '../../components/dashboard/historyCard';


const MapScreen = ({ navigation }: any) => {
    const refRBSheet = useRef<any>();

    useEffect(() => {
        refRBSheet.current.open()
    }, [])


    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={{
                latitude: 6.6018,
                longitude: 3.3515,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            />
            <View style={styles.header}>
                <View style={{ width: "86%", gap: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ width: "10%" }}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <MaterialIcons name='keyboard-arrow-left' color={"#3B4A66"} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "90%", paddingLeft: 80 }}>
                        <Text style={styles.title}>Tracking Details</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.orderBtnContainer, {
                        backgroundColor: Colors.yellowAccent,
                        marginTop: 40
                    }]}>
                        <Button title="" style={[styles.buttonContainer, { backgroundColor: "transparent", borderColor: "#051F32", borderWidth: 1 }]} onPress={() => refRBSheet.current.open()}>
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20, paddingHorizontal: 30 }}>
                                <Text style={[styles.buttonText, { color: "#051F32" }]}>SCP6653728497</Text>
                            </View>
                        </Button>
                    </View>
                </View>
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={300}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.4)"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View style={{ marginTop: 40, paddingHorizontal: 20, }}>
                    <Text style={styles.subtitle}>Tracking history</Text>
                    <FlatList
                        data={[{ id: "1" }, { id: "2" }, { id: "3" }]}
                        renderItem={({ item }) => <HistoryCard />}
                        style={{ marginTop: 16 }}
                        keyExtractor={item => item?.id}
                    />
                </View>
            </RBSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    subtitle: {
        color: " #031725",
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 24,
        letterSpacing: 0.5
    },
    header: {
        position: 'absolute', // This positions the search box within the container
        top: Platform.select({ ios: 45, android: 40 }), // Adjust this value to correctly place it at the top for iOS and Android, considering the status bar
        // flexDirection: 'row',
        // backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    title: {
        color: " #092C4C",
        fontSize: 18,
        fontWeight: "600",
        letterSpacing: 0.36
    },
    orderBtnContainer: {
        width: "100%",
        marginTop: 20,
        height: 88,
        flexDirection: "row",
        borderRadius: 46,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30
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
});



export default MapScreen
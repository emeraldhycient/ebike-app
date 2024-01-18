import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Home from '../screens/dashboard/home';
import { Image } from 'react-native';
const Tab = createMaterialBottomTabNavigator();


function BottomTabRoute() {
    return (
        <Tab.Navigator
            activeColor={"#F1F6FB"}
            inactiveColor={"#F1F6FB"}
            barStyle={{ backgroundColor: "#F1F6FB" }}

        >
            <Tab.Screen name="home" component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, focused }: any) => (
                        focused ?
                            <Image source={require("../../assets/icons/Home.png")} style={{ height: 25, width: 25 }} />
                            :
                            <Image source={require("../../assets/icons/Home.png")} style={{ height: 20, width: 20 }} />
                    ),
                } as never}

            />

            <Tab.Screen name="cart" component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, focused }: any) => (
                        focused ?
                            <Image source={require("../../assets/icons/Cart.png")} style={{ height: 25, width: 25 }} />
                            :
                            <Image source={require("../../assets/icons/Cart.png")} style={{ height: 20, width: 20 }} />
                    ),
                } as never}
            />
            <Tab.Screen name="Cab" component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, focused }: any) => (
                        focused ?
                            <Image source={require("../../assets/icons/Markey.png")} style={{ height: 25, width: 25 }} />
                            :
                            <Image source={require("../../assets/icons/Markey.png")} style={{ height: 20, width: 20 }} />
                    ),
                } as never}

            />
            <Tab.Screen name="tab" component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, focused }: any) => (
                        focused ?
                            <Image source={require("../../assets/icons/Heart.png")} style={{ height: 25, width: 25 }} />
                            :
                            <Image source={require("../../assets/icons/Heart.png")} style={{ height: 20, width: 20 }} />
                    ),
                } as never}

            />

        </Tab.Navigator>
    );
}

export default BottomTabRoute
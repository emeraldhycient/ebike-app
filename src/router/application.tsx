import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
import BottomTabRoute from './bottomBar';
import Orders from '../screens/dashboard/order';
import MapScreen from '../screens/dashboard/track';
const Stack = createNativeStackNavigator();


const AppRoute = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen
                name="Home" component={BottomTabRoute} />
            <Stack.Screen
                name="Orders" component={Orders} />
            <Stack.Screen
                name="Track" component={MapScreen} />
        </Stack.Navigator>
    )
}

export default AppRoute
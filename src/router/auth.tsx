import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
const Stack = createNativeStackNavigator();


const AuthRoute = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen
                name="login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthRoute
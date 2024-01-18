import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoute from './src/router/auth';
import useAuthenticationState from './src/store/store';
import { useEffect, useState } from 'react';
import AppRoute from './src/router/application';

export default function App() {

  const isAuthenticated = useAuthenticationState((state) => state.authentication.isAuthenticated);

  const [islogged, setIslogged] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      setIslogged(true)
    } else {
      setIslogged(false)
    }
  }, [isAuthenticated])


  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: "none",
    },
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <PaperProvider theme={theme}>
        {
          islogged ?
            <AppRoute />
            :
            <AuthRoute />
        }
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

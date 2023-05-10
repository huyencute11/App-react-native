import { useState, useContext } from 'react';
import { Button } from '@react-native-material/core';
import Home from './src/screens/home';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import LoginScreen from './src/screens/login';
import DetailUser from './src/components/DetailUser';
import React from 'react';
import {
    RootStackParamList
} from './src/types/RootStackParamList ';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#fea014',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                >
                    <Stack.Screen name="Login"
                        component={LoginScreen}
                        //no show header
                        // options={{ headerShown: false }}
                        options={{ title: 'Login' }}
                    />
                    <Stack.Screen name="Home"
                        component={Home}
                        // options={{
                        //     title: 'User Ranking',
                        //     headerLeft: () => null,
                        //     headerRight: () => (
                        //         <Icon name="logout" size={30} color="white"
                        //             onPress={() => alert('Logout')}
                        //         />
                        //     )
                        // }}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="DetailUser"
                        component={DetailUser}

                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
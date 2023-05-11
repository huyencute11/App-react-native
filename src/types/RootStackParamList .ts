
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import User from '../model/User';

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    DetailUser: { user: User };
};
// Define the navigation props types for each screen
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type DetailUserScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DetailUser'>;

// Define the route props types for each screen
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type DetailUserScreenRouteProp = RouteProp<RootStackParamList, 'DetailUser'>;


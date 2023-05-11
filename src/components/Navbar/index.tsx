import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAuth, setUserLogin } from '../../redux/store/auth';
import { setFilterByAct, setFilterByDate } from '../../redux/store/filter';
import { RootState } from '../../redux/store';
import * as FILTER from '../../constant/filters';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface NavbarProps {
    navigation: any;
    isAuth: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ navigation, isAuth }) => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.filter);

    const handleLogout = () => {
        dispatch(toggleAuth(false));
        dispatch(setUserLogin(undefined))
        dispatch(setFilterByAct(FILTER.FILTER_BY_POST))
        dispatch(setFilterByDate(FILTER.FILTER_BY_MONTH))
        navigation.navigate('Login')

    }
    const handleLogin = () => {
        dispatch(setFilterByAct(FILTER.FILTER_BY_POST))
        dispatch(setFilterByDate(FILTER.FILTER_BY_MONTH))
        navigation.navigate('Login')
    }
    //atomic pattern 
    //is include
    // const handleL

    console.log(2)

    return (
        // <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.text}> User Ranking </Text>
            {/* <View> */}
            {isAuth ? <Icon
                name="logout"
                size={20}
                color={'#fff'}
                style={{ position: 'absolute', right: 10 }}
                onPress={handleLogout}
            /> :
                <Icon
                    name="login-variant"
                    size={20}
                    color={'#fff'}
                    style={{ position: 'absolute', right: 10 }}
                    onPress={handleLogin}
                />
            }


        </View>
        // </SafeAreaView>

    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fea014',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        position: 'relative',
        top: 0,
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    },
    logout_Text: {
        fontSize: 12,
    }
});

export default Navbar;
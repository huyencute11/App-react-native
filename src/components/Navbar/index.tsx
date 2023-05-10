import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface NavbarProps {
    navigation: any;
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
    return (
        // <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.text}> User Ranking </Text>
            <Icon
                name="logout"
                size={20}
                color={'#fff'}
                style={{ position: 'absolute', right: 10 }}
                onPress={() => navigation.navigate('Login')}

            />
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
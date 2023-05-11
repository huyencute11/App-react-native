import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import User from '../../../model/User';
interface DetailUserProps {
    user: User;
    navigation: any;
    idUserCurrent?: number;
}

const UserItem: React.FC<DetailUserProps> = ({ user, navigation, idUserCurrent }) => {
    const handleOnClick = () => {
        navigation.navigate('DetailUser', { user });
    };

    return (
        <TouchableOpacity style={[styles.wrapper, user?.user_id === idUserCurrent && styles.wrapperUserCurrent]} onPress={handleOnClick} >
            <View style={styles.number}>
                <Text style={styles.numberText}>{user.rank}</Text>
            </View>
            <View style={styles.imageWrapper}>
                <Image style={styles.img} source={{ uri: user.img }} />
            </View>
            <View style={styles.description}>
                <Text style={styles.name}>{user.username}</Text>
                <Text style={styles.numberPost}>{user.score} score</Text>
            </View>
            <View style={styles.icon}>
                <Icon name="chevron-right" />
            </View>
        </TouchableOpacity>
    );
};
/**
 * .wrapper.user--active {
    background-color: var(--primary);
}
 */
const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        height: 60,
        alignItems: 'center',
        // padding: 10

    },
    wrapperUserCurrent: {
        backgroundColor: '#fea014',
    },
    number: {
        color: '#6b6b6b',
        textAlign: 'center',
        // width: '10%',
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 15,
        paddingRight: 15,

    },
    numberText: {
        fontSize: 16,
        fontWeight: '500',
    },
    imageWrapper: {
        overflow: 'hidden',
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        // objectPosition: 'center',
        borderRadius: 100,
        padding: 2,
    },
    description: {
        color: '#6b6b6b',
        display: 'flex',
        flex: 12,
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontWeight: '500',
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 10

        // alignItems: 'start',
    },
    name: {
        lineHeight: 22,
        textAlign: 'left',
        color: '#6b6b6b',
        fontWeight: '700',
        fontSize: 14,
        paddingRight: 12,
        paddingBottom: 8

    },
    numberPost: {
        fontSize: 12,
        lineHeight: 12,
        textAlign: 'left',
        color: '#6b6b6b',
        paddingRight: 12,
        paddingBottom: 12,
    },
    icon: {
        justifyContent: 'center',
        fontSize: 12,
        color: '#6b6b6b',
        width: '10%',
        display: 'flex',
        alignItems: 'center',
    }

})

export default UserItem;

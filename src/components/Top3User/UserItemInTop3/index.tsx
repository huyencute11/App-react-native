import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { setUserSelectedDetail } from '../../../redux/store/userDetail';
import User from '../../../model/User';

type UserItemTop3Props = {
    userInTop3: User;
    navigation: any;
}

const UserItemIntop3: React.FC<UserItemTop3Props> = ({ userInTop3, navigation }) => {
    const user = {
        ...userInTop3,

    }
    const handleOnPress = () => {
        navigation.navigate('DetailUser', { user });
    };

    return (
        <TouchableOpacity style={[styles.item_ranking]} onPress={handleOnPress}>
            <View style={styles.item_ranking__image}>
                <View style={styles.item_ranking__icon}>
                    {/* <FontAwesome name="crown" style={[styles.icon, userInTop3?.rank === 3 && styles.no_3]} /> */}
                    <IconButton icon={props => <Icon name="crown" {...props}
                        style={[styles.icon, userInTop3?.rank === 3 && styles.no_3, userInTop3?.rank === 1 && styles.icon_no1]} />} />
                    <Text style={styles.number_no}>No {userInTop3?.rank}</Text>
                </View>
                <Image source={{ uri: userInTop3?.img }} style={[styles.image, userInTop3?.rank === 1 && styles.image_No1]} />
                <View></View>
            </View>
            <View style={styles.item_ranking__des}>
                <Text style={styles.item_ranking__name}>{userInTop3?.username}</Text>
                <View style={styles.post_wrapper}>
                    <Text style={styles.item_ranking__postN}>{userInTop3?.score}</Text>
                    <Text style={styles.item_ranking__post}>score</Text>
                </View>
            </View>
        </TouchableOpacity>

    )

}
const styles = StyleSheet.create({
    item_ranking: {
        width: '33.3333%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    no_1: {
        color: 'rgb(241, 216, 25)',
    },
    item_ranking__icon: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    icon: {
        color: 'rgb(145, 151, 151)',
    },
    no_3: {
        // color: 'rgb(253, 177, 78)',
    },
    icon_no1: {
        color: '#fea014'
    },
    number_no: {
        color: '#000',
    },
    item_ranking__image: {
        width: '40%',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    image: {
        width: '120%',
        aspectRatio: 1,
        borderRadius: 100,
    },
    image_No1: {
        width: '150%',
    },
    item_ranking__des: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 15,
    },
    item_ranking__name: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    post_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item_ranking__postN: {
        marginRight: 5,
        color: '#000',
    },
    item_ranking__post: {
        color: '#555',
    },
});

export default UserItemIntop3
import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserItem from './UserItem';
import User from '../../interface/User';

type ListUserProps = {
    listData: User[];
    navigation: any;
    userCurrent: User;
}

const ListUser: React.FC<ListUserProps> = ({ listData, navigation, userCurrent }) => {
    return (
        <View style={styles.wrapper}>
            {listData?.map((user: User) => {
                return <UserItem user={user} key={user.user_id} navigation={navigation} idUserCurrent={userCurrent.user_id} />;
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgb(246 241 241)',
        paddingBottom: 20
    }
})

export default ListUser;
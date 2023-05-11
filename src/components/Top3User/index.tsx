import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import User from '../../model/User';
import UserItemIntop3 from './UserItemInTop3';
// import { FaCrown } from 'react-icons/fa';

type Top3UsersProps = {
    data: User[];
    navigation: any;
}

const Top3Users: React.FC<Top3UsersProps> = ({ data, navigation }) => {
    // console
    // change position
    if (data.length === 4 || data.length === 3) {
        const firstUser = data.shift();
        // Calculate the middle index
        const middleIndex = Math.floor(data.length / 2);
        // Insert the first user at the middle index
        data.splice(middleIndex, 0, firstUser as User);
    } else if (data.length === 5) {
        const firstUser = data.shift();
        // Insert the first user at index 1
        data.splice(1, 0, firstUser as User);
    }

    return (
        <SafeAreaView>
            <View style={styles.top3UserWrapper} >
                <View style={[styles.top3UserContainer, data.length > 3 && styles.top3UserContainerModifier]}>
                    {data.map((user, index) => (
                        <UserItemIntop3 key={index} userInTop3={user} navigation={navigation} />
                    ))}
                </View>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    top3UserWrapper: {
        // display: 'block',
        // width: '100%'

    },
    top3UserContainer: {
        // width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        height: 200,
        justifyContent: 'center',
    },
    top3UserContainerModifier: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: '180',
        marginTop: 10,
    }
})
export default Top3Users
import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import TopUser from '../TopUser'
import User from '../../model/User';
import ListUser from '../ListUser'

type RankingProps = {
    data: User[];
    rankCurrent: number | undefined;
    userInList: User[];
    userInTop3: User[];
    navigation: any;
    userCurrent?: User;
}
//
const Ranking = ({ userInList, userInTop3, navigation, userCurrent, rankCurrent }: RankingProps) => {
    console.log(3)
    const showUserDetail = false
    return (
        <SafeAreaView>
            <View style={[styles.wrapper, showUserDetail ? styles.hideRanking : styles.displayRanking]}>
                <TopUser data={userInTop3} navigation={navigation} userCurrent={userCurrent} rankCurrent={rankCurrent} />
                <ListUser listData={userInList} navigation={navigation} userCurrent={userCurrent} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    hideRanking: {
        display: 'none'
    },
    displayRanking: {
        display: 'flex'
    }
})

export default Ranking
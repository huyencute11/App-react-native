import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import * as filter from '../../constant/filters';
import { ScrollView, View } from 'react-native';
import User from '../../model/User';
import { useNavigation } from '@react-navigation/native';
import ListTerm from '../../components/ListTerm';
import Ranking from '../../components/Ranking';
import { wantToGoInMonth, userPostInYear, userPostInMonth, wantToGoInYear } from '../../data/users';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/RootStackParamList ';
import Navbar from '../../components/Navbar';
import MyRanking from '../../components/MyRanking';
export interface DetailUserProps {
    route: RouteProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<DetailUserProps> = () => {
    // const initRank = 
    // alert(route.params?.user)
    const navigation = useNavigation();
    const filterAction = useSelector((state: RootState) => state.filter);
    const { isAuth, userLogin } = useSelector((state: RootState) => state.auth);
    const [data, setData] = useState<User[]>(userPostInMonth);
    const [rankCurrent, setRankCurrent] = useState<number | undefined>(userLogin?.rank);

    // console.log('aaaaaaaa', userLogin)

    const setPriorityAndSetRank = (id: number, users: User[]): User[] => {
        const loggedInUserIndex = users.findIndex(user => user?.user_id === id);
        const sameRankUsers = users.filter(user => user?.score === users[loggedInUserIndex]?.score);
        // find use by id and find index
        const indexUserInSameRankUsers = sameRankUsers.findIndex(user => user?.user_id === id);
        if (sameRankUsers.length > 1) {
            const temp = sameRankUsers[0];
            sameRankUsers[0] = sameRankUsers[indexUserInSameRankUsers];
            sameRankUsers[indexUserInSameRankUsers] = temp;
            users = [...users.filter(user =>
                user?.score > users[loggedInUserIndex]?.score
            ), ...sameRankUsers, ...users.filter(user => user?.score < users[loggedInUserIndex]?.score)
            ]
        }

        // Find the index of the current user and set their rank and index
        // const indexUserCurrent = users.findIndex(user => user?.user_id === id);
        // setIndexUser(indexUserCurrent + 1)
        return users;
    }
    const usersInStore = userLogin === undefined ? data : setPriorityAndSetRank(userLogin?.user_id, data);
    const get3UserInTop3 = (users: User[]): User[] => {
        const top3User = users.slice(0, 3);
        return top3User;
    }
    //get user to render in list
    const getUserInList = (users: User[]): User[] => {
        const listUser = users.slice(3);
        return listUser;
    }

    useEffect(() => {
        if (filterAction.filterbyAct === filter.FILTER_BY_POST && filterAction.filterbyDate === filter.FILTER_BY_MONTH) {
            setData(userPostInMonth)
        } if (filterAction.filterbyAct === filter.FILTER_BY_POST && filterAction.filterbyDate === filter.FILTER_BY_YEAR) {
            setData(userPostInYear)
        }
        if (filterAction.filterbyAct === filter.FILTER_BY_WANT_TO_GO && filterAction.filterbyDate === filter.FILTER_BY_MONTH) {
            setData(wantToGoInMonth)
        } if (filterAction.filterbyAct === filter.FILTER_BY_WANT_TO_GO && filterAction.filterbyDate === filter.FILTER_BY_YEAR) {
            setData(wantToGoInYear)
        }

    }, [filterAction]);

    useEffect(() => {
        const userCurrent = usersInStore.find(user => user?.user_id === userLogin?.user_id);
        if (userLogin) {
            setRankCurrent(userCurrent?.rank);
            console.log('userLogin', userLogin)
        }
    }, [data, isAuth])
    // console.log(isAuth)

    return (
        <View>
            <Navbar navigation={navigation} isAuth={isAuth} />
            <ScrollView>
                <Ranking data={usersInStore}
                    userInList={getUserInList(usersInStore)}
                    userInTop3={get3UserInTop3(usersInStore)}
                    userCurrent={userLogin}
                    navigation={navigation}
                    rankCurrent={rankCurrent}
                />
                {/* <MyRanking currentUser={userCurrent.user} indexUser={indexUser} numberUserTopRank={3} showUserDetail={false} nummberUser={users.length} /> */}
                {<ListTerm />}
            </ScrollView >
        </View>
    )
}

export default Home
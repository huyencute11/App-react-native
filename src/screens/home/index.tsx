import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import User from '../../interface/User';
import { useNavigation } from '@react-navigation/native';
import ListTerm from '../../components/ListTerm';
import Ranking from '../../components/Ranking';
import { users } from '../../data/user';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/RootStackParamList ';
import Navbar from '../../components/Navbar';
import MyRanking from '../../components/MyRanking';


export interface DetailUserProps {
    route: RouteProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<DetailUserProps> = ({ route }) => {
    const userCurrent = route.params;

    // const [userInTop3, setUserInTop3] = useState<User[]>([]);
    // const [userInList, setUserInList] = useState<User[]>([]);
    // const [indexUser, setIndexUser] = useState<number>(0);
    // const [data, setData] = useState<User[]>([]);
    // const [allTop1, setAllTop1] = useState<boolean>(false);
    // const [numberUserInTop, setNumberUserInTop] = useState<number>(0);

    //handle logic
    const setPriorityAndSetRank = (id: number, users: User[]): User[] => {
        // Find index of logged in user in array
        const loggedInUserIndex = users.findIndex(user => user?.user_id === id);
        // Find all users with the same score as logged in user
        const sameRankUsers = users.filter(user => user?.score === users[loggedInUserIndex]?.score);
        // If there are multiple users with the same score, swap the logged in user with the first user in the array
        const indexUserInSameRankUsers = sameRankUsers.findIndex(user => user?.user_id === id);
        if (sameRankUsers.length > 1) {
            const temp = sameRankUsers[0];
            sameRankUsers[0] = sameRankUsers[indexUserInSameRankUsers];
            sameRankUsers[indexUserInSameRankUsers] = temp;
            users = [...users.filter(user => user?.score !== users[loggedInUserIndex]?.score), ...sameRankUsers]
        }

        // Find the index of the current user and set their rank and index
        // const indexUserCurrent = users.findIndex(user => user?.user_id === id);
        // setIndexUser(indexUserCurrent + 1)
        return users;
    }

    console.log('userCurrent', userCurrent.user)
    const usersInStore = setPriorityAndSetRank(userCurrent.user.user_id, users);


    const get3UserInTop3 = (users: User[]): User[] => {
        const top3User = users.slice(0, 3);
        return top3User;
    }
    //get user to render in list
    const getUserInList = (users: User[]): User[] => {
        const listUser = users.slice(3);
        return listUser;
    }
    const navigation = useNavigation();

    return (
        // <View>
        <ScrollView>
            <Navbar navigation={navigation} />
            <Ranking data={usersInStore}
                userInList={getUserInList(usersInStore)}
                userInTop3={get3UserInTop3(usersInStore)}
                userCurrent={userCurrent.user}
                navigation={navigation} />
            {/* <MyRanking currentUser={userCurrent.user} indexUser={indexUser} numberUserTopRank={3} showUserDetail={false} nummberUser={users.length} /> */}
            {<ListTerm />}
        </ScrollView >

        // </View>
    )
}

export default Home
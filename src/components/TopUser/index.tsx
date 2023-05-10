import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Top3Users from '../Top3User';
import User from '../../interface/User';
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

type TopUsersProps = {
    data: User[];
    navigation: any;
    userCurrent: User;

};

const TopUsers: React.FC<TopUsersProps> = ({ data, navigation, userCurrent }) => {

    const lengthData = data.length;

    const FILTER_BY_MONTH_OR_YEAR = {
        YEAR: 'YEARLY',
        MONTH: 'MONTHLY',
    };
    const FILTER_BY_ACT = {
        POST: 'POST',
        WANT_TO_GO: 'WANT TO GO',
    };
    const [activeAct, setActiveAct] = useState<string>(FILTER_BY_ACT.POST);
    const [filterActiveByMonthOrYear, setFilterActiveByMonthOrYear] = useState<string>(FILTER_BY_MONTH_OR_YEAR.MONTH);
    const activePost = activeAct === FILTER_BY_ACT.POST
    const activeWantToGo = activeAct === FILTER_BY_ACT.WANT_TO_GO
    const activeMonth = filterActiveByMonthOrYear === FILTER_BY_MONTH_OR_YEAR.MONTH
    const activeYear = filterActiveByMonthOrYear === FILTER_BY_MONTH_OR_YEAR.YEAR

    return (
        <View style={styles.wrapper_topUsers}>
            <View style={styles.container_topUsers}>
                <View style={styles.direct_container}>
                    <View style={styles.wrapper_action}>
                        <View style={styles.action}>
                            <TouchableOpacity style={[styles.action_item, activePost && styles.action_item__active]} onPress={() => setActiveAct(FILTER_BY_ACT.POST)}>
                                <Text style={[styles.text, activePost && styles.text__active]}>POST</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.action_item, activeWantToGo && styles.action_item__active2]} onPress={() => setActiveAct(FILTER_BY_ACT.WANT_TO_GO)}>
                                <Text style={[styles.text, activeWantToGo && styles.text__active]}>WANT TO GO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.wrapper_action}>
                        <View style={styles.filter}>
                            <TouchableOpacity style={[styles.filter_item, activeMonth && styles.filter_active]} onPress={() => setFilterActiveByMonthOrYear(FILTER_BY_MONTH_OR_YEAR.MONTH)}>
                                <Text style={[styles.filter_text, activeMonth && styles.filter_text__active]}>MONTHLY</Text>
                                {/* {filterActiveByMonthOrYear ? (<View style={styles.pseudo}></View>) : ''} */}
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.filter_item, activeYear && styles.filter_active]} onPress={() => setFilterActiveByMonthOrYear(FILTER_BY_MONTH_OR_YEAR.YEAR)}>
                                <Text style={[styles.filter_text, activeYear && styles.filter_text__active]}>YEARLY</Text>
                                {/* {filterActiveByMonthOrYear ? (<View style={styles.pseudo}></View>) : ''} */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.ranking_top}>
                    <View style={styles.ranking_top_container}>
                        <View style={styles.ranking_top__icon}>
                            {/* <Feather name="crown" size={24} color="black" /> */}
                            <IconButton icon={props => <Icon name="crown" {...props} color="#fea014" size={24} />} />
                        </View>
                        <View style={styles.ranking_top__title}>
                            <Text style={styles.ranking_top__title__text}>USERS RANKING</Text>
                            <View style={styles.des_number}>
                                <View style={styles.rule__1}></View>
                                <Text style={styles.ranking_top__number}>Top {lengthData} Users</Text>
                                <View style={styles.rule__2}></View>
                            </View>
                        </View>
                        <View style={styles.current_ranking}>
                            <View style={styles.wrapper_icon}>
                                {/* <Feather name="crown" size={24} color="black" /> */}
                                <IconButton icon={props => <Icon name="crown" {...props} color="#ccc" size={18} />} />

                            </View>
                            <Text style={styles.your_current_ranking}>Your current ranking:</Text>
                            <Text style={styles.current_number}>{userCurrent.rank}th</Text>
                        </View>
                    </View>
                </View>
                {/* <View style={styles.top3user_wrapper}> */}
                <Top3Users data={data} navigation={navigation} userCurrent={userCurrent} />
                {/* </View> */}
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    wrapper_topUsers: {
        width: '100%',
        backgroundColor: '#feef9f',
        height: 450,
        display: 'flex',
        justifyContent: 'center',
        opacity: 1,
        alignContent: 'center',
        alignItems: 'center'
        // position: 'relative'
    },
    top3user_wrapper__modifier: {
        height: 500,
    },
    container_topUsers: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '96%',
        width: '92%',
        bottom: 0,
        margin: 'auto',
        marginTop: 8,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    'topuserAll_modifier .item_ranking': {
        height: 'unset',
    },
    direct_container: {
        // display: 'flex',
        // flexDirection: 'row'
    },
    wrapper_action: {
        margin: 7,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ccc',
    },
    text__active: {
        color: 'white'
    }
    ,

    action: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around'
    },
    action_item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: '40%',
        // width: '30%',
        // marginLeft: 10,
        // marginRight: 10,
        borderRadius: 10,
        fontSize: 16,
        color: '#bbb9b6',
        fontWeight: '600',
    },
    action_item__active: {
        backgroundColor: '#fea014',
        color: 'white',

        // width: 30
    },
    action_item__active2: {
        backgroundColor: '#fea014',
        color: 'white',
    },
    filter_item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderRadius: 10,
        fontSize: 14,
        color: '#fea014',
        fontWeight: 700,
        position: 'relative',
    },
    filter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // width: '60%',
    },
    filter_text: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ccc',
    },
    filter_text__active: {
        textDecorationLine: 'underline',
        textDecorationColor: '#fea014',
        color: 'black'
        // textDecorationStyle: 'dotted'
    },

    filter_active: {
        display: 'flex',
    },
    ranking_top: {
        margin: 10,
        alignContent: 'center'
    },
    ranking_top_container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    ranking_top__icon: {
        // color: '#fea014',
        // fontSize: 30,
    },
    ranking_top__title: {
        // textAlign: 'center',
    },
    ranking_top__title__text: {
        textAlign: 'center',
        letterSpacing: 1,
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 20,
    },

    ranking_top__number: {
        fontSize: 14,
        marginLeft: 10,
        marginRight: 10,
    },
    // 
    des_number: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    rule__1: {
        width: 45,
        height: 1,
        backgroundColor: 'black',
    },
    rule__2: {
        width: 45,
        height: 1,
        backgroundColor: 'black',
    },
    current_ranking: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    wrapper_icon: {
        height: 20,
        width: 20,
        backgroundColor: 'black',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    your_current_ranking: {
        fontSize: 12,
        marginLeft: 10,
        marginRight: 10,
    },
    current_number: {
        fontWeight: '700',
        color: '#eead1f',
    }

})

export default TopUsers;
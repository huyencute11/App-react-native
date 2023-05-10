import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { RouteProp } from '@react-navigation/native'; //route, navigation
import { RootStackParamList } from '../../types/RootStackParamList ';

export interface DetailUserProps {
    route: RouteProp<RootStackParamList, 'DetailUser'>;
}

const DetailUser: React.FC<DetailUserProps> = ({ route }) => {
    const { user } = route.params;
    console.log('route.params', route.params)
    return (
        <SafeAreaView>
            <View
                style={[
                    styles.wrapper,
                ]}
            >
                <View style={styles.container}>
                    <View style={styles.image}>
                        <Image source={{ uri: user?.img }} style={styles.userImageBig} />
                    </View>
                    <View style={styles.userInfo}>
                        <View style={styles.userImage}>
                            <Image source={{ uri: user?.img }} style={styles.userImage} />
                        </View>
                        <View style={styles.userInfoDes}>
                            <Text style={styles.userName}>{user?.username}</Text>
                            <Text style={styles.userEmail}>{user?.email}</Text>
                        </View>
                    </View>
                    <View style={styles.userRankInfo}>
                        <Text style={styles.userPoint}>Total point: {user?.score}</Text>
                        <Text style={styles.userRanking}>Ranking: {user?.rank}</Text>
                        <Text style={styles.userPostNumber}>
                            Number posts: {user?.total_posts}
                        </Text>
                        <Text style={styles.numberLikes}>Like: {user?.total_likes}</Text>
                        <Text style={styles.numberLikes}>Love: {user?.total_favorites}</Text>
                        <Text style={styles.numberLikes}>
                            Comments: {user?.total_comments}
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        padding: 12,
        height: 100,
    },
    displayUserDetail: {
        opacity: 0,
    },
    hideUserDetail: {
        display: 'none',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 90,
        backgroundColor: '#fff',
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        overflow: 'hidden',
        position: 'relative',
    },
    hide: {
        position: 'absolute',
        top: 0,
        left: 0,
        color: '#000',
    },
    iconItem: {
        margin: 10,
        fontSize: 20,
    },
    image: {
        width: '100%',
        height: 280,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    userImageBig: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    userInfo: {
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        overflow: 'hidden',
    },
    userInfoDes: {
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userEmail: {
        color: '#ccc',
        fontWeight: '600'
    },
    userRankInfo: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,

    },
    userPoint: {
        color: '#333',
        fontWeight: '600'
    },
    userRanking: {
        color: '#333',
        fontWeight: '600'
    },
    userPostNumber: {
        color: '#333',
        fontWeight: '600'
    },
    numberLikes: {
        color: '#333',
        fontWeight: '600'
    },


})

export default DetailUser
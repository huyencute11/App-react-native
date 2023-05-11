import React, { useEffect, useState } from 'react';
import User from '../../model/User';
import { ITEM_USER_HEIGHT, HEIGHT_NAV_RANKING, VIEW_POINT_HEIGHT } from '../../constant/dimention';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';


interface IProps {
    indexUser: number,
    showUserDetail: boolean,
    numberUserTopRank: number,
    nummberUser: number
    currentUser?: User,
}
//const TermItem: React.FC<Props> = ({ show }) => {
const MyRanking: React.FC<IProps> = ({ currentUser, indexUser, showUserDetail, numberUserTopRank }) => {
    const SCREEN_DEVIATION = 10

    const [hideMyRanking, setHideMyRanking] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(window.pageYOffset);
    const [status, setStatus] = useState<boolean>(true);

    useEffect(() => {
        //handle scroll
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        checkShowMyRanking()
    }, [scrollPosition, currentUser])

    //set show hide when onclick to display user
    useEffect(() => {
        setHideMyRanking(showUserDetail)
    }, [showUserDetail])

    let isScrollable = () => (window.innerHeight + window.pageYOffset) < document.body.offsetHeight - SCREEN_DEVIATION;
    // console.log('offsetHeight', (document.body.offsetHeight))
    // console.log('pageYOffset', (window.innerHeight + window.pageYOffset))
    const checkShowMyRanking = () => {
        let item_Can_Show_First_In_View = Math.floor((VIEW_POINT_HEIGHT - HEIGHT_NAV_RANKING) / ITEM_USER_HEIGHT);
        let number_Item_Show = numberUserTopRank + item_Can_Show_First_In_View

        if ((indexUser <= numberUserTopRank)) {
            if (scrollPosition > HEIGHT_NAV_RANKING && isScrollable()) {
                setStatus(true)
            }
            else
                setStatus(false)
        } else if ((indexUser > numberUserTopRank)) {

            //nam trong tam nhin
            if (indexUser <= number_Item_Show) {
                if (scrollPosition > (VIEW_POINT_HEIGHT - (number_Item_Show - indexUser) * ITEM_USER_HEIGHT) && isScrollable())
                    setStatus(true)
                else
                    setStatus(false)
            }
            //nam ngoai tam nhin
            else {
                // console.log('isScroll', isScrollable(scrollPosition))
                const postitionOfItem = HEIGHT_NAV_RANKING + (indexUser - numberUserTopRank) * ITEM_USER_HEIGHT
                //mac dinh hien thi
                if ((scrollPosition > postitionOfItem || scrollPosition < postitionOfItem) && isScrollable()) {
                    setStatus(true)
                    // if (scrollPosition > postitionOfItem && scrollPosition > (postitionOfItem - VIEW_POINT_HEIGHT + (indexUser - number_Item_Show) * ITEM_USER_HEIGHT)) {
                    if (scrollPosition > ((indexUser - number_Item_Show) * ITEM_USER_HEIGHT)
                        && scrollPosition < ((indexUser - number_Item_Show) * ITEM_USER_HEIGHT + VIEW_POINT_HEIGHT)
                    ) {
                        setStatus(false)
                    }
                }
                else {
                    setStatus(false)
                }
            }
        }
        else setStatus(false)
    }


    return (
        // <div className={cx('wrapper', { 'visible--myranking': status }, { 'hide--myranking': hideMyRanking, 'show--myranking': !hideMyRanking })}>
        //   <div className={cx('number')}>
        //     <span className={cx('numberText', 'hide')}>{currentUser?.rank}</span>
        //   </div>
        //   <div className={cx('image-wrapper')}>
        //     <img className={cx('img')} src={currentUser?.img} alt="Avatar" />
        //   </div>
        //   <div className={cx('description')}>
        //     <span className={cx('name')}>{currentUser?.username}</span>
        //     <span className={cx('number_post')}>{currentUser?.score} score</span>
        //   </div>
        // </div>
        // <SafeAreaView>
        <View style={[styles.wrapper, { opacity: status ? 1 : 0 }, { display: hideMyRanking ? 'none' : 'flex' }]}>
            <View style={styles.number}>
                <Text style={styles.numberText}>{currentUser?.rank}</Text>
            </View>
            <View style={styles.imageWrapper}>
                <Image style={styles.img} source={{ uri: currentUser?.img }} />
            </View>
            <View style={styles.description}>
                <Text style={styles.name}>{currentUser?.username}</Text>
                <Text style={styles.numberPost}>{currentUser?.score} score</Text>
            </View>
        </View>
        // </SafeAreaView>


    )
}
const styles = StyleSheet.create({
    wrapper: {
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-around',
        cursor: 'pointer',
        position: 'absolute',
        bottom: 0,
        zIndex: 50,
        backgroundColor: '#000',
        width: '100%',
        //   alignItems: 'center',
        padding: 0,
        height: 48,
        opacity: 0,
    },
    visibleMyyanking: {
        display: 'flex',
        opacity: 1,
    },
    hideMyyanking: {
        opacity: 0,
    },
    visibleHideMyyanking: {
        display: 'none',
    },
    showMyyanking: {
        opacity: 1,
    },
    imageWrapper: {
        overflow: 'hidden',
        width: 41,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 100,
    },
    number: {
        color: '#fff',
        textAlign: 'center',
        padding: 10,
    },
    numberText: {
        fontSize: 16,
        fontWeight: '500',
    },
    description: {
        color: '#fff',
        display: 'flex',
        flex: 12,
        //   alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBottom: 16,
        paddingTop: 16,
        fontWeight: '500',
        //   alignItems: 'start',
    },
    name: {
        fontSize: 14,
        lineHeight: 12,
        textAlign: 'left',
        color: '#fff',
        fontWeight: '700',
        paddingBottom: 8,
        paddingTop: 5,
    },
    numberPost: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12,
        lineHeight: 12,
        textAlign: 'left',
        color: '#fff',
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        color: '#fff',
    },
});


export default MyRanking
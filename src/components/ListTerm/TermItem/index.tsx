import React, { useEffect, useState } from 'react'
import { getTerms } from '../../../redux/store/term/actions';
import { View, Text, StyleSheet } from 'react-native';
import Term from '../../../interface/Term';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { AppDispatch } from '../../../types/AppDispatch';

interface IProps {
    show: boolean;
};
const TermItem: React.FC<IProps> = ({ show }) => {
    if (!show) {
        return null;
    }
    const termsa = [

        {
            "id": 1,
            "point": 1,
            "detail": "The developer data platform that provides the services and tools necessary "
        },
        {
            "id": 2,
            "point": 2,
            "detail": "The developer data platform that provides the services and tools necessary "
        },
        {
            "id": 3,
            "point": 3,
            "detail": "The developer data platform that provides the services and tools necessary "
        },
        {
            "id": 4,
            "point": 4,
            "detail": "The developer data platform that provides the services and tools necessary "
        },
        {
            "id": 5,
            "point": 5,
            "detail": "The developer data platform that provides the services and tools necessary "
        }
    ]


    return (
        show &&
        <View style={styles.wrapperTerms}>
            {termsa.map((item, index) => (
                <View style={styles.termItem} key={index}>
                    <Text style={styles.termItemTitle} >Point {item.point}</Text>
                    <Text style={styles.termItemContent} >{item.detail}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapperTerms: {
        backgroundColor: 'white',
        padding: 15
    },
    termItem: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,

    },
    termItemTitle: {
        marginLeft: 2,
    },
    termItemContent: {
        color: 'black',
    }
})

export default TermItem;
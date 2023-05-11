import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LogBox } from 'react-native';
import TermItem from './TermItem';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ListTerm: React.FC = () => {
    const [show, setShow] = useState(false);
    const handleOnChange = (): void => {
        setShow(!show);
    };

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>Terms of Use</Text>
                    <TouchableOpacity style={styles.icon} onPress={handleOnChange}>
                        {show ? <Icon name="chevron-up" color='#ccc' size={30} />
                            : <Icon name="chevron-down" color='#ccc' size={30} />}
                    </TouchableOpacity>
                </View>
                <TermItem show={show} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(246 241 241)',
        // paddingTop: 10,
        // paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        alignContent: 'center',
        // alignItems: 'center',
        // width: '80%'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        marginTop: 5,
    },

})

export default ListTerm;

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const Modale = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <Button label="test" onPress={openModal}/>
            <Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Modale;

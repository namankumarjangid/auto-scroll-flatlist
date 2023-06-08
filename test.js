import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
    const flatListRef = useRef();

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'First Item' },
        { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Second Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Third Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d74', title: 'Fourth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d75', title: 'Fifth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d76', title: 'Sixth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d77', title: 'Seventh Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d78', title: 'Eighth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d79', title: 'Ninth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d7a', title: 'Tenth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d7b', title: 'Eleventh Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d7c', title: 'Twelfth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d7d', title: 'Thirteenth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d7e', title: 'Fourteenth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d7f', title: 'Fifteenth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d80', title: 'Sixteenth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d81', title: 'Seventeenth Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d82', title: 'Eighteenth Item' },
        // ... add more items here
    ];

    const _renderFlatList = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ color: 'black', fontSize: 20 }}>{item.title}</Text>
            </View>
        );
    };

    const scrollToIndex = (index) => {
        flatListRef?.current.scrollToIndex({
            animated: true,
            index: index,
        });
    };

    const getItemLayout = (data, index) => ({
        length: 20,
        offset: 20 * index,
        index,
    });

    useEffect(() => {
        let count = 0;
        const intervalId = setInterval(() => {
            const index = count % 20; // calculate the index to scroll to
            scrollToIndex(index);
            count++;
        }, 1000); // scroll every second
        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={_renderFlatList}
                getItemLayout={getItemLayout}
                initialScrollIndex={0}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
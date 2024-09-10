import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const numOfColumns = 3;

const GridItem = ({ title, size }) => {
    return (
        <View style={[styles.gridItem, { width: size, height: size }]}>
            <Text style={styles.gridText}>{title}</Text>
        </View>
    )
}

const ShaderGallery = () => {
    const { width } = useWindowDimensions();
    const containerPadding = styles.container.padding * 2;
    const gridGap = styles.gridContainer.gap; // 网格之间的间距
    const itemSize = (width - containerPadding - (numOfColumns - 1) * gridGap) / numOfColumns;

    const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    
    return (
        <View style={styles.container}>
            <View style={styles.gridContainer}>
                {data.map((item, index) => (
                    <GridItem key={index} title={item} size={itemSize} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10, // 使用gap属性来设置网格之间的间距
    },
    gridItem: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
    },
    gridText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default ShaderGallery;
import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, useColorScheme } from 'react-native';
import { useState } from 'react';
import { NativeCounterView } from '@/components/NativeCounterView';

const numOfColumns = 3;

const theme = {
  light: {
    background: '#FFFFFF',
    text: '#000000',
    border: '#808080',
  },
  dark: {
    background: '#000000',
    text: '#FFFFFF',
    border: '#808080',
  },
};

const GridItem = ({ title, size, colors }) => {
    const [lastCount, setLastCount] = useState(0);

    const handleCountChanged = (event: { nativeEvent: { count: number } }) => {
        setLastCount(event.nativeEvent.count);
    }

    return (
        <View style={[styles.gridItem, { width: size, height: size, borderColor: colors.border, backgroundColor: colors.background }]}>
            <Text style={[styles.gridText, { color: colors.text }]}>{title}</Text>
            <NativeCounterView style={styles.nativeCounterView}
                initialCount={lastCount}
                onCountChanged={handleCountChanged}
            />
        </View>
    )
}

const ShaderGallery = () => {
    const { width } = useWindowDimensions();
    const colorScheme = useColorScheme();
    const colors = theme[colorScheme] || theme.light;

    const containerPadding = styles.scrollViewContent.padding * 2;
    const gridGap = styles.gridContainer.gap;
    const itemSize = (width - containerPadding - (numOfColumns - 1) * gridGap) / numOfColumns;

    const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    
    return (
        <ScrollView style={[styles.scrollView, { backgroundColor: colors.background }]} contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.gridContainer}>
                {data.map((item, index) => (
                    <GridItem key={index} title={item} size={itemSize} colors={colors} />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    nativeCounterView: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'green',
    },
    scrollView: {
        flex: 1, // 使 ScrollView 填满其父容器的可用空间
    },
    scrollViewContent: {
        flexGrow: 2, // 允许内容在必要时增长以填满 ScrollView
        padding: 10, // 在内容周围添加 10 单位的内边距
    },
    gridContainer: {
        flexDirection: 'row', // 使子元素在水平方向上排列
        flexWrap: 'wrap', // 允许子元素在需要时换行
        gap: 10, // 在网格项目之间添加 10 单位的间距（水平和垂直方向）
    },
    gridItem: {
        justifyContent: 'center', // 在垂直方向上居中对齐内容
        alignItems: 'center', // 在水平方向上居中对齐内容
        borderWidth: 1, // 设置边框宽度为 1 单位
        borderColor: 'gray', // 设置边框颜色为灰色
    },
    gridText: {
        fontSize: 18, // 设置文本大小为 18 单位
        fontWeight: 'bold', // 设置文本为粗体
    }
})

export default ShaderGallery;
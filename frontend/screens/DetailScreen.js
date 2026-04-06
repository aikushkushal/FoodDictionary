import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
    const { analysisResults, ingredientInformation } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Analysis Results</Text>
            <Text>{JSON.stringify(analysisResults, null, 2)}</Text>
            
            <Text style={styles.title}>Ingredient Information</Text>
            <Text>{JSON.stringify(ingredientInformation, null, 2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default DetailScreen;
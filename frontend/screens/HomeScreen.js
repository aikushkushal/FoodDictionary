import React, { useState } from 'react';
import { View, Button, Image, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const HomeScreen = () => {
  const [image, setImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState('');

  const pickImage = async () => {
    // Request permission to access camera roll
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      analyzeImage(result.uri);
    }
  };

  const analyzeImage = async (uri) => {
    // Placeholder for image analysis logic
    // E.g., send the image to an API for analysis
    console.log('Analyzing image:', uri);
    // Simulating an analysis result
    setAnalysisResult('This is a sample analysis result.');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}\n      <Text>{analysisResult}</Text>
    </View>
  );
};

export default HomeScreen;

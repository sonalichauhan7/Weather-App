import {useState} from 'react';
import {Alert} from 'react-native';
import {savePost} from '../../utils/storage';
import {AppScreens} from '../../constants/app.screens';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {launchImageLibrary, MediaType} from 'react-native-image-picker';

export const useCreatePost = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);

  const uploadImage = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets?.[0]?.uri) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const handleSubmit = async () => {
    if (!text.trim()) {
      Alert.alert('Error', 'Please enter some text for your post');
      return;
    }

    const newPost = {
      id: Date.now(),
      text,
      image,
      date: new Date().toISOString(),
    };

    try {
      const success = await savePost(newPost);
      if (success) {
        navigation.navigate(AppScreens.PostList);
      } else {
        throw new Error('Failed to save post');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to save post');
    }
  };

  const handleTitle = (text: string) => {
    setText(text);
  };

  const onCancel = () => {
    navigation.goBack();
  };

  return {
    text,
    image,
    handleTitle,
    uploadImage,
    handleSubmit,
    onCancel,
  };
};

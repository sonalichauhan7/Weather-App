import {ParamListBase, useNavigation} from '@react-navigation/native';
import {AppScreens} from '../../constants/app.screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {getPosts} from '../../utils/storage';
import {Alert} from 'react-native';

export interface IPost {
  id: number;
  text: string;
  image?: string | null;
  date: string;
}

export const usePostList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
    const unsubscribe = navigation.addListener('focus', () => {
      loadPosts();
    });

    return unsubscribe;
  }, [navigation]);

  const loadPosts = async () => {
    try {
      const savedPosts = await getPosts();
      setPosts(savedPosts);
    } catch (error) {
      Alert.alert('Error', 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    navigation.navigate(AppScreens.CreatePost);
  };

  return {
    posts,
    loading,
    handleAdd,
  };
};

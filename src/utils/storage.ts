import AsyncStorage from '@react-native-async-storage/async-storage';
import {IPost} from '../screens/PostListScreen/usepostList';

const POSTS_KEY = 'posts';

export const savePost = async (post: IPost) => {
  try {
    const existingPosts = await getPosts();
    const updatedPosts = [post, ...existingPosts];
    await AsyncStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
    return true;
  } catch (error) {
    console.error('Error saving post:', error);
    return false;
  }
};

export const getPosts = async () => {
  try {
    const posts = await AsyncStorage.getItem(POSTS_KEY);
    return posts ? JSON.parse(posts) : [];
  } catch (error) {
    console.error('Error getting posts:', error);
    return [];
  }
};

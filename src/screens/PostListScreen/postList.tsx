import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {IcAdd} from '../../constants/app.svg';
import styles from './postList.styles';
import {AppStrings} from '../../utils/strings';
import {PostItem} from '../../components/PostItem/postItem';
import {IPost, usePostList} from './usepostList';
import {AppColors} from '../../constants/app.colors';

const ListEmpty = () => (
  <>
    <Text style={styles.emptyText}>{AppStrings.PostList.noPostYet}</Text>
    <Text style={styles.emptySubText}>{AppStrings.PostList.tapPlus}</Text>
  </>
);

export const PostList = () => {
  const {posts, loading, handleAdd} = usePostList();

  const renderPost = ({item}: {item: IPost}) => <PostItem item={item} />;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={AppColors.deepBlue} />
        <Text style={styles.loadingText}>
          {AppStrings.PostList.loadingPost}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <IcAdd height={40} width={40} />
      </TouchableOpacity>

      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={
          posts.length === 0 ? styles.emptyContainer : styles.listContainer
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<ListEmpty />}
      />
    </View>
  );
};

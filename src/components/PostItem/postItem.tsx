import {memo} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './postItem.styles';
import {formatPostDate} from '../../utils/dateUtils';
import {IPost} from '../../screens/PostListScreen/usepostList';

type ItemProps = {
  item: IPost;
};

export const PostItem = memo((props: ItemProps) => {
  const {item} = props;

  return (
    <View style={styles.postContainer}>
      {item.image && (
        <Image source={{uri: item.image}} style={styles.postImage} />
      )}
      <Text style={styles.postText}>{item.text}</Text>
      <Text style={styles.postDate}>{formatPostDate(item.date)}</Text>
    </View>
  );
});

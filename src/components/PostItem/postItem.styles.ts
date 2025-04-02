import {StyleSheet} from 'react-native';
import {AppSizes} from '../../utils/sizes';
import {AppColors} from '../../constants/app.colors';
import {AppFonts} from '../../constants/app.fonts';

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#222328',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
      },
      postImage: {
        width: '100%',
        height: 200,
        borderRadius: 4,
        marginBottom: 10,
      },
      postText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#f9f9f9',
      },
      postDate: {
        fontSize: 12,
        color: '#a0aab4',
      },
});

export default styles;

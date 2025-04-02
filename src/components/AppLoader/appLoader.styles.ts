import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/app.colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.blackOp,
  },
});

export default styles;

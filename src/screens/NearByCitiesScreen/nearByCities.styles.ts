import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/app.colors';
import {AppSizes} from '../../utils/sizes';
import {AppFonts} from '../../constants/app.fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.black,
  },
  listStyle: {
    marginBottom: AppSizes.smartScale(20),
  },
  listContainer: {
    padding: AppSizes.smartWidthScale(20),
    backgroundColor: AppColors.black,
    marginTop: AppSizes.smartScale(30),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.black,
    padding: AppSizes.smartWidthScale(20),
  },
  emptyText: {
    color: AppColors.white,
    fontSize: AppSizes.countPixelRatio(16),
    fontFamily: AppFonts.MEDIUM,
    textAlign: 'center',
  },
});

export default styles;

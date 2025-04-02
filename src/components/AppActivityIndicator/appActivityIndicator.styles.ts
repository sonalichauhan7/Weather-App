import {StyleSheet} from 'react-native';
import {AppSizes} from '../../utils/sizes';
import {AppColors} from '../../constants/app.colors';
import {AppFonts} from '../../constants/app.fonts';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: AppSizes.smartWidthScale(20),
    backgroundColor: AppColors.black,
  },
  loadingText: {
    marginTop: AppSizes.smartScale(10),
    fontSize: AppSizes.countPixelRatio(16),
    fontFamily: AppFonts.MEDIUM,
    color: AppColors.white,
    textAlign: 'center',
  },
});

export default styles;

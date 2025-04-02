import {StyleSheet} from 'react-native';
import {AppSizes} from '../../utils/sizes';
import {AppColors} from '../../constants/app.colors';
import {AppFonts} from '../../constants/app.fonts';

const styles = StyleSheet.create({
  detailItem: {
    alignItems: 'center',
    marginVertical: AppSizes.smartScale(15),
  },
  detailLabel: {
    fontSize: AppSizes.countPixelRatio(14),
    fontFamily: AppFonts.REGULAR,
    color: '#f9f9f9',
    textAlign: 'center',
  },
  detailValue: {
    fontSize: AppSizes.countPixelRatio(20),
    fontFamily: AppFonts.MEDIUM,
    color: AppColors.white,
    textAlign: 'center',
  },
});

export default styles;

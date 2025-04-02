import {StyleSheet} from 'react-native';
import {AppSizes} from '../../utils/sizes';
import {AppColors} from '../../constants/app.colors';
import {AppFonts} from '../../constants/app.fonts';

const styles = StyleSheet.create({
  cityCard: {
    borderRadius: AppSizes.countPixelRatio(16),
    marginBottom: AppSizes.smartScale(15),
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  wrapper: {
    paddingVertical: AppSizes.smartScale(25),
    paddingHorizontal: AppSizes.smartWidthScale(20),
  },
  cityNameContainer: {
    flex: 1,
  },
  temperatureContainer: {
    alignItems: 'flex-end',
  },
  cityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: AppSizes.smartScale(5),
  },
  cityName: {
    fontSize: AppSizes.countPixelRatio(20),
    fontFamily: AppFonts.MEDIUM,
    color: AppColors.white,
  },
  temperature: {
    fontSize: AppSizes.countPixelRatio(20),
    fontFamily: AppFonts.SEMI_BOLD,
    color: AppColors.white,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weatherIcon: {
    width: 25,
    height: 25,
    marginLeft: AppSizes.smartWidthScale(5),
  },
  weatherDescription: {
    textTransform: 'capitalize',
    color: AppColors.greyOne,
    fontSize: AppSizes.countPixelRatio(16),
    fontFamily: AppFonts.REGULAR,
    textAlign: 'center',
  },
  detailsContainer: {
    marginTop: AppSizes.smartScale(10),
    borderTopWidth: 1,
    borderTopColor: AppColors.greyOne,
    paddingTop: AppSizes.smartScale(10),
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: AppSizes.smartScale(8),
  },
  detailLabel: {
    fontSize: AppSizes.countPixelRatio(14),
    fontFamily: AppFonts.REGULAR,
    color: AppColors.greyOne,
  },
  detailValue: {
    fontSize: AppSizes.countPixelRatio(14),
    fontFamily: AppFonts.MEDIUM,
    color: AppColors.white,
  },
  arrowUp: {
    transform: [{rotate: '0deg'}],
  },
  arrowDown: {
    transform: [{rotate: '180deg'}],
  },
});

export default styles;

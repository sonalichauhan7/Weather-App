import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/app.colors';
import {AppFonts} from '../../constants/app.fonts';
import {AppSizes} from '../../utils/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: AppSizes.smartWidthScale(20),
    // backgroundColor: AppColors.black,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.black
  },
  loadingText: {
    marginTop: AppSizes.smartScale(10),
    fontSize: AppSizes.countPixelRatio(16),
    fontFamily: AppFonts.MEDIUM,
    color: AppColors.white,
    textAlign: 'center',
  },
  errorText: {
    color: AppColors.red,
    fontSize: AppSizes.countPixelRatio(16),
    fontFamily: AppFonts.MEDIUM,
    textAlign: 'center',
  },
  header: {
    marginTop: AppSizes.smartScale(20),
    marginBottom: AppSizes.smartScale(70),
  },
  locationText: {
    fontSize: AppSizes.countPixelRatio(40),
    fontFamily: AppFonts.MEDIUM,
    textAlign: 'left',
    color: AppColors.white,
  },
  weatherInfo: {
    marginBottom: AppSizes.smartScale(25),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: AppSizes.smartScale(70),
    fontFamily: AppFonts.REGULAR,
    color: AppColors.white,
  },
  weatherDescContainer: {
    flexDirection: 'column',
    marginTop: AppSizes.smartScale(-10),
    marginHorizontal: AppSizes.smartWidthScale(10),
  },
  weatherDescription: {
    fontSize: AppSizes.smartScale(20),
    fontFamily: AppFonts.REGULAR,
    color: AppColors.white,
    textTransform: 'capitalize',
  },
  weatherIcon: {
    width: AppSizes.countPixelRatio(35),
    height: AppSizes.countPixelRatio(35),
  },
  dateText: {
    fontSize: AppSizes.smartScale(16),
    fontFamily: AppFonts.REGULAR,
    color: AppColors.white,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: AppSizes.smartWidthScale(20),
  },
  detailsTitle: {
    fontSize: AppSizes.countPixelRatio(18),
    fontFamily: AppFonts.REGULAR,
    color: AppColors.white,
  },
  separator: {
    height: AppSizes.smartScale(0.5),
    backgroundColor: AppColors.greyOp,
    width: '100%',
    marginBottom: AppSizes.smartScale(25),
  },
});

export default styles;

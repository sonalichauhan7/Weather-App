import {StyleSheet} from 'react-native';
import {AppSizes} from '../../utils/sizes';
import {AppColors} from '../../constants/app.colors';
import {AppFonts} from '../../constants/app.fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: AppSizes.smartWidthScale(20),
    backgroundColor: AppColors.black,
  },
  hedding: {
    paddingTop: AppSizes.smartScale(20),
    fontSize: AppSizes.countPixelRatio(20),
    fontFamily: AppFonts.SEMI_BOLD,
    marginBottom: AppSizes.smartScale(20),
    textAlign: 'center',
    color: AppColors.white,
  },
  inputContainer: {
    minHeight: 100,
    marginBottom: AppSizes.smartScale(20),
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    borderWidth: AppSizes.smartScale(1),
    borderColor: AppColors.grey,
    padding: AppSizes.smartScale(15),
    borderRadius: AppSizes.countPixelRatio(8),
    color: AppColors.white,
    fontSize: AppSizes.countPixelRatio(16),
    fontFamily: AppFonts.REGULAR,
    textAlign: 'left',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: AppSizes.smartScale(15),
    borderRadius: AppSizes.countPixelRatio(5),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: AppSizes.smartScale(10),
  },
  button: {
    paddingBottom: AppSizes.smartScale(5),
    paddingTop: AppSizes.smartScale(9),
    paddingHorizontal: AppSizes.smartWidthScale(24),
    borderRadius: AppSizes.countPixelRatio(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: AppSizes.smartScale(20),
    backgroundColor: AppColors.primaryBtn,
  },
  buttonText: {
    color: AppColors.white,
    fontFamily: AppFonts.MEDIUM,
    fontSize: AppSizes.countPixelRatio(16),
  },
  cancelBtn: {
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 1,
  },
  cancelTxt: {
    color: AppColors.red,
  },
});

export default styles;

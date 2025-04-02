import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/app.colors';
import {AppFonts} from '../../constants/app.fonts';
import {AppSizes} from '../../utils/sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.black,
    paddingHorizontal: AppSizes.smartWidthScale(20),
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: AppColors.addBtn,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: AppSizes.countPixelRatio(20),
    fontFamily: AppFonts.SEMI_BOLD,
    marginBottom: AppSizes.smartScale(10),
    color: AppColors.white,
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: AppSizes.countPixelRatio(16),
    fontFamily: AppFonts.MEDIUM,
    color: AppColors.white,
    textAlign: 'center',
  },
  listContainer: {
    marginTop: AppSizes.smartScale(20),
    paddingBottom: AppSizes.smartScale(20),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  loadingText: {
    marginTop: AppSizes.smartScale(5),
    fontSize: AppSizes.countPixelRatio(16),
    fontFamily: AppFonts.REGULAR,
    color: AppColors.white,
  },
});

import {memo} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {AppStrings} from '../../utils/strings';
import {AppColors} from '../../constants/app.colors';
import styles from './appActivityIndicator.styles';

export const AppActivityIndicator = memo(() => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={AppColors.deepBlue} />
      <Text style={styles.loadingText}>
        {AppStrings.weatherTab.featchingData}
      </Text>
    </View>
  );
});

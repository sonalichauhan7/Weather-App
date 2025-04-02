import React, {memo} from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {AppColors} from '../../constants/app.colors';
import styles from './appLoader.styles';

export const AppLoader = memo(({isLoading}: {isLoading: boolean}) => {
  return (
    <View style={styles.container}>
      <Modal transparent={true} animationType="fade" visible={isLoading}>
        <View style={styles.modalBackground}>
          <ActivityIndicator size="large" color={AppColors.deepBlue} />
        </View>
      </Modal>
    </View>
  );
});

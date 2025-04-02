import {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './weatherDetailItem.styles';

export const WeatherDetailItem = memo(
  ({label, value}: {label: string; value: string}) => (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  ),
);

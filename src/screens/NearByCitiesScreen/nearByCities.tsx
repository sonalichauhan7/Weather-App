import {FlatList, RefreshControl, Text, View} from 'react-native';
import styles from './nearByCities.styles';
import {useNearByCities} from './useNearByCities';
import {AppStrings} from '../../utils/strings';
import {IWeather} from '../CurrentWeatherScreen/useCurrentWeather';
import {memo, useCallback} from 'react';
import {ItemCard} from '../../components/ItemCard/itemCard';
import {AppActivityIndicator} from '../../components/AppActivityIndicator/appActivityIndicator';

export const NearbyCities = memo(() => {
  const {
    cities,
    isLoading,
    error,
    refreshing,
    expandedId,
    onRefresh,
    toggleExpand,
  } = useNearByCities();

  const renderCityItem = useCallback(
    ({item}: {item: IWeather}) => (
      <ItemCard
        item={item}
        onItemPress={toggleExpand}
        selectedItemId={expandedId}
      />
    ),
    [toggleExpand, expandedId],
  );

  const renderEmptyComponent = useCallback(
    () => (
      <Text style={styles.emptyText}>
        {error ?? AppStrings.NearByTab.noCityFound}
      </Text>
    ),
    [error],
  );

  if (isLoading && !refreshing) {
    return <AppActivityIndicator />;
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={cities}
        renderItem={renderCityItem}
        keyExtractor={item => item.id.toString()}
        style={styles.listStyle}
        contentContainerStyle={
          cities.length === 0 ? styles.emptyContainer : styles.listContainer
        }
        ListEmptyComponent={renderEmptyComponent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

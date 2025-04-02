import {useCallback, useEffect, useState} from 'react';
import {getCurrentLocation} from '../../services/locationService';
import {getNearbyCities} from '../../services/weatherService';
import {IWeather} from '../CurrentWeatherScreen/useCurrentWeather';
import {AppStrings} from '../../utils/strings';

export const useNearByCities = () => {
  const [cities, setCities] = useState<IWeather[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = useCallback((id: number) => {
    setExpandedId(currentId => (currentId === id ? null : id));
  }, []);

  const fetchNearbyCities = useCallback(async (isRefresh = false) => {
    try {
      isRefresh ? setRefreshing(true) : setIsLoading(true);
      setError(null);

      const {latitude, longitude} = await getCurrentLocation();

      const nearbyCities = await getNearbyCities(latitude, longitude);
      setCities(nearbyCities);
    } catch (err) {
      setError(AppStrings.NearByTab.failError);
      console.error(err);
    } finally {
      setRefreshing(false);
      setIsLoading(false);
    }
  }, []);

  const onRefresh = useCallback(() => {
    fetchNearbyCities(true);
  }, [fetchNearbyCities]);

  useEffect(() => {
    fetchNearbyCities();
  }, [fetchNearbyCities]);

  return {
    cities,
    isLoading,
    error,
    refreshing,
    expandedId,
    onRefresh,
    toggleExpand,
  };
};

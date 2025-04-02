import {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {openSettings, RESULTS} from 'react-native-permissions';
import {AppStrings} from '../../utils/strings';
import {
  checkLocationPermission,
  getCurrentLocation,
  requestLocationPermission,
} from '../../services/locationService';
import {getCurrentWeather} from '../../services/weatherService';

export interface IWeather {
  id: number;
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
    sea_level: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  wind: {
    speed: number;
  };
  visibility: number;
}

export const useCurrentWeather = () => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchWeatherAndSet = useCallback(async () => {
    const location = await getCurrentLocation();
    const weatherData = await getCurrentWeather(
      location.latitude,
      location.longitude,
    );
    setWeather(weatherData);
  }, []);

  const showAlert = useCallback(() => {
    Alert.alert(
      AppStrings.weatherTab.need_permission,
      AppStrings.weatherTab.desc_permission,
      [
        {
          text: AppStrings.weatherTab.goToSettings,
          onPress: () => openSettings(),
        },
      ],
      {cancelable: false},
    );
  }, []);

  const fetchWeatherData = useCallback(
    async (isManualRefresh = false) => {
      if (isManualRefresh) {
        setRefreshing(true);
      } else {
        setIsLoading(true);
      }
      setError(null);

      try {
        const permissionStatus = await checkLocationPermission();

        switch (permissionStatus) {
          case RESULTS.UNAVAILABLE:
            throw new Error('Location feature not available on this device');
          case RESULTS.DENIED:
            const newPermissionStatus = await requestLocationPermission();
            if (newPermissionStatus === RESULTS.GRANTED) {
              await fetchWeatherAndSet();
            }
            break;
          case RESULTS.BLOCKED:
            showAlert();
            break;
          case RESULTS.GRANTED:
            await fetchWeatherAndSet();
            break;
          case RESULTS.LIMITED:
            await fetchWeatherAndSet();
            break;
        }
      } catch (error: any) {
        setError(error.message || 'Failed to fetch weather data');
        console.error('Weather fetch error:', error);
      } finally {
        if (isManualRefresh) {
          setRefreshing(false);
        } else {
          setIsLoading(false);
        }
      }
    },
    [fetchWeatherAndSet, showAlert],
  );

  const onRefresh = useCallback(() => {
    fetchWeatherData(true);
  }, [fetchWeatherData]);

  const formatDate = useCallback((date: Date) => {
    return date
      .toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })
      .replace(',', '');
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  return {weather, error, isLoading, refreshing, onRefresh, formatDate};
};

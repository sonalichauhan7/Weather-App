import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  Image,
  ImageBackground,
} from 'react-native';
import {useCurrentWeather} from './useCurrentWeather';
import styles from './currentWeather.styles';
import {AppStrings} from '../../utils/strings';
import {AppSizes} from '../../utils/sizes';
import {useGlobalHook} from '../../hooks/useGlobalHook';
import {memo, useMemo} from 'react';
import {AppActivityIndicator} from '../../components/AppActivityIndicator/appActivityIndicator';
import {WeatherDetailItem} from '../../components/WeatherDetailItem/weatherDetailItem';

const WeatherDetailsSection = memo(({weather}: {weather: any}) => (
  <>
    <View style={styles.separator} />
    <Text style={styles.detailsTitle}>
      {AppStrings.weatherTab.WeatherDetails}
    </Text>

    <View style={styles.detailsContainer}>
      <View>
        <WeatherDetailItem
          label={AppStrings.weatherTab.feelLike}
          value={`${Math.round(weather.main?.feels_like)}${
            AppStrings.Units.celsius
          }`}
        />
        <WeatherDetailItem
          label={AppStrings.weatherTab.wind}
          value={`${weather.wind?.speed}${AppStrings.Units.kilometerHrs}`}
        />
        <WeatherDetailItem
          label={AppStrings.weatherTab.visibility}
          value={`${weather.visibility / 1000}${AppStrings.Units.kilometer}`}
        />
      </View>

      <View>
        <WeatherDetailItem
          label={AppStrings.weatherTab.humidity}
          value={`${weather.main?.humidity}${AppStrings.Units.percentage}`}
        />
        <WeatherDetailItem
          label={AppStrings.weatherTab.airPressure}
          value={`${weather.main?.pressure}${AppStrings.Units.hpa}`}
        />
        <WeatherDetailItem
          label={AppStrings.weatherTab.seaLevel}
          value={`${weather.main?.sea_level}${AppStrings.Units.meter}`}
        />
      </View>
    </View>
  </>
));

const WeatherMainInfo = memo(
  ({
    weather,
    formatDate,
  }: {
    weather: any;
    formatDate: (date: Date) => string;
  }) => (
    <View style={styles.weatherInfo}>
      <View style={styles.rowContainer}>
        <Text style={styles.temperatureText}>
          {Math.round(weather.main?.temp)}
        </Text>
        <View style={styles.weatherDescContainer}>
          <Text style={styles.weatherDescription}>
            {AppStrings.Units.celsius}
          </Text>
          <View style={styles.rowContainer}>
            <Text style={styles.weatherDescription}>
              {weather.weather?.[0]?.description}
            </Text>
            {weather.weather?.[0]?.icon && (
              <Image
                style={styles.weatherIcon}
                source={{
                  uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
                }}
              />
            )}
          </View>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.dateText}>{formatDate(new Date())}</Text>
        <Text
          style={[styles.dateText, {marginLeft: AppSizes.smartWidthScale(15)}]}>
          {Math.round(weather.main?.temp_max)}
          {'°C / '}
          {Math.round(weather.main?.temp_min)}
          {AppStrings.Units.celsius}
        </Text>
      </View>
    </View>
  ),
);

export const CurrentWeather = memo(() => {
  const {weather, error, isLoading, refreshing, onRefresh, formatDate} =
    useCurrentWeather();
  const {getWeatherBackground} = useGlobalHook();

  const backgroundImage = getWeatherBackground(
    weather?.weather?.[0]?.main,
    weather?.weather?.[0]?.icon,
  );

  const refreshControl = useMemo(
    () => <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />,
    [refreshing, onRefresh],
  );

  if (isLoading && !refreshing) {
    return <AppActivityIndicator />;
  }

  if (error || !weather) {
    return (
      <ScrollView
        contentContainerStyle={[styles.container, styles.center]}
        refreshControl={refreshControl}>
        <Text style={styles.errorText}>
          {error ?? AppStrings.weatherTab.no_weather_data}
        </Text>
      </ScrollView>
    );
  }

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.overlay} />
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={refreshControl}>
        <View style={styles.header}>
          <Text style={styles.locationText}>
            {weather.name}, {weather.sys?.country}
          </Text>
        </View>
        <WeatherMainInfo weather={weather} formatDate={formatDate} />
        <WeatherDetailsSection weather={weather} />
      </ScrollView>
    </ImageBackground>
  );
});

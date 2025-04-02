import {memo} from 'react';
import {IWeather} from '../../screens/CurrentWeatherScreen/useCurrentWeather';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppStrings} from '../../utils/strings';
import {useGlobalHook} from '../../hooks/useGlobalHook';
import styles from './itemCard.styles';
import {IcArrowUp} from '../../constants/app.svg';

type ItemProps = {
  item: IWeather;
  selectedItemId: number | null;
  onItemPress: (id: number) => void;
};

export const ItemCard = memo((props: ItemProps) => {
  const {getWeatherBackground} = useGlobalHook();
  const {item, selectedItemId, onItemPress} = props;
  const backgroundImage = getWeatherBackground(
    item?.weather?.[0]?.main,
    item?.weather?.[0]?.icon,
  );

  const isExpanded = selectedItemId === item.id;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onItemPress(item.id)}
      style={styles.cityCard}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.overlay} />
        <View style={styles.wrapper}>
          <View style={styles.cityHeader}>
            <Text style={styles.cityName}>
              {item.name}, {item.sys.country}
            </Text>
            <Text style={styles.temperature}>
              {Math.round(item.main.temp)}
              {AppStrings.Units.celsius}
            </Text>
          </View>

          <View style={styles.weatherInfo}>
            <View style={[styles.weatherInfo, {justifyContent: 'flex-start'}]}>
              <Text style={styles.weatherDescription}>
                {item.weather[0].description}
              </Text>
              <Image
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
                }}
                style={styles.weatherIcon}
              />
            </View>
            <View
              style={[
                isExpanded && styles.arrowUp,
                !isExpanded && styles.arrowDown,
              ]}>
              <IcArrowUp height={20} width={20} />
            </View>
          </View>

          {isExpanded && (
            <View style={styles.detailsContainer}>
              <View style={styles.detailsRow}>
                <Text style={styles.detailLabel}>
                  {AppStrings.weatherTab.feelLike}:
                </Text>
                <Text style={styles.detailValue}>
                  {Math.round(item.main.feels_like)}
                  {AppStrings.Units.celsius}
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailLabel}>
                  {AppStrings.weatherTab.humidity}:
                </Text>
                <Text style={styles.detailValue}>
                  {item.main.humidity}
                  {AppStrings.Units.percentage}
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailLabel}>
                  {AppStrings.NearByTab.windSpeed}:
                </Text>
                <Text style={styles.detailValue}>
                  {item.wind.speed}
                  {AppStrings.Units.meterSecond}
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailLabel}>
                  {AppStrings.NearByTab.pressure}:
                </Text>
                <Text style={styles.detailValue}>
                  {item.main.pressure}
                  {AppStrings.Units.hpa}
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailLabel}>
                  {AppStrings.NearByTab.minTemp}:
                </Text>
                <Text style={styles.detailValue}>
                  {Math.round(item.main.temp_min)}
                  {AppStrings.Units.celsius}
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailLabel}>
                  {AppStrings.NearByTab.maxTemp}:
                </Text>
                <Text style={styles.detailValue}>
                  {Math.round(item.main.temp_max)}
                  {AppStrings.Units.celsius}
                </Text>
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
});

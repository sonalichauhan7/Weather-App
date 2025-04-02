import {Alert, Platform} from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
} from 'react-native-permissions';
import {promptForEnableLocationIfNeeded} from 'react-native-android-location-enabler';
import {AppStrings} from '../utils/strings';
import Geolocation from '@react-native-community/geolocation';

export const checkLocationPermission = async () => {
  const permission = Platform.select({
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  });
  return await check(permission!);
};

export const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    await promptForEnableLocationIfNeeded();
  }

  const permission = Platform.select({
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  });
  return await request(permission!);
};

export const getCurrentLocation = async () => {
  return new Promise<{latitude: number; longitude: number}>(
    (resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          switch (error.code) {
            case 1: // PERMISSION_DENIED
              showAlert();
              reject(new Error('Location permission denied'));
              break;
            case 2: // POSITION_UNAVAILABLE
              reject(new Error('Unable to retrieve your location'));
              break;
            case 3: // TIMEOUT
              retryWithLowerAccuracy(resolve, reject);
              break;
            default:
              reject(error);
          }
        },
        {enableHighAccuracy: true, timeout: 30000, maximumAge: 0},
      );
    },
  );
};

const retryWithLowerAccuracy = (
  resolve: (value: {latitude: number; longitude: number}) => void,
  reject: (reason?: any) => void,
) => {
  Geolocation.getCurrentPosition(
    position => {
      resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    error => {
      reject(new Error('Failed to get location even with lower accuracy'));
    },
    {
      enableHighAccuracy: false,
      timeout: 15000,
      maximumAge: 60000,
    },
  );
};

const showAlert = () => {
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
};

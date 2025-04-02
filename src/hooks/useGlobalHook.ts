import {AppPngImages} from '../constants/app.images';

export const useGlobalHook = () => {
  //   const getWeatherBackground = (weatherCondition?: string) => {
  //     if (!weatherCondition) return AppPngImages.IDefault;

  //     const condition = weatherCondition.toLowerCase();

  //     if (condition.includes('clear')) {
  //       return AppPngImages.IDefault;
  //     } else if (condition.includes('cloud')) {
  //       return AppPngImages.ICloudy;
  //     } else if (condition.includes('rain')) {
  //       return AppPngImages.IDefault;
  //     } else if (condition.includes('snow')) {
  //       return AppPngImages.IDefault;
  //     } else if (condition.includes('thunderstorm')) {
  //       return AppPngImages.IDefault;
  //     } else {
  //       return AppPngImages.IDefault;
  //     }
  //   };

  const getWeatherBackground = (
    weatherCondition?: string,
    iconCode?: string,
  ) => {
    // Default to daytime if no icon code is provided
    const isDayTime = iconCode ? iconCode.endsWith('d') : true;

    if (!weatherCondition) {
      return isDayTime ? AppPngImages.IDefaultDay : AppPngImages.IDefaultNight;
    }

    const condition = weatherCondition.toLowerCase();

    if (condition.includes('clear')) {
      return isDayTime
        ? AppPngImages.IClearSkyDay
        : AppPngImages.IClearSkyNight;
    } else if (condition.includes('cloud')) {
      return isDayTime
        ? AppPngImages.ICloudySkyDay
        : AppPngImages.ICloudySkyNight;
    } else if (condition.includes('rain')) {
      return isDayTime
        ? AppPngImages.IRainySkyDay
        : AppPngImages.IRainySkyNight;
    } else if (condition.includes('thunderstorm')) {
      return isDayTime
        ? AppPngImages.IThunderstormSkyDay
        : AppPngImages.IThunderstormSkyNight;
    } else if (condition.includes('sunny')) {
      return AppPngImages.ISunnySkyDay;
    } else {
      return isDayTime ? AppPngImages.IDefaultDay : AppPngImages.IDefaultNight;
    }
  };

  return {
    getWeatherBackground,
  };
};

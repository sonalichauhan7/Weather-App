import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {AppColors} from '../constants/app.colors';

type TabIconType = {
  svgProps?: SvgProps;
  isActive: boolean;
  isWeather?: boolean;
  isNearBy?: boolean;
};

const getPathData = (isWeather?: boolean, isNearBy?: boolean): string => {
  if (isWeather) {
    return 'M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80zm0-480z';
  }
  if (isNearBy) {
    return 'M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80zm0-180q45-45 80-93 30-41 55-90t25-97q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 48 25 97t55 90q35 48 80 93zm0-220q-25 0-42.5-17.5T420-540q0-25 17.5-42.5T480-600q25 0 42.5 17.5T540-540q0 25-17.5 42.5T480-480z';
  }
  return 'M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160zM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200zm0-80h560v-560H200v560zm0-560v560-560z';
};

export default function TabIcon(props: Readonly<TabIconType>) {
  const {svgProps, isActive, isWeather, isNearBy} = props;
  const pathData = getPathData(isWeather, isNearBy);

  return (
    <Svg
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="none"
      {...svgProps}>
      <Path d={pathData} fill={isActive ? AppColors.white : AppColors.grey} />
    </Svg>
  );
}

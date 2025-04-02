import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CurrentWeather} from '../screens/CurrentWeatherScreen/currentWeather';
import {AppScreens} from '../constants/app.screens';
import {NearbyCities} from '../screens/NearByCitiesScreen/nearByCities';
import {CreatePost} from '../screens/CreatePostScreen/createPost';
import {StyleSheet, Text} from 'react-native';
import {AppColors} from '../constants/app.colors';
import {AppFonts} from '../constants/app.fonts';
import TabIcon from '../svgcomponents/TabIcon';
import {AppSizes} from '../utils/sizes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostList } from '../screens/PostListScreen/postList';

const Tab = createBottomTabNavigator();
const PostStack = createNativeStackNavigator();

type tabLabelProps = {
  focused: boolean;
  routeName: string;
};

const PostStackNavigator = () => {
  return (
    <PostStack.Navigator screenOptions={{headerShown: false}}>
      <PostStack.Screen name={AppScreens.PostList} component={PostList} />
      <PostStack.Screen name={AppScreens.CreatePost} component={CreatePost} />
    </PostStack.Navigator>
  );
};

export const AppNavigator = () => {
  const TabLabel = (props: tabLabelProps) => {
    const {focused, routeName} = props;
    return (
      <Text
        style={[
          {color: focused ? AppColors.white : AppColors.grey},
          styles.tabLabel,
        ]}>
        {routeName}
      </Text>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarLabelPosition: 'below-icon',
          tabBarStyle: styles.tabStyle,
          tabBarLabel: ({focused}) => (
            <TabLabel focused={focused} routeName={route.name} />
          ),
        })}>
        <Tab.Screen
          name={AppScreens.Weather}
          component={CurrentWeather}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon isActive={focused} isWeather={true} />
            ),
          }}
        />
        <Tab.Screen
          name={AppScreens.NearBy}
          component={NearbyCities}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon isActive={focused} isNearBy={true} />
            ),
          }}
        />
        <Tab.Screen
          name={AppScreens.Post}
          component={PostStackNavigator}
          options={{
            tabBarIcon: ({focused}) => <TabIcon isActive={focused} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    height: 60,
    alignItems: 'center',
    backgroundColor: AppColors.black,
  },
  tabLabel: {
    marginTop: AppSizes.smartScale(4),
    fontSize: AppSizes.countPixelRatio(12),
    fontFamily: AppFonts.SEMI_BOLD,
    lineHeight: AppSizes.countPixelRatio(16),
  },
});

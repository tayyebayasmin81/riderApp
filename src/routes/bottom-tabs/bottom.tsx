import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icons} from '~assets/images';
import {CustomText} from '~components';
import ScreenNames from '~routes/routes';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';
import {height, width} from '~utils';
import {Account, Dashboard, Request, Rides, RideSummary} from '~screens';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.DASHBOARD}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: AppColors.white,
          height: height(11),
          paddingTop: height(0.5),
        },
      }}>
      <Tab.Screen
        name={ScreenNames.DASHBOARD}
        component={Dashboard}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View style={styles.tabView}>
              <Image
                source={Icons.dashboard}
                style={[
                  styles.iconStyle,
                  {
                    tintColor: focused
                      ? AppColors.primary
                      : AppColors.secondary,
                  },
                ]}
              />
              <CustomText
                color={AppColors.secondary}
                size={2.8}
                font={FontFamily.appFontMedium}>
                Dashboard
              </CustomText>
            </View>
          ),
        })}
      />
      {
        <Tab.Screen
          name={ScreenNames.REQUEST}
          component={Request}
          options={() => ({
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <View style={styles.tabView}>
                <Image
                  source={Icons.request}
                  style={[
                    styles.iconStyle,
                    {
                      tintColor: focused
                        ? AppColors.primary
                        : AppColors.secondary,
                    },
                  ]}
                />
                <CustomText
                  color={AppColors.secondary}
                  size={2.8}
                  font={FontFamily.appFontMedium}>
                  Request
                </CustomText>
              </View>
            ),
          })}
        />
      }
      <Tab.Screen
        name={ScreenNames.RIDES}
        component={Rides}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View style={styles.tabView}>
              <Image
                source={Icons.rides}
                style={[
                  styles.iconStyle,
                  {
                    tintColor: focused
                      ? AppColors.primary
                      : AppColors.secondary,
                  },
                ]}
              />
              <CustomText
                color={AppColors.secondary}
                size={2.8}
                font={FontFamily.appFontMedium}>
                Rides
              </CustomText>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name={ScreenNames.ACCOUNT}
        component={Account}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View style={styles.tabView}>
              <Image
                source={Icons.account}
                style={[
                  styles.iconStyle,
                  {
                    tintColor: focused
                      ? AppColors.primary
                      : AppColors.secondary,
                  },
                ]}
              />
              <CustomText
                color={AppColors.secondary}
                size={2.8}
                font={FontFamily.appFontMedium}>
                Account
              </CustomText>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  iconStyle: {
    resizeMode: 'contain',
    width: width(7),
    height: height(4.5),
    tintColor: AppColors.primary,
  },
  tabView: {
    alignItems: 'center',
  },
});

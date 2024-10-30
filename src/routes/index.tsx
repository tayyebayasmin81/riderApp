import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ScreenNames from './routes';
import BottomTab from './bottom-tabs/bottom';
import {
  Account,
  Rides,
  Request,
  Dashboard,
  BookRide,
  PassengerDetail,
  ProgressScreen,
  SearchingDrivers,
  RideTracking,
  RideSummary,
  Verifying,
  VerifyingError,
  VerifyingDone,
} from '~screens';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={ScreenNames.BOTTOM_TABS}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.BOTTOM_TABS} component={BottomTab} />
        <Stack.Screen name={ScreenNames.DASHBOARD} component={Dashboard} />

        <Stack.Screen name={ScreenNames.RIDES} component={Rides} />
        <Stack.Screen name={ScreenNames.REQUEST} component={Request} />
        <Stack.Screen name={ScreenNames.ACCOUNT} component={Account} />
        <Stack.Screen name={ScreenNames.BOOK_RIDE} component={BookRide} />
        <Stack.Screen
          name={ScreenNames.PASSENGER_DETAIL}
          component={PassengerDetail}
        />
        <Stack.Screen name={ScreenNames.PROGRESS} component={ProgressScreen} />
        <Stack.Screen
          name={ScreenNames.SearchingDrivers}
          component={SearchingDrivers}
        />
        <Stack.Screen
          name={ScreenNames.RIDE_TRACKING}
          component={RideTracking}
        />
        <Stack.Screen name={ScreenNames.VERIFYING} component={Verifying} />
        <Stack.Screen
          name={ScreenNames.VERIFYING_ERROR}
          component={VerifyingError}
        />
        <Stack.Screen
          name={ScreenNames.VERIFYING_DONE}
          component={VerifyingDone}
        />
        <Stack.Screen name={ScreenNames.RIDE_SUMMARY} component={RideSummary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export {default as ScreenNames} from './routes';

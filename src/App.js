import 'react-native-gesture-handler';
import React from 'react';
import Login from './screens/Login';
import Profile from './screens/Profile';
import AddList from './screens/AddList';
import TodoList from './screens/TodoList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: '#4CD964',
        style: {
          borderTopColor: '#b3b3b3',
          paddingHorizontal: 60,
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name="TodoList"
        component={TodoList}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicon name="md-list-box" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="AddList"
        component={AddList}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicon name="ios-add" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="user" color={color} size={27} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookDonateScreen from '../screens/BookDonateScreen';
import PostJobsScreen from '../screens/PostJobsScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    //screen: BookDonateScreen,
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Search Jobs",
    }
  },
  BookRequest: {
    screen: PostJobsScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Post Jobs",
    }
  }
});
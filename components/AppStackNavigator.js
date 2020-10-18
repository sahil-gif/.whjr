import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import EmployerDetailsScreen from '../screens/EmployerDetailsScreen';


export const AppStackNavigator = createStackNavigator({
    BookDonateList :{
        screen : BookDonateScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    ReceiverDetails:{
        screen:EmployerDetailsScreen,
        navigationOptions:{
            headerShown:false
        }
    },
},
{
    initialRouteName:'BookDonateList'
}

);
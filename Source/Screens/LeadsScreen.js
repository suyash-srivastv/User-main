import React, {Component} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { StyleSheet, View, StatusBar } from 'react-native';
import Header_Component from '../Components/Header_Component';
import Colors from '../Utils/Colors';
import LeadHistoryScreen from './dashboard/Leads/LeadHistoryScreen';
import PitchedLeadScreen from './dashboard/Leads/PitchedLeadScreen';
import NewLeadScreen from './dashboard/Leads/NewLeadTabScreen';
import LeadBottomComponent from '../Components/LeadBottomComponent';

const Tab = createMaterialTopTabNavigator();

function LeadsTab() {
  return (
    <Tab.Navigator 
        sceneContainerStyle={{backgroundColor: Colors.darkgrey}}
        tabBarOptions={{
            style: {backgroundColor: 'transparent'},
            labelStyle: {color: 'white', textTransform: 'none', fontSize: 15},
            indicatorStyle: {backgroundColor: Colors.yellow}
        }}>
      <Tab.Screen 
        name="NewLeadsTab" 
        component={NewLeadScreen} 
        options={{title: 'New Leads'}}/>
      <Tab.Screen 
        name="PitchedLeads" 
        component={PitchedLeadScreen}
        options={{title: 'Pitched Leads'}}/>
      <Tab.Screen 
        name="History" 
        component={LeadHistoryScreen}
        options={{title: 'History'}}/>
    </Tab.Navigator>
  );
}

export default class LeadsScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.darkgrey}/>
                <Header_Component Heading="Request"/>
                {LeadsTab()}
                <View
                style={{height:3}}
                >

                </View>
                <LeadBottomComponent />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkgrey
    }
})
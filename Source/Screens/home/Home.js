import React, {Component, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

// import headerImage from '../Assets/Icons/HeaderIcon.png'

import headerImage from '../../Assets/Images/HomeWall.png';
import CFCover from '../../Assets/Images/cover.jpg';
import CFlogo from '../../Assets/Icons/CFlogo.png';
import CheckBox from 'react-native-check-box';

import RecentConversionComponent from '../../Components/RecentConversionComponent';
import LeadComponent from '../../Components/LeadComponent';
import UnitConvertorComponent from '../../Components/UnitConvertorComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeHeader from '../../Components/HomeHeader';
import {useNavigation} from '@react-navigation/native';
import Buttonq1 from '../../Components/Buttonq1';
import HomeCard from '../../Components/HomeCard';
export default class HomeScreen extends Component {
  render() {
    // let {dropDownVisible} = this.state;

    let array = new Array(1, 2, 3, 4, 5, 6, 7);
    return (
      <>
        <HomeHeader />

        <ScrollView
          style={{flex: 1, backgroundColor: '#121417', marginTop: -12}}>
          {/* <Image height={23} source={CFCover} style={styles.headerImage} /> */}
          <View>
            {/* <View
              style={{padding: 10, paddingHorizontal: 23, marginBottom: 12}}>
              <Image
                source={CFlogo}
                style={{marginVertical: 20, height: 40, width: '40%'}}
              />
              <Text style={{color: '#FFB600'}}>We are here to help you.</Text>
              <Text
                style={{
                  marginTop: 12,
                  color: 'white',
                  fontSize: 25,
                  // fontWeight: 'bold',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // alignContent: 'center',
                  // textAlign: 'center',
                }}>
                Welcome to ConstructionFlow
              </Text>

              <Text style={{color: 'white', marginVertical: 6}}>
                Can’t find your product in market?
              </Text>
              
              <Text style={{color: 'white', marginBottom: 32}}>
             Surely you’ll find here with
                best price and great quality.
              </Text>
              <Buttonq1 hi={43} wi={123} title="About us" />
            </View>
            <View
              style={{
                backgroundColor: '#FFB600',
                height: 93,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
                Be a real Business
              </Text>
              <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
                Be a part of Construction flow
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 22,
                marginVertical:12
              }}>
              <View style={styles.circle}>
                <Text style={{color: '#FFB600'}}>100%</Text>
              </View>

              <View style={styles.circle}>
                <Text style={{color: '#FFB600'}}>1000+</Text>
              </View>

              <View style={styles.circle}>
                <Text style={{color: '#FFB600'}}>10k+</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 22,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Customer</Text>
                <Text style={{color: 'white'}}> Satisfaction</Text>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Active Customer</Text>
                <Text style={{color: 'white'}}> & Vendor</Text>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Material</Text>
                <Text style={{color: 'white'}}> Transported</Text>
              </View>
            </View>
            <View
            
            style=
            {{borderColor:'white',marginVertical:32,borderWidth:.2}}
            ></View>
            <View style={{paddingHorizontal: 23}}>
              <Text
                style={{
                  marginVertical: 12,
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Our Services
              </Text>
              <Text style={{color: '#FFB600', marginVertical: 8}}>
                ✓ Everything for the construction
              </Text>
              <Text style={{color: '#FFB600', marginVertical: 8}}>
                ✓ No more paperwork
              </Text>
              <Text style={{color: '#FFB600', marginVertical: 8}}>
                ✓ The best deals free construction site
              </Text>
            </View>

<View>


</View>
            <View>
              {/* <UnitConvertorComponent /> */}
            {/* <View style={{height: 134}}></View> */}
            {/* <RecentConversionComponent /> */}
            {/* <LeadComponent navigation={this.props.navigation} /> */}
            {/* </View>
             */}
<HomeCard />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121417',
    flex: 1,
    marginTop: -12,
  },
  headerImage: {
    height: 270,
    width: 470,
    resizeMode: 'stretch',
  },
  contentContainer: {
    padding: 10,
  },
  circle: {
    height: 62,
    width: 62,

    borderColor: '#FFB600',
    borderWidth: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
    // paddingTop: 15,
    margin: 12,
  },
});

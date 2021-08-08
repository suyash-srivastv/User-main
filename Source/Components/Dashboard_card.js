import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Colors from '../Utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextStyles from '../Assets/Styles/TextStyles';

const Dashboard_card = ({Icon, Title}) => {
  return (
    <View style={styles.Box}>
      <View style={styles.Left_View}>
        <Image 
        style={{height:30,
        width:30}}
        source={Icon} />
      </View>
      <View style={styles.Right_view}>
        <Text style={[TextStyles.White_text, {flex: 1}]}>{Title}</Text>

        <Ionicons name="caret-forward-outline" color={Colors.grey} />
      </View>
    </View>
  );
};

export default Dashboard_card;

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 72,
    marginVertical:8,
    alignItems: 'center',
    backgroundColor: Colors.blackBlue,
    flexDirection: 'row',
    shadowColor: Colors.lightgrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
  },
  Left_View: {
    height: 72,
    width:'20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Right_view: {
    borderLeftWidth: 0.7,
    borderLeftColor: Colors.grey,

    height: 72,
    width: '80%',
    flexDirection: 'row',
justifyContent:'space-between',
alignItems:'center',
    padding: 12,
  },
  Icon: {height: 40, width: 40},
});

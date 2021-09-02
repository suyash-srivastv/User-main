import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import Header_Component from '../../Components/Header_Component';
import ProgressBar from 'react-native-progress/Bar';
import Colors from '../../Utils/Colors';
import ProfileInput from '../../Components/ProfileInput';
import Button from '../../Components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

const Profile_Details = ({navigation, percentage = 0}) => {
  const submitx = () => {
    setFormData({
      first_name: name,
      phone_no: phone,
      email: email,
      whatsapp_no: wpp,
    });
    axios
      .post(`http://192.168.254.103:7000/user/updateUser/67`, formData)
      .then(response => {
        console.log(response);
        alert('Saved');
      });
  };
  const [formData, setFormData] = useState('');

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [wpp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView>
      <View style={Styles.ProfileDetails_container}>
        <View
          style={{
            height: 65,
            justifyContent: 'center',
            padding: 13,
            borderBottomColor: 'grey',
            borderBottomWidth: 0.3,
            marginBottom: 23,
          }}>
          <Text style={{color: 'white'}}>Personal Information</Text>
        </View>
        <View style={{paddingHorizontal: 22}}>
          <Text style={{color: 'grey'}}>Name</Text>

          <ProfileInput
            placeholder="Name"
            onChangeText={text => setname(text)}
          />
          <Text style={{color: 'grey', marginVertical: 12}}>Email ID</Text>
          <ProfileInput
            placeholder="Email ID"
            onChangeText={text => setEmail(text)}
          />
          <View style={{justifyContent: 'space-between'}}>
            <View>
              <Text style={{color: 'grey', marginVertical: 12}}>
                Phone Number
              </Text>
              <ProfileInput
                placeholder="Phone No."
                onChangeText={text => setPhone(text)}
              />
            </View>
            <View>
              {' '}
              <Text style={{color: 'grey', marginVertical: 12}}>
                Whatsapp Number
              </Text>
              <ProfileInput
                onChangeText={text => setWhatsapp(text)}
                placeholder="Whatsapp No."
              />
            </View>
          </View>

          <ProfileInput
            placeholder="Password"
            onChangeText={text => setPassword(text)}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 50,
              justifyContent: 'space-between',
              width: 152,

              alignSelf: 'center',
            }}>
            <Button
              title="Save"
              onPress={submitx}
              style={{height: 40, width: 70}}
              textStyle={{color: Colors.blackBlue}}
            />
            <Button
              title="Next"
              style={Styles.Next}
              textStyle={{color: Colors.yellow}}
              onPress={() =>
                navigation.navigate('Company_Details', {percentage: 33})
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile_Details;

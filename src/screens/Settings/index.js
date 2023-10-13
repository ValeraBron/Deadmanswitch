import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import theme from '../../../theme';
import ToggleSwitch from 'toggle-switch-react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Settings({navigation}) {
  const [phone, setPhone] = useState(false);
  const [call, setCall] = useState(false);
  const [email, setEmail] = useState(false);
  const [sms, setSms] = useState(false);
  const [certificate, setCertificate] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-small-left" color="#3B82F7" size={30} />
        </TouchableOpacity>
        <Text style={styles.appName}>Settings</Text>
      </View>
      <ScrollView>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-icon/user_318-563642.jpg?w=360',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.label}>Client</Text>
        <View style={styles.profileDetailsMain}>
          <TouchableOpacity style={styles.profileDetails}>
            <Text style={styles.identyTxt}>Identity</Text>
            <Entypo name="chevron-small-right" color="#3C3C434D" size={25} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.profileDetails}>
            <Text style={styles.identyTxt}>Security</Text>
            <Entypo name="chevron-small-right" color="#3C3C434D" size={25} />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>PRESENCE DETECTION</Text>
        <View style={styles.profileDetailsMain}>
          <View style={styles.profileDetails}>
            <Text style={styles.identyTxt}>Phone</Text>
            <ToggleSwitch
              isOn={phone}
              onColor="#34C759"
              offColor="#78788029"
              label=""
              size="medium"
              onToggle={isOn => setPhone(isOn)}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.profileDetails}>
            <Text style={styles.identyTxt}>Call</Text>
            <ToggleSwitch
              isOn={call}
              onColor="#34C759"
              offColor="#78788029"
              label=""
              size="medium"
              onToggle={isOn => setCall(isOn)}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.profileDetails}>
            <Text style={styles.identyTxt}>Email</Text>
            <ToggleSwitch
              isOn={email}
              onColor="#34C759"
              offColor="#78788029"
              label=""
              size="medium"
              onToggle={isOn => setEmail(isOn)}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.profileDetails}>
            <Text style={styles.identyTxt}>SMS</Text>
            <ToggleSwitch
              isOn={sms}
              onColor="#34C759"
              offColor="#78788029"
              label=""
              size="medium"
              onToggle={isOn => setSms(isOn)}
            />
          </View>
        </View>
        <Text style={styles.label}>Trigger</Text>
        <View style={styles.profileDetailsMain}>
          <View style={styles.profileDetails}>
            <Text style={styles.identyTxt}>Certificate</Text>
            <ToggleSwitch
              isOn={certificate}
              onColor="#34C759"
              offColor="#78788029"
              label=""
              size="medium"
              onToggle={isOn => setCertificate(isOn)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  appName: {
    color: '#1D1D1F',
    fontSize: 17,
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.semiBold,
  },
  profileImage: {
    width: 92,
    height: 92,
    alignSelf: 'center',
    borderRadius: 92 / 2,
  },
  profileDetailsMain: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  identyTxt: {
    flex: 1,
    color: '#1D1D1F',
    fontSize: 17,
    fontFamily: theme.regular,
    // paddingVertical: 5,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#1D1D1F1F',
    marginVertical: 15,
  },
  label: {
    color: '#1D1D1F99',
    width: '80%',
    alignSelf: 'center',
    textTransform: 'uppercase',
    marginBottom: 5,
    marginTop: 30,
  },
});

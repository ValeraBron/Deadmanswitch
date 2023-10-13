import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import theme from '../../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from './Components/Header';
import RotatingImage from './Components/RotateImage';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, settext] = useState('');
  const [messages, setmessages] = useState([
    {
      name: 'DEADMANSWITCH',
      text: 'Hello, How can i help you?',
      username: 'DMS',
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <RotatingImage />
        <View style={styles.greenLight} />
      </View>
      <View style={styles.bottomSec}>
        <View style={styles.engageBtnMain}>
          <View style={styles.engageBtnSub}>
            <TouchableOpacity style={styles.engageBtn}>
              <FontAwesome color="#fff" name="power-off" size={33} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line} />
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.contactBtn}>
          <Text style={styles.contactTxt}>Contact</Text>
        </TouchableOpacity>
      </View>
      {/* Contact */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles._row}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign size={30} name="close" color={'#3B82F7'} />
              </TouchableOpacity>
              <Text style={styles.modalText}>Contact</Text>
            </View>
            <View style={styles._message_view}>
              {messages.map((val, i) => {
                return (
                  <View key={i} style={styles._message_row}>
                    <View style={styles._circle}>
                      <Text style={styles._username}>{val.username}</Text>
                    </View>
                    <View style={styles._details_view}>
                      <Text style={styles._name}>{val.name}</Text>
                      <Text style={styles._text}>{val.text}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles._footer}>
              <TextInput
                value={text}
                onChangeText={_ => settext(_)}
                style={styles._input}
              />
              <View style={styles._send_btn}>
                <AntDesign name="arrowup" size={18} color={'#fff'} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  earthImage: {
    height: 247,
    width: 247,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenLight: {
    width: 15,
    height: 15,
    backgroundColor: '#34C759',
    borderRadius: 15 / 2,
    marginTop: 60,
  },
  bottomSec: {
    backgroundColor: '#fff',
    height: 168,
    justifyContent: 'space-between',
  },
  contactBtn: {
    alignSelf: 'center',
  },
  contactTxt: {
    color: '#808080',
    fontSize: 17,
    fontFamily: theme.regular,
    marginBottom: 10,
  },
  engageBtnMain: {
    width: 132,
    height: 132,
    backgroundColor: '#eaedf3',
    borderRadius: 132 / 2,
    alignSelf: 'center',
    marginTop: -60,
    justifyContent: 'center',
    alignItems: 'center',
    // #3b82f7
  },
  engageBtnSub: {
    width: 110,
    height: 110,
    backgroundColor: '#c7d8f4',
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  engageBtn: {
    width: 88,
    height: 88,
    backgroundColor: '#3B82F7',
    borderRadius: 88 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: '#1D1D1F1F',
    alignSelf: 'center',
  },
  modalView: {
    marginTop: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // marginTop: 22,
  },
  modalText: {
    fontFamily: theme.bold,
    color: '#1D1D1F',
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
  },
  _row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  _message_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  _text: {
    color: '#1D1D1F',
    fontSize: 17,
    fontFamily: theme.medium,
  },
  _circle: {
    height: 36,
    width: 36,
    backgroundColor: '#1D1D1F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  _username: {
    color: '#fff',
    fontSize: 10,
    fontFamily: theme.semiBold,
  },
  _name: {
    color: '#808080',
    fontSize: 13,
    fontFamily: theme.medium,
  },
  _details_view: {
    flex: 1,
    paddingLeft: 10,

    // flexDirection:"column",
  },
  _message_view: {
    flex: 1,
  },
  _send_btn: {
    height: 32,
    width: 32,
    backgroundColor: '#3B82F7',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _input: {
    flex: 1,
    borderWidth: 1,
    height: 38,
    borderRadius: 17,
    borderColor: '#D2D5DA',
    marginRight: 10,
    color: '#1D1D1F',
    fontFamily: theme.medium,
    paddingHorizontal: 10,
  },
  _footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

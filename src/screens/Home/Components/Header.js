import React from 'react';
import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    const navigation = useNavigation()
  return (
   
<View style={styles.header}>
<TouchableOpacity>
  <Ionicons name="folder-outline" color="#1D1D1F" size={21} />
</TouchableOpacity>
<Text style={styles.appName}>Deadmanswitch</Text>
<TouchableOpacity onPress={() =>navigation.navigate('Settings')}>
  <MaterialIcons name="settings" color="#1D1D1F" size={21} />
</TouchableOpacity>
</View>
  );
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
      },
      appName: {
        color: '#1D1D1F',
        fontSize: 20,
        fontWeight: '700',
      },
  });
  
export default Header;






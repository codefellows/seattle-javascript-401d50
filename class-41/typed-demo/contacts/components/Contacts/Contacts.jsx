import { useState, useEffect } from 'react';
import { Text, View, FlatList, Button, Linking } from 'react-native';
import styles from './styles.js';
import * as ExpoContacts from 'expo-contacts';

function Contacts() {
  const [contactList, setContactList] = useState([]);

  // on Mount we should ask for permissions
  useEffect(() => {
    (async () => {
      const permissions = await ExpoContacts.requestPermissionsAsync();
      
      if (permissions.status === 'granted') {
        const { data } = await ExpoContacts.getContactsAsync();
        setContactList(data);
      }
    })();
  }, []);

  // make a phone call
  const call = (contact) => {

    // Example of linking:  using a protocol that our development environment can use.
    //    Browser:  HTTP
    //    Phone: SMS, phone calls (TEL).
    let number = contact.phoneNumbers[0].digits;
    let URL = `tel:number`;
    Linking.canOpenURL(URL)
      .then(supported => Linking.openURL(URL))
      .catch(err => console.error(err));
  }

  return (
    <View>
      <Text>List Contacts</Text>
      <FlatList
        data={contactList}
        renderItem={({ item }) => <Button
          title={item.name}
          onPress={() => call(item)}
        />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Contacts;
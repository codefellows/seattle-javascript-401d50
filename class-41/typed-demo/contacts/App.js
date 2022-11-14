import { StatusBar } from 'expo-status-bar';
// things that we took for granted, our elements now come from react native.
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Contacts from './components/Contacts/Contacts.jsx';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello from React!</Text>
      <Text>This text goes below</Text>
      <StatusBar style="auto" />
      <Contacts />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  doubleContainer: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

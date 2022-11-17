import { StatusBar } from 'expo-status-bar';
// things that we took for granted, our elements now come from react native.
import { StyleSheet, SafeAreaView } from 'react-native';
import Contacts from './components/Contacts/Contacts.jsx';
import AppBar from './components/AppBar/AppBar';
import {
  NativeBaseProvider,
  Text,
  Box,
  AspectRatio,
  Center,
  Stack,
  Heading,
  HStack,
  Image
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <AppBar />
        <Contacts />
        <StatusBar style="auto" />
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
          <Text>Here is text</Text>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
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

import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Box, Button, Text, Image } from 'native-base';

function ImageGallery() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Box flex="1" width="100%" alignItems="center" justifyContent="space-between">
      <Box height="75%" justifyContent="center">
        {
          image
            ? <Image size="2xl" alt="selected image" source={{ uri: image }} />// render image
            : <Text>No Image Selected</Text>// render text saying no image selected
        }
      </Box>
      <Button bg="violet.600" width="75%" margin={20} onPress={pickImage}>Select an Image</Button>
    </Box>
  )
}

export default ImageGallery;

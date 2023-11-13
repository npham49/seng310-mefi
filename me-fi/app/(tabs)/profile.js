import { View } from "react-native";
import { Button, Image, Text } from "react-native-ui-lib";
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from "react-redux";

export default function profile() {
  // get username from redux store
  const username = useSelector((state) => state.user.name);
  const status = useSelector((state) => state.status.value);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "top",
        marginTop: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          alignContent: "center",
          justifyContent: "top",
        }}
      >
        <Image
          style={{
            width: "77%",
            height: "45%",
            alignSelf: "center",
            marginTop: 10,
            borderRadius: 180,
          }}
          source={
            image? { uri: image } :
            require("../../assets/user.png")}
        />
        {/* Edit progile picture button */}
        <Button
          style={{
            height: "7%",
            alignSelf: "center",
            marginTop: 10,
          }}
          label="Edit Photo"
          backgroundColor="#ccc"
          color="#000"
          borderRadius={10}
          onPress={pickImage}
        />

      <View
        style={{
          padding: "5%",
          width: "100%",
          height: "100%",
          alignContent: "center",
          justifyContent: "top",
        }}
      >
      {/* User name text title */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Username:{" "}
        <Text style={{ fontWeight: "normal" }}>{String(username).includes("davyjones")? "davejones": "randomCyclist"}</Text>
      </Text>
      {/* User name text title */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
         
        }}
      >
        Name:{" "}
        <Text style={{ fontWeight: "normal" }}>{String(username).includes("davyjones")? "Davy Jones": "A Random Cyclist"}</Text>
      </Text>
      {/* phone number */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
         
        }}
      >
        Phone Number:{" "}
        <Text style={{ fontWeight: "normal" }}>
          555-555-5555
        </Text>
      </Text>
      {/* Emergency contact button */}
      <Button
        style={{
          height: "7%",
          alignSelf: "center",
          marginTop: "5%",
        }}
        label="Emergency Contacts"
        backgroundColor="#222"
        color="white"
        borderRadius={10}
      />

      </View>
      </View>
    </View>
  );
}

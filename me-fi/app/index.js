import { View, SafeAreaView } from "react-native";
import React from "react";
import { TextField, Text, Button, Colors } from "react-native-ui-lib";
import { Link } from "expo-router";

export default function Login() {
  const [email, onChangeEmail] = React.useState("");
  const [number, onChangePass] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* login label with app name */}
      <Text text40 dark10 center style={{ marginBottom: 100 }}>
        Login to Biking Lizards
      </Text>
      <SafeAreaView>
        <View style={{ flexDirection: "column", width: "100%" }}>
        <TextField
          placeholder={"Email"}
          onChangeText={onChangeEmail}
          containerStyle={{ length: "70%" }}
          enableErrors
          label="Email"
          labelStyle={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}
          validate={["required", "email", (value) => value.length > 6]}
          validationMessage={[
            "Field is required",
            "Email is invalid",
            "Password is too short",
          ]}
        />
        <TextField
          placeholder={"Password"}
          onChangeText={onChangePass}

          containerStyle={{ length: "70%", marginBottom: 50 }}
          enableErrors
          label="Password"
          labelStyle={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}
          validate={["required", "email", (value) => value.length > 6]}
          validationMessage={[
            "Field is required",
            "Email is invalid",
            "Password is too short",
          ]}
        />
        </View>
        <View style={{ flexDirection: "row", width: "70%" }}>
          <Link href="/map"
          style={{marginRight: 10}}
          asChild>
            <Button
              label={"Login"}
              size={Button.sizes.large}
              backgroundColor={Colors.grey1}
            />
          </Link>
          <Link href="/signup" asChild>
            <Button
              label={"Signup"}
              size={Button.sizes.large}
              backgroundColor={Colors.grey1}
            />
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
}

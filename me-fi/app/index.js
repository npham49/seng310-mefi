import { View, SafeAreaView } from "react-native";
import React from "react";
import { TextField, Text, Button, Colors } from "react-native-ui-lib";
import { Link } from "expo-router";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";

export default function Login() {
  // access redux store to set user name
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

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
          onChangeText={setEmail}
          autoCapitalize="none"
          autoComplete="email"
          inputMode="email"
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
          onChangeText={setPass}
          autoCapitalize="none"
          secureTextEntry={true}
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
              onPress={() => {
                dispatch(login(email));
              }}
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

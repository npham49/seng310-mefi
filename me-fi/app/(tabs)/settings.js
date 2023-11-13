import { View, Text, Pressable } from "react-native";
import { Colors, Image } from "react-native-ui-lib";
import { Link } from "expo-router";
import { logout } from "../../redux/user";
import { useDispatch } from "react-redux";

export default function settings() {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "top",
      }}
    >
      <Image
        style={{ width: "87%", height: "94%" }}
        source={require("../../assets/settings.png")}
      />
      <View
        style={{
          backgroundColor: "#eee",
          width: "100%",
          height: "6%",
          flexDirection: "row",
          paddingHorizontal: "6%",
          paddingVertical: "2%",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontStyle: "italic",
            color: "blue",
          }}
        >
          Replay Tutorial
        </Text>
        <Link href="/" asChild>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontStyle: "italic",
                color: Colors.$iconDanger,
              }}
            >
              Logout
            </Text>
        </Link>
      </View>
    </View>
  );
}

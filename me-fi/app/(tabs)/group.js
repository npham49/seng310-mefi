import { View, Text } from "react-native";
import { Button, Image } from "react-native-ui-lib";

const arr = [0, 1, 2, 3, 4];

export default function group() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "top",
        marginTop: 10,
      }}
    >
      <View style={{ width: "100%", height: "100%" }}>
        {/* Create a new group button */}
        <Button
          style={{
            width: "77%",
            height: "7%",
            alignSelf: "center",
            marginTop: 10,
          }}
          label="Create New Group"
          backgroundColor="#222"
          color="white"
          borderRadius={10}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: "#222",
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Groups
        </Text>
        <View
          style={{
            marginTop: 10,
            borderColor: "#aaa",
            borderWidth: 4,
            width: "80%",
            height: "70%",
            borderRadius: 40,
            alignSelf: "center",
            padding: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: 'flex-start',
          }}
        >
          <Image
            style={{
              width: "27%",
              height: "18%",
              borderRadius: 180,
              borderWidth: 2,
              borderColor: "#aaa",
              backgroundColor: "#eee",
              margin:8,
            }}
            source={require("../../assets/group.png")}
          />
          <Image
            style={{
              width: "27%",
              height: "18%",
              borderRadius: 180,
              borderWidth: 2,
              borderColor: "#aaa",
              backgroundColor: "#eee",
              margin:8,
            }}
            source={require("../../assets/group.png")}
          />
          <Image
            style={{
              width: "27%",
              height: "18%",
              borderRadius: 180,
              borderWidth: 2,
              borderColor: "#aaa",
              backgroundColor: "#eee",
              margin:8,
            }}
            source={require("../../assets/group.png")}
          />
          <Image
            style={{
              width: "27%",
              height: "18%",
              borderRadius: 180,
              borderWidth: 2,
              borderColor: "#aaa",
              backgroundColor: "#eee",
              margin:8,
            }}
            source={require("../../assets/group.png")}
          />
        </View>
      </View>
    </View>
  );
}

import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import Upcoming from "../../components/journal/Upcoming";

export default function Journal() {
  const [tab, setTab] = useState("journal");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "top",
        marginTop: 40,
      }}
    >
      <View style={styles.containerTabs}>
        <Pressable
          onPress={() => setTab("journal")}
          style={tab === "journal" ? styles.tabsActive : styles.tabs}
        >
          <Text
            style={{
              color: tab === "journal" ? "#fff" : "#000",
              fontWeight: tab === "journal" ? "bold" : "normal",
            }}
          >
            Upcoming
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setTab("history")}
          style={tab === "history" ? styles.tabsActive : styles.tabs}
        >
          <Text
            style={{
              color: tab === "history" ? "#fff" : "#000",
              fontWeight: tab === "history" ? "bold" : "normal",
            }}
          >
            History
          </Text>
        </Pressable>
      </View>
      <View style={{backgroundColor: "#eee", width:"100%", height:"100%" }}>
        {tab === "journal" ? <Upcoming /> : <Text>History</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    width: "100%",
  },
  tabs: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    backgroundColor: "#ccc",
    width: "30%",
    textAlign: "center",
    paddingVertical: 7,
    marginHorizontal: 10,
  },
  tabsActive: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 35,
    backgroundColor: "#111",
    textAlign: "center",
    paddingVertical: 7,
    marginHorizontal: 10,
  },
});

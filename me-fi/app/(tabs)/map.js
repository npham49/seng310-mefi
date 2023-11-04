import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import MapComponent from "../../components/map/Map";
import HelpModal from "../../components/modals/Help";
import { useSelector } from 'react-redux'

export default function Map() {
  const [tab, setTab] = useState("map");
  const status = useSelector((state) => state.status.value)
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "top",
        marginTop: 40,
      }}
    >
      <HelpModal />
      <View style={styles.containerTabs}>
        <Pressable
          onPress={() => setTab("map")}
          style={tab === "map" ? styles.tabsActive : styles.tabs}
        >
          <Text
            style={{
              color: tab === "map" ? "#fff" : "#000",
              fontWeight: tab === "map" ? "bold" : "normal",
            }}
          >
            Map
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setTab("info")}
          style={tab === "info" ? styles.tabsActive : styles.tabs}
        >
          <Text
            style={{
              color: tab === "info" ? "#fff" : "#000",
              fontWeight: tab === "info" ? "bold" : "normal",
            }}
          >
            Info
          </Text>
        </Pressable>
      </View>
      <View style={{backgroundColor: "#eee", width:"100%", height:"100%" }}>
        {tab === "map" ? <MapComponent /> : <Text>{status}</Text>}
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

import { Colors, Image, View, Button } from "react-native-ui-lib";
import { useDispatch } from "react-redux";
import { setHelp } from "../../redux/status";

const MapComponent = () => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          width: "15%",
          height: "100%",
          paddingBottom: "15%",
        }}
      >
        <Image
          style={{ width: "100%", height: "50%", marginTop: "20%" }}
          source={require("../../assets/mapSidebar.png")}
        />
        <Button
          label={"H"}
          style={{ width: "80%", height: "10%", padding: 0 }}
          labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          backgroundColor={Colors.$textDanger}
          size={Button.sizes.xSmall}
          onPress={() => {
            dispatch(setHelp());
          }}
        />
      </View>
      <Image
        style={{ width: "83%", height: "92%" }}
        source={require("../../assets/map.png")}
      />
    </View>
  );
};

export default MapComponent;

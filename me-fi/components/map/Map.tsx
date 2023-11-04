import { Colors, Image, View, Text } from "react-native-ui-lib";
import { useDispatch, useSelector } from "react-redux";
import { setHelp, setOpenControl } from "../../redux/status";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import { useRef } from "react";

const MapComponent = () => {
  const status = useSelector((state: any) => state.status.value);
  const dispatch = useDispatch();
  const doubleTapRef = useRef(null);

  const onSingleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      dispatch(setHelp());
    }
  };

  const onDoubleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      dispatch(setOpenControl());
    }
  };

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
        <TapGestureHandler
          onHandlerStateChange={onSingleTapEvent}
          waitFor={doubleTapRef}
        >
          <TapGestureHandler
            ref={doubleTapRef}
            onHandlerStateChange={onDoubleTapEvent}
            numberOfTaps={2}
          >
            <View
              style={{
                width: "100%",
                height: "10%",
                padding: 0,
                borderWidth: 5,
                borderColor: Colors.$textDanger,
                borderRadius: 40,
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  width: "100%",
                  height: "100%",
                  textAlignVertical: "center",
                  textAlign: "center",
                  margin: "auto",
                  fontSize: 35,
                  fontWeight: "bold",
                  color: Colors.$textDanger,
                  marginTop: 6,
                }}
              >
                H
              </Text>
            </View>
          </TapGestureHandler>
        </TapGestureHandler>
      </View>
      <Image
        style={{ width: "83%", height: "92%" }}
        source={
          status === "offline"
            ? require("../../assets/map.png")
            : status === "active"
            ? require("../../assets/mapActive.png")
            : status === "assist"
            ? require("../../assets/mapAssist.png")
            : require("../../assets/mapActive.png")
        }
      />
      {/* show status as an overlay on bottom right of the map */}
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          right: 0,
          bottom: "7%",
          elevation: 2,
          borderColor: "black",
          borderWidth: 5,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            padding: 5,
            fontSize: 20,
            fontWeight: "500",
            color: "black",
          }}
        >
          Status:{" "}
        </Text>
        <Text
          style={{
            padding: 5,
            height: "100%",
            fontSize: 20,
            fontWeight: "500",
            color: "black",
            backgroundColor:
              status === "offline"
                ? Colors.red30
                : status === "idle"
                ? Colors.yellow30
                : status === "active"
                ? Colors.green30
                : status === "assist"
                ? Colors.red30
                : Colors.yellow30,
          }}
        >
          {status === "offline"
                ? "OFFLINE"
                : status === "idle"
                ? "IDLE"
                : status === "active"
                ? "ACTIVE"
                : status === "assist"
                ? "ASSIST"
                : "LOADING"}
        </Text>
      </View>
    </View>
  );
};

export default MapComponent;

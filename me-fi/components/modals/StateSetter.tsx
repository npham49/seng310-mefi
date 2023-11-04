import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import {
  Colors,
  View,
  Button,
  Text,
  Modal,
} from "react-native-ui-lib";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setIdle, setOffline, setProximityAlert} from "../../redux/status";

const StateSetterModal = () => {
  const status = useSelector((state: any) => state.status.value)
  const dispatch = useDispatch();

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={status==="openControl"}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: "row",
                padding: 20,
                width: "100%",
                height: "auto",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: "auto",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.modalText}>Set Application State</Text>
              </View>
            </View>
              <Button
                label={"Proximity Alert"}
                labelStyle={{ fontSize: 20, fontWeight: "bold" }}
                size={Button.sizes.large}
                backgroundColor={Colors.black}
                onPress={() => {
                  dispatch(setProximityAlert());
                } }
                style={{
                  marginBottom: 10,
                  borderRadius: 10,
                  width: "90%",
                  alignSelf: "center",
                  marginVertical:"auto",
                }} />
              <Button
                label={"Active"}
                labelStyle={{ fontSize: 20, fontWeight: "bold" }}
                size={Button.sizes.large}
                backgroundColor={Colors.black}
                onPress={() => {
                  dispatch(setActive());
                } }
                style={{
                  marginBottom: 10,
                  borderRadius: 10,
                  width: "90%",
                  alignSelf: "center",
                  marginVertical:"auto",
                }} />
                <Button
                label={"Offline"}
                labelStyle={{ fontSize: 20, fontWeight: "bold" }}
                size={Button.sizes.large}
                backgroundColor={Colors.black}
                onPress={() => {
                  dispatch(setOffline());
                } }
                style={{
                  marginBottom: 10,
                  borderRadius: 10,
                  width: "90%",
                  alignSelf: "center",
                  marginVertical:"auto",
                }} />
                              <Button
                label={"Idle"}
                labelStyle={{ fontSize: 20, fontWeight: "bold" }}
                size={Button.sizes.large}
                backgroundColor={Colors.black}
                onPress={() => {
                  dispatch(setIdle());
                } }
                style={{
                  marginBottom: 10,
                  borderRadius: 10,
                  width: "90%",
                  alignSelf: "center",
                  marginVertical:"auto",
                }} />
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "80%",
    height: "40%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    position: "absolute",
    right: -10,
    top: -10,
    borderRadius: 40,
    paddingHorizontal: 13,
    paddingVertical: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "black",
    zIndex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalTextSub: {
    marginBottom: 15,
    fontSize: 15,
    fontWeight: "600",
  },
});

export default StateSetterModal
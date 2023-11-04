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
import {setActive, setOffline, setAlert} from "../../redux/status";
import { useEffect, useState } from "react";

const HelpModal = () => {
  const [countdown, setCountdown] = useState(60)
  const status = useSelector((state: any) => state.status.value)
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "help") {
      setCountdown(60)
      const interval = setInterval(() => {
        setCountdown((c) => c - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [status])

  useEffect(() => {
    if (countdown === 0) {
      dispatch(setAlert())
    }
  }, [countdown])

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={status==="help"||status==="alert"}
        onBackgroundPress={() => {
          dispatch(setOffline())
        }}
        onRequestClose={() => {
          dispatch(setActive())
        }}
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
                <Text style={styles.modalText}>ALERT</Text>
              </View>
            </View>
            {status==="help" ? <><Text
            style={{
              width: "100%",
              marginBottom: 15,
              textAlign: "center",
              fontSize: 15,
              fontWeight: "400",
              paddingHorizontal: 20,
            }}
          >
            ALERT! Sending help request to riders in proximity in...
          </Text><Text
            style={{
              width: "100%",
              marginBottom: 15,
              textAlign: "center",
              fontSize: 40,
              fontWeight: "400",
              paddingHorizontal: 20,
              color: "red",
            }}
          >
              {countdown}
            </Text></>: 
            <Text style={{...styles.modalText,padding:20,fontWeight:"600"}}>ALERTING OTHER RIDERS...</Text>}
            <Link href="/map" asChild>
              <Button
                label={"I'm okay"}
                labelStyle={{ fontSize: 20, fontWeight: "bold" }}
                size={Button.sizes.large}
                backgroundColor={Colors.red20}
                onPress={() => {
                  dispatch(setOffline());
                } }
                style={{
                  marginBottom: 10,
                  borderRadius: 10,
                  width: "90%",
                  alignSelf: "center",
                  marginTop: "auto",
                }} />
            </Link>
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
    borderColor: "red",
    borderWidth: 5,
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
    color: "red",
  },
  modalTextSub: {
    marginBottom: 15,
    fontSize: 15,
    fontWeight: "600",
  },
});

export default HelpModal
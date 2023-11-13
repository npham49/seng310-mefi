import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import {
  Colors,
  Image,
  View,
  Card,
  Button,
  Text,
  Modal,
} from "react-native-ui-lib";
import { useDispatch } from "react-redux";
import { setIdle } from "../../redux/status";

const cardImage = require("../../assets/content.png");

const data: any[] = [
  {
    title: "Trip 1",
    time: "02:00PM",
    date: "Nov 1st",
    description: "Rough terrain quick trip",
    location: "Mänttä-Vilppula"
  },
  {
    title: "Trip 2",
    time: "07:00AM",
    date: "Nov 15th",
    description: "Quick morning trip at",
    location: "Helsinki"
  },
  {
    title: "Trip 3",
    time: "02:00PM",
    date: "Nov 20th",
    description: "Quick trip",
    location: "Oulu"
  },
];

const Upcoming = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalText, setModalText] = useState({
    title: "",
    time: "",
    date: "",
    description: "",
    location: ""
  });
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onBackgroundPress={() => {
          setIsVisible(false);
        }}
        onRequestClose={() => {
          setIsVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsVisible(!isVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
            <View
              style={{
                flexDirection: "row",
                padding: 20,
                width: "100%",
                height: "auto",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  width: "50%",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.modalText}>{modalText.title}</Text>
                <Text style={styles.modalTextSub}>
                  Time: {modalText.time}
                  {"\n"}Date: {modalText.date}
                  {"\n"}Location: {modalText.location}
                </Text>
              </View>
              <Image
                style={{ width: 140, height: 130, borderRadius: 10 }}
                source={cardImage}
                resizeMode="cover"
              />
            </View>
            <Text
              style={{
                marginBottom: 15,
                textAlign: "center",
                fontSize: 15,
                fontWeight: "400",
                paddingHorizontal: 20,
              }}
            >
              {modalText.description}
            </Text>
            <Link href="/map" asChild>
              <Button
                label={"Start trip"}
                size={Button.sizes.large}
                backgroundColor={Colors.grey1}
                onPress={() => {
                  setIsVisible(false);
                  dispatch(setIdle());
                } 
                }
                style={{
                  marginBottom: 10,
                  borderRadius: 10,
                  width: "90%",
                  alignSelf: "center",
                  marginTop: "auto",
                }}
              />
            </Link>
          </View>
        </View>
      </Modal>
      <View centerH flex marginV-10 >
                {/* createa a new trip button */}
        <Button
          label={"Create a new trip"}
          size={Button.sizes.large}
          backgroundColor={Colors.grey1}
          style={{
            marginBottom: 10,
            borderRadius: 10,
            width: "90%",
            alignSelf: "center",
          }}
        />
        {data.map((item: any, index) => {
          return (
            <Card
              key={item.title}
              style={{
                width: "90%",
                height: 120,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}
              row
              centerV
              onPress={() => {
                setIsVisible(true);
                setModalText({
                  title: item.title,
                  time: item.time,
                  date: item.date,
                  description: item.description,
                  location: item.location
                });
              }}
            >
              <Card.Section
                imageSource={cardImage}
                imageStyle={{
                  height: "100%",
                  width: 100,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              />
              <View
                flex
                style={{
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                  height: "100%",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}
                >
                  {item.title} - {item.date} - {item.time}
                </Text>
                <Text style={{ marginBottom: 10, fontSize: 15, color: "grey" }}>
                  {item.description}
                </Text>
              </View>
            </Card>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "80%",
    height: "60%",
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

export default Upcoming;

import { View, Card, Text } from "react-native-ui-lib";

const cardImage = require("../../assets/content.png");

const data: any[] = [
  {
    title: "Trip 1",
    time: "02:00PM",
    date: "Feb 1st",
    description: "Rough terrain quick trip",
    location: "Mänttä-Vilppula",
    group: "Happy Bikers",
  },
  {
    title: "Trip 2",
    time: "07:00AM",
    date: "Feb 15th",
    description: "Quick morning trip at",
    location: "Helsinki",
    group: "Adventure Seekers",
  },
  {
    title: "Trip 3",
    time: "02:00PM",
    date: "Feb 20th",
    description: "Quick trip",
    location: "Oulu",
    group: "Happy Bikers",
  },
];

const History = () => {
  return (
    <>
      <View centerH flex marginV-10>
        {data.map((item: any, index) => {
          return (
            <Card
              key={item.title}
              style={{
                width: "90%",
                height: 150,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}
              row
              centerV
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
                <Text
                  style={{ marginBottom: 10, fontSize: 15, color: "black" }}
                >
                  Biking trip with {item.group}
                </Text>
              </View>
            </Card>
          );
        })}
        <Text
          style={{
            marginBottom: 10,
            fontSize: 15,
            color: "black",
            fontStyle: "italic",
          }}
        >
          End of History
        </Text>
      </View>
    </>
  );
};

export default History;

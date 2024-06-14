import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

type DayListItem = {
  day: number;
};

const DayListItem = ({ day }: DayListItem) => {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
    fontFamily: "AmaticBold",
  },
});

export default DayListItem;

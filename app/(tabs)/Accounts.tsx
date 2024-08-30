// Import statements for components in React Native
import { Dimensions, StyleSheet, TextInput } from "react-native";
import { View, Text, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.totalBalanceContainer}>
        <Text style={styles.totalBalanceNum}> Apple 401k </Text>
      </View>
      <View style={styles.graphContainer}>
        <Image
          style={styles.graph}
          source={require("../../assets/images/graph.png")}
        />
      </View>
      <Text> Table will go here </Text>
    </ScrollView>
  );
}

const { width, height } = Dimensions.get("window"); // Get screen dimensions

// Stylesheet parameters
const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "lightgrey",
  },
  totalBalanceContainer: {
    paddingTop: 50,
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 1,
  },
  totalBalanceNum: {
    fontSize: 30,
  },
  graphContainer: {
    width: width,
    height: height / 2,
    borderWidth: 5, // Thickness of the border
    borderColor: "blue", // Color of the border
    borderStyle: "solid", // Style of the border (solid, dashed, dotted)
    alignItems: "center",
  },
  graph: {
    width: "100%",
    //resizeMode: 'stretch',
    height: "100%",
    aspectRatio: 1,
  },

  tableContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableCell: {
    width: "33.33%", // 100% / 3 columns
    height: "20%", // 100% / 5 rows
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  tableText: {
    fontSize: 16,
    color: "#000",
  },
});

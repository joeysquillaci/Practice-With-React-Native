// Import statements for components in React Native
import { Dimensions, StyleSheet, TextInput } from "react-native";
import { View, Text, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// Function for displaying HomeScreen()
export default function HomeScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.totalBalanceContainer}>
        <Text style={styles.totalBalanceTitle}> Total Balance </Text>
        <Text style={styles.totalBalanceNum}> $1,000,000 thousand </Text>
      </View>
      <View style={styles.graphContainer}>
        <Image
          style={styles.graph}
          source={require("../../assets/images/graph.png")}
        />
      </View>
      <View style={styles.accountSelectionContainer}>
        <View style={styles.accountSelection}>
          <Text> 401k </Text>
        </View>
        <View style={styles.accountSelection}>
          <Text> Roth IRA </Text>
        </View>
        <View style={styles.accountSelection}>
          <Text> Taxable Brokerage </Text>
        </View>
      </View>
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
    //backgroundColor: "lightblue",
    paddingTop: 50,
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 1,
  },
  totalBalanceTitle: {
    fontSize: 20,
  },
  totalBalanceNum: {
    fontSize: 30,
  },
  graphContainer: {
    width: width,
    height: height / 2,
    //aspectRatio: 1,
    borderWidth: 5, // Thickness of the border
    borderColor: "blue", // Color of the border
    borderStyle: "solid", // Style of the border (solid, dashed, dotted)
    //overflow: 'hidden',
    alignItems: "center",
  },
  graph: {
    width: "100%",
    //resizeMode: 'stretch',
    height: "100%",
    aspectRatio: 1,
  },
  accountSelectionContainer: {
    borderColor: "lime",
    borderWidth: 2,
    padding: 10,
  },
  accountSelection: {
    borderColor: "red",
    borderWidth: 2,
    marginBottom: 5,
    backgroundColor: "grey",
    borderRadius: 10,
    padding: 5,
  },
});

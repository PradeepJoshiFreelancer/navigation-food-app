import { StyleSheet, Text, View } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 18,
        color: "#e2b497",
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleContainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 1,
      },
})
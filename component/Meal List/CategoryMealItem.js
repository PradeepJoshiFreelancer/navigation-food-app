import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealRecipeDetails from "../MealRecipeDetails";

function CategoryMealItem({
  mealId,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  const handleMealItemPress = () => {
    navigation.navigate("MealDetails", {
      mealId: mealId,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: "#ccc" }}
        onPress={handleMealItemPress}
      >
        <View style={styles.inncerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealRecipeDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryMealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  inncerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.25,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});

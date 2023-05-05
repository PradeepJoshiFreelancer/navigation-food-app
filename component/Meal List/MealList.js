import { FlatList, StyleSheet, View } from "react-native";
import CategoryMealItem from "./CategoryMealItem";

function MealList({items}){
    const renderMealItem = (itemData) => {
        const item = itemData.item;
        const itemPropsData = {
          mealId: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        };
        return <CategoryMealItem {...itemPropsData} />;
      };
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );

}
export default MealList


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
import {View, StyleSheet, FlatList} from 'react-native';

import MealItem from './MealItem';


function MealsList({items}){

    function renderMealItem(itemData){

        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title ,
            imageURL: itemData.item.imageUrl, 
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration,
        }



        return(
            <MealItem 
                {...mealItemProps}
                />
        );
    };

    return(
        <View style={styles.container}>
            <FlatList
                data = {items}
                keyExtractor = {(item)=>item.id} 
                renderItem = {renderMealItem}
            />
        </View>
    )

};

export default MealsList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
})
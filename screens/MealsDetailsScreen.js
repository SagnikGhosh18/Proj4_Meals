import { Image, Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useContext } from "react";

import MealsDetails from "../components/MealsDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealsDetailsScreen({route, navigation}){

    const favoriteMealsCtx = useContext(FavoritesContext);


    const mealId = route.params.mealId;

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    const selectedMeal = MEALS.find((meal)=>meal.id===mealId);

    function changeFavoriteStatus(){
        if(mealIsFavorite){
            favoriteMealsCtx.removeFavorite(mealId);
        }
        else{
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
             headerRight: ()=>{
                return <IconButton  icon={mealIsFavorite?"star":"star-outline"} 
                                    color={'white'} 
                                    onPress={changeFavoriteStatus} />
             }
        });
    },[navigation, changeFavoriteStatus]);



    return(
        <ScrollView style={styles.root}>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealsDetails 
                duration={selectedMeal.duration} 
                affordability={selectedMeal.affordability} 
                complexity={selectedMeal.complexity} 
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />

                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealsDetailsScreen;

const styles=StyleSheet.create({
    root:{
        marginBottom: 32
    },
    image: {
        width:'100%',
        height:200
    },
    title:{
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        margin: 8,
        color:'white'
    },
    detailText:{
        color: 'white'
    },
    subtitle:{
        color: '#E2B497',
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer:{
        marginVertical: 4,
        marginHorizontal: 24,
        padding: 6,
        borderBottomColor: '#E2B497',
        borderBottomWidth: 2
    },
    listOuterContainer:{
        alignItems:'center'
    },
    listContainer:{
        width: '80%'
    }
})
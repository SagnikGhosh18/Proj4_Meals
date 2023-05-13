import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealsDetails from "../MealsDetails";

function MealItem({id, title, imageURL, duration, affordability, complexity}){

    const navigation = useNavigation();
    function pressHandler(){
        
        navigation.navigate('MealsDetails',{
            mealId: id
        });
    }


    return(
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color:'#ccc'}}
                style = {({pressed}) => pressed ? styles.buttonPressed : null}
                onPress={pressHandler}
            >   
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri:imageURL}} style={styles.imageStyle}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealsDetails duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden'
    },
    mealItem:{
        margin: 16,
        overflow: Platform.OS==='android' ? 'hidden':'visible',
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8
    },
    buttonPressed:{
        opacity: 0.5
    },
    imageStyle:{
        width: '100%',
        height: 200
    },
    title:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        margin: 8
    },
    details:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        padding: 8
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12
    }
});
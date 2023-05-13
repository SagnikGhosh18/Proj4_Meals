import { View, Text, StyleSheet } from "react-native";


function List({data}){
    return(
        data.map((dataItem)=>
            <View key={dataItem} style={styles.listItem}>
                <Text style={styles.itemText}>{dataItem}</Text>
            </View>
        )
    );
}

export default List;

const styles = StyleSheet.create({
    listItem:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#E2B497"
    },
    itemText:{
        color: "#351401",
        textAlign: "center"
    }
});
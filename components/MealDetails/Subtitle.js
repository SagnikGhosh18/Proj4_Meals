import { View, Text, StyleSheet } from "react-native";


function Subtitle({children}){
    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        color: '#E2B497',
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer:{
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 6,
        borderBottomColor: '#E2B497',
        borderBottomWidth: 2
    }
});
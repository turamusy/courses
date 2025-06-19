import { StyleSheet } from "react-native";
import { theme } from "../../styles/color-varibles";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.white,
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 24,
        shadowColor: theme.lightPurple,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        flex: 0.8,
        height: 100,
        width: '100%',
    }, 
    text: {
        color: theme.lightPurple,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 5,
    },
});
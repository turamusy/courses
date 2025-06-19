import { StyleSheet } from "react-native";
import { theme } from "../../styles/color-varibles";
import { convertHexToRGBA } from "../../utils/convertHexToRgba";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingLeft: 20,
        paddingVertical: 12,
        backgroundColor: theme.purple,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' ,
        backgroundColor: theme.purple
    },
    title: {
        color: theme.white,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        color: theme.white,
        fontSize: 18,
        textAlign: 'center',
    },
    topicContainer: {
        flexDirection: 'row',
        marginBottom: 40,
        height: 30,
        minWidth: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: convertHexToRGBA(theme.black, 0.2),
        borderRadius: 40,
        paddingHorizontal: 10,
        gap: 2,
    },
    topicText: {
        color: theme.white,
        fontSize: 12,
        fontWeight: 'bold',
    },
    iconCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: convertHexToRGBA(theme.black, 0.3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconArrow: {
        fontSize: 10,
        color: theme.white,
        textAlign: 'center',
    },
});
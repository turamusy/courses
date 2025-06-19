import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../styles/color-varibles";

const screenWidth = Dimensions.get('window').width;
const BUTTON_WIDTH = Math.min(screenWidth * 0.9, 400);

export const styles = StyleSheet.create({
  topicButton: {
    minWidth: BUTTON_WIDTH,
    backgroundColor: theme.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderColor: theme.grey,
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: theme.lightGreen,
  },
  topicText: {
    fontSize: 16,
    color: theme.darkGrey,
  },
  selectedText: {
    color: theme.white,
    fontWeight: 'bold',
  },
});
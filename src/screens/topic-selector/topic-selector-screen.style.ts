import { StyleSheet } from "react-native";
import { theme } from "../../styles/color-varibles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 24,
    backgroundColor: theme.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 24,
    zIndex: 10,
    padding: 8,
  },
  closeText: {
    fontSize: 20,
    color: theme.grey,
  },
  list: {
    gap: 12,
  },
});
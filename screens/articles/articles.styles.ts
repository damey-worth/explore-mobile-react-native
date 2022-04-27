import { TextStyle, ViewStyle } from "react-native";

const container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const title: TextStyle = {
  fontSize: 50,
  fontWeight: "bold",
  alignItems: "center",
  position: "absolute",
  top: 0,
};

const separator: ViewStyle = {
  marginVertical: 30,
  height: 1,
  width: "80%",
};

export const styles = {
  container,
  title,
  separator,
};

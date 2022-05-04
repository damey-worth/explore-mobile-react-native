import { TextStyle, ViewStyle } from "react-native";

const container: ViewStyle = {
  elevation: 3,
  backgroundColor: "#fff",
  shadowColor: "black",
  shadowOffset: { width: 3, height: 5 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  borderRadius: 5,
};

const articleLayout: ViewStyle = {
  flexDirection: "row",
  borderRadius: 5,
  overflow: "hidden",
};

const favouriteArticle: ViewStyle = {
  flex: 1,
  backgroundColor: "#F96060",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const articleDetails: ViewStyle = {
  flex: 4,
  paddingHorizontal: 16,
  paddingVertical: 8,
};

const articleTitle: TextStyle = {
  color: "#F96060",
  fontWeight: "bold",
  fontSize: 24,
};

const articleInfo: TextStyle = {
  color: "black",
  fontSize: 16,
  marginVertical: 8,
};

const articleAuthor: TextStyle = {
  color: "black",
  fontStyle: "italic",
  fontSize: 12,
};

export const styles = {
  articleLayout,
  favouriteArticle,
  articleDetails,
  articleTitle,
  articleInfo,
  articleAuthor,
  container,
};

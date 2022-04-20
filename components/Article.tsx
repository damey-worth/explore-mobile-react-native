import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";

export default function Article() {
  return (
    <View style={styles.articleLayout}>
      <View style={styles.favouriteArticle}>
        <Text>Open up the code for this screen:</Text>
      </View>

      <View style={styles.articleDetails}>
        <Text style={styles.articleTitle}>Article title</Text>
        <Text style={styles.articleInfo}>
          Concatenated article content intro.
        </Text>
        <Text style={styles.articleAuthor}>By user</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  articleLayout: {
    flexDirection: "row",
    shadowColor: "black",
  },
  favouriteArticle: {
    flex: 0.15,
    backgroundColor: "#F96060",
  },
  articleDetails: {
    flex: 0.5,
    padding: 5,
  },
  articleTitle: {
    color: "#F96060",
    fontWeight: "bold",
    fontSize: 24,
  },
  articleInfo: {
    color: "black",
    fontSize: 16,
  },
  articleAuthor: {
    color: "black",
    fontStyle: "italic",
    fontSize: 12,
  },
});

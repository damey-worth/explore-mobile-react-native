import React from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { styles } from "./articles/index.styles";

export default function ArticleViewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <EditScreenInfo path="/screens/Favourites.tsx" />
    </View>
  );
}

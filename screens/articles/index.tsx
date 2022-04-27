import React from "react";
import { ActivityIndicator } from "react-native";
import { useQuery } from "react-query";
import Article from "../../components/Article";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { styles } from "./index.styles";

export function Articles({ navigation }: RootTabScreenProps<"TabOne">) {
  // TODO: need a type for the "article" data returned by the API
  const { isLoading, error, data } = useQuery("articles", () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  );

  // console.log("test", data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Articles</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {isLoading ? <ActivityIndicator /> : null}
      {error && error?.message ? <Text>{error.message}</Text> : null}

      {data.length > 0 ? data.map((article) => <Article />) : null}

      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

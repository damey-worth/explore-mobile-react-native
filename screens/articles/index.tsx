import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { ArticleCard } from "../../components/ArticleCard";

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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Articles</Text>
      </View>

      <View>
        {isLoading ? <ActivityIndicator /> : null}
        {error && error?.message ? <Text>{error.message}</Text> : null}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {data.length > 0
            ? data.map((article) => (
                <View style={{ marginVertical: 10 }} key={article.id}>
                  <ArticleCard
                    title={article.title}
                    body={article.body}
                    user={article.userId}
                  />
                </View>
              ))
            : null}
        </ScrollView>
      </View>

      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

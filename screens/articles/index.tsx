import React from "react";
import { ActivityIndicator, Button, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { ArticleCard } from "../../components/ArticleCard";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import ArticleViewScreen from "../ArticleViewScreen";
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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {data != undefined && data.length > 0
            ? data.map((article: any) => (
                <View style={{ marginVertical: 10 }} key={article.id}>
                  <ArticleCard
                    title={article.title}
                    body={article.body}
                    user={article.userId}
                    navigation={navigation}
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

import { StyleSheet } from "react-native";
import { useQuery } from "react-query";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { styles } from "./articles.styles";

export function Articles({ navigation }: RootTabScreenProps<"TabOne">) {
  const { isLoading, error, data } = useQuery("articles", () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log("content" + res.json);
      return res.json();
    })
  );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Articles</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

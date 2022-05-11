import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import ArticleViewScreen from "../../screens/ArticleViewScreen";
import { Text, View } from "../Themed";
import { styles } from "./index.styles";

interface Props {
  title: string;
  body: string;
  user: string;
  liked?: boolean;
}

export const ArticleCard: React.FC<Props> = ({
  title,
  body,
  user,
  liked = false,
}) => {
  return (
    <TouchableOpacity onPress={ArticleViewScreen}> 
    <View style={styles.container}>
      <View style={styles.articleLayout}>
        <View style={styles.favouriteArticle}>
          <Text>
            <FontAwesome
              name="heart-o"
              size={35}
              style={{
                color: "white",
              }}
            />
          </Text>
        </View>

        <View style={styles.articleDetails}>
          <Text style={styles.articleTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.articleInfo} numberOfLines={2}>
            {body}
          </Text>
          <Text style={styles.articleAuthor}>By {user}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

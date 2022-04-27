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
    <View style={styles.container}>
      <View style={styles.articleLayout}>
        <View style={styles.favouriteArticle}>
          {/* TODO: insert like icon, filled/hollow depending on liked state */}
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
  );
};

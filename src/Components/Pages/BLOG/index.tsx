import styles from "./blog.module.scss";
import articles_data from "../../articles.json";

// IMPORT IMG ARTICLE TEST
import img_article_1 from "../../../assets/Articles_images/post_1.png";

// Define the type for the article data
interface Article {
  title: string;
  para_article: string;
  image_url: string;
}

export default function Blog() {
  return (
    <div className={styles.articles}>
      {articles_data.map((article: Article, index: number) => {
        return (
          <div key={index} className={styles.card_article}>
            <div className={styles.article_image}>
              <img
                className={styles.img_post_class}
                src={article.image_url || img_article_1}
                alt={`img post ${index + 1}`}
              />
            </div>
            <div className={styles.less_info_article}>
              <h1 className={styles.title_article}>{article.title}</h1>
              <p>{article.para_article}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React, { useEffect } from "react";
import styles from "./blog.module.scss";
import articles_data from "../../articles.json";
import img_article_1 from "../../../assets/Articles_images/ost_1.png";

interface Article {
  title: string;
  para_article: string;
  image_url: string;
}

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Latest Articles</h1>
      <div className={styles.articles}>
        {articles_data.map((article: Article, index: number) => (
          <article key={index} className={styles.cardArticle}>
            <div className={styles.articleImage}>
              <img
                className={styles.imgPostClass}
                src={article.image_url || img_article_1}
                alt={`Article ${index + 1}`}
              />
            </div>
            <div className={styles.articleContent}>
              <h2 className={styles.titleArticle}>{article.title}</h2>
              <p className={styles.articleExcerpt}>{article.para_article}</p>
              <button className={styles.readMoreBtn}>Read More</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

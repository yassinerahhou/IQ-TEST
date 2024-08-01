import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./blog.module.scss";
import articles_data from "../../articles.json";

interface Article {
  title: string;
  para_article: string;
  image_url: string;
}

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setArticles(articles_data);
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Latest Articles</h1>
      <div className={styles.articles}>
        {articles.map((article: Article, index: number) => (
          <Link
            to={`/BlogArticle/${index}/${encodeURIComponent(article.title)}`}
            key={index}
            className={styles.articleLink}
          >
            <article className={styles.cardArticle}>
              <div className={styles.articleImage}>
                <img
                  className={styles.imgPostClass}
                  src={article.image_url}
                  alt={`Article ${index + 1}`}
                  loading="lazy"
                />
              </div>
              <div className={styles.articleContent}>
                <h2 className={styles.titleArticle}>{article.title}</h2>
                <p
                  className={styles.articleExcerpt}
                  dangerouslySetInnerHTML={{
                    __html: truncateText(article.para_article, 200),
                  }}
                />
                <button className={styles.readMoreBtn}>Read More</button>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;

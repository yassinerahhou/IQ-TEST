import React, { useEffect } from "react";
import styles from "./blog.module.scss";
import articles_data from "../../articles.json";
import { Link } from "react-router-dom";
// import img_article_1 from "../../../assets/Articles_images/ost_1.png";

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
          <Link
            to={`/BlogArticle/${index}/${encodeURIComponent(article.title)}`}
          >
            {" "}
            <article key={index} className={styles.cardArticle}>
              <div key={index} className={styles.articleImage}>
                <img
                  className={styles.imgPostClass}
                  src={article.image_url}
                  alt={`Article ${index + 1}`}
                />
              </div>
              <div className={styles.articleContent}>
                {/* dangerouslySetInnerHTML={{ __html: post.para_article }} */}
                <p
                  className={styles.articleExcerpt}
                  dangerouslySetInnerHTML={{
                    __html:
                      article.para_article.slice(0, 200) +
                      (article.para_article.length > 200 ? "..." : ""),
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

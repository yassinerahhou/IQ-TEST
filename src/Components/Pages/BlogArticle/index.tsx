import styles from "./blogarticle.module.scss";
import articlesData from "../../articles.json";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface Article {
  title: string;
  para_article: string; // Ensure this is a string containing HTML
  image_url: string;
  // last_update: string;
}

export default function BlogArticle() {
  const { id } = useParams<{ id?: string }>(); // Ensure id is optional
  const articleIndex = id ? parseInt(id, 10) : -1; // Fallback to -1 if id is undefined

  const [dataArticles] = useState<Article[]>(articlesData);

  return (
    <>
      {dataArticles
        .filter((_, index) => index === articleIndex)
        .map((post, index) => (
          <div key={index} className={styles.mainArticle}>
            {/* TITLE */}
            <div className={styles.titlePost}>
              <h1>{post.title}</h1>
              {/* <p>{post.last_update}</p> */}
            </div>
            {/* IMAGE */}
            <div className={styles.ImagePost}>
              <img src={post.image_url} alt={`Article ${index + 1}`} />
            </div>
            {/* CONTENT */}
            <div className={styles.contentPost}>
              <div dangerouslySetInnerHTML={{ __html: post.para_article }} />
            </div>
          </div>
        ))}
    </>
  );
}

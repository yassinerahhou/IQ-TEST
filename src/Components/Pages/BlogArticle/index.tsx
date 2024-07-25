import styles from "./blogarticle.module.scss";
import articlesData from "../../articles.json";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogArticle() {
  const articleId = useParams();
  const Id = articleId.id;
  const articleIndex = parseInt(Id, 10);

  const [dataArticles, setDataArticles] = useState(articlesData);

  return (
    <>
      {dataArticles
        .filter((post, index) => index === articleIndex)
        .map((post, index) => {
          return (
            <>
              <div key={index} className={styles.mainArticle}>
                {/* TITLE  */}
                <div className={styles.titlePost}>
                  <h1>{post.title}</h1>
                </div>
                {/* IMAGE */}

                <div className={styles.ImagePost}>
                  <img src={post.image_url} alt={post.image_url} />
                </div>

                {/*  CONTENT */}
                <div className={styles.contentPost}>
                  <p>{post.para_article}</p>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}

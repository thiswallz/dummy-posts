import React from "react";
import { Post } from "@/model/post";
import styles from "./PostCard.module.scss";

export interface PostsProps {
  post: Post;
}

const PostCard = ({ post }: PostsProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h2>{post.title}</h2>
        <p className={styles.description}>{post.body}</p>
        <ul className={styles.tags}>
          {post.tags.map((tag: string) => (
            <li key={tag} className={styles.chip}>
              {tag}
            </li>
          ))}
        </ul>
        <div aria-description="Reactions" className={styles.footer}>
          🤍 {post.reactions}
        </div>
      </div>
    </article>
  );
};

export default React.memo(PostCard);

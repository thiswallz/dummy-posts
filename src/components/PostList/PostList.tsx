import React from "react";
import TransitionLink from "@/components/TransitionLink/TransitionLink";
import { Post } from "@/model/post";
import styles from "./PostList.module.scss";

export interface PostsProps {
  posts: Post[];
}

const PostList = ({ posts }: PostsProps) => {
  return (
    <ul className={styles.list}>
      {posts.map((post: any) => (
        <TransitionLink
          role="listitem"
          key={post.id}
          className={styles.item}
          tabIndex={0}
          href={`/post/${post.id}`}
          aria-label="View post details"
        >
          {post.title}
        </TransitionLink>
      ))}
    </ul>
  );
};

export default React.memo(PostList);

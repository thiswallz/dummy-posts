"use client";

import React, { useState } from "react";
import { Post } from "@/model/post";
import { usePostsContext } from "@/providers/PostsContext";
import { animatePageOut } from "@/extensions/animations";
import { useRouter } from "next/navigation";
import styles from "./PostList.module.scss";

export interface PostsProps {
  posts: Post[];
}

const PostList = ({ posts }: PostsProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { retrievePost } = usePostsContext();

  const handlePostClick = async (postId: number) => {
    setLoading(true);
    await retrievePost(postId);
    animatePageOut(`/post/${postId}`, router);
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <p
          aria-label="Loading... Please wait."
          role="status"
          className={styles.loading}
        >
          Loading...
        </p>
      )}
      <ul className={styles.list}>
        {posts.map((post: any) => (
          <button
            role="listitem"
            key={post.id}
            className={styles.item}
            tabIndex={0}
            aria-label="View post details"
            autoFocus
            onClick={() => handlePostClick(post.id)}
          >
            {post.title}
          </button>
        ))}
      </ul>
    </>
  );
};

export default React.memo(PostList);

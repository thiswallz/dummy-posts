'use client';

import TransitionLink from "@/components/TransitionLink/TransitionLink";
import PostCard from "@/components/PostCard/PostCard";
import { Post } from "@/model/post";
import { usePostsContext } from "@/providers/PostsContext";
import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function PostHome({ params }: { params: { slug: string } }) {
  const postId = parseInt(params.slug);
  const { retrievePost } = usePostsContext();
  const [post, setPost] = useState<Post | undefined>(undefined);

  const initialize = useCallback(async () => {
    const post = await retrievePost(postId);
    setPost(post);
  }, [postId, retrievePost]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.container}>
      <TransitionLink
        aria-label="Go back to posts"
        href="/"
        className={styles.backLink}
        autoFocus
      >
        Back
      </TransitionLink>
      <PostCard post={post} />
    </section>
  );
}

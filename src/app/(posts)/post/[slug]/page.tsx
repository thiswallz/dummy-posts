import TransitionLink from "@/components/TransitionLink/TransitionLink";

import { getPost } from "./actions";
import PostCard from "@/components/PostCard/PostCard";
import styles from "./page.module.scss";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);

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

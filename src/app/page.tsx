import styles from "./page.module.scss";
import Posts from "@/components/PostList/PostList";
import { getPosts } from "./actions";

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <main className={styles.main}>
      <h1>Dummy Posts</h1>
      <Posts posts={posts} />
    </main>
  );
}

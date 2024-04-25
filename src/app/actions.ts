"use server";

import { Post } from "@/model/post";

// The `fetch` function is automatically memoized and the result
// is cached
export async function getPosts(): Promise<{ posts: Post[] }> {
  const res = await fetch(`${process.env.DUMMY_BASE_API}/posts`);
  return res.json();
}

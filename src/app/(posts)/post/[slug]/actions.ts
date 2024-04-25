"use server";

import { Post } from "@/model/post";

export async function getPost(id: string): Promise<Post> {
  const res = await fetch(`${process.env.DUMMY_BASE_API}/posts/${id}`);
  return res.json();
}

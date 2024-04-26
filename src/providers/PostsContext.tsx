"use client";

import { createContext, useContext, FC, ReactNode, useState } from "react";
import { CachePost, Post } from "@/model/post";

export async function getPost(id: number): Promise<Post> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DUMMY_BASE_API}/posts/${id}`
  );
  return res.json();
}

interface PostsContextState {
  retrievePost: (key: number) => Promise<Post>;
}

const PostsContext = createContext<PostsContextState | undefined>(undefined);

export const PostProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [cache, setCache] = useState<CachePost>({});

  const addToCache = (key: number, value: Post) => {
    setCache((prevCache) => ({
      ...prevCache,
      [key]: value,
    }));
  };

  const retrievePost = async (key: number) => {
    if (cache[key]) {
      return cache[key];
    } else {
      const post = await getPost(key);
      addToCache(key, post);
      return post;
    }
  };

  return (
    <PostsContext.Provider value={{ retrievePost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = (): PostsContextState => {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("usePostsContext must be used within a PostProvider");
  }
  return context;
};

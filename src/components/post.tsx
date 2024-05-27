'use client';

import getPost from '@/utils/get-post';
import { useSuspenseQuery } from '@tanstack/react-query';
import { View } from 'reshaped';
import PostCard, { PostCardLoading } from './post-card';

export default function Post() {
  const { data: post, error } = useSuspenseQuery({
    queryKey: ['post'],
    queryFn: getPost,
  });

  if (error) {
    throw error;
  }

  return (
    <div>
      <h1>You seeing the post {post.title}!</h1>
      <View width="400px" maxWidth="100%">
        <PostCard title={post.title} body={post.body} />
      </View>
    </div>
  );
}

export function PostLoading() {
  return (
    <div>
      <h1>Loading post...</h1>
      <View width="400px" maxWidth="100%">
        <PostCardLoading />
      </View>
    </div>
  );
}

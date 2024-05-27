import Post, { PostLoading } from '@/components/post';
import getQueryClient from '@/utils/get-query-client';
import getUser from '@/utils/get-user';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import NextLink from 'next/link';
import { Suspense } from 'react';
import { Breadcrumbs, View } from 'reshaped';
import WelcomeUser from './welcome-user';

export default async function ProfilePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return (
    <View gap={2}>
      <Breadcrumbs color="primary">
        <NextLink passHref legacyBehavior href="/">
          <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        </NextLink>
        <Breadcrumbs.Item>Profile</Breadcrumbs.Item>
      </Breadcrumbs>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <WelcomeUser />
      </HydrationBoundary>
      <Suspense fallback={<PostLoading />}>
        <Post />
      </Suspense>
    </View>
  );
}

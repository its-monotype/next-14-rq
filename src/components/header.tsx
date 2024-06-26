'use client';

import getUser from '@/utils/get-user';
import { useQuery } from '@tanstack/react-query';

export default function Header() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <div>Not logged in</div>;

  return <div>Next.js | You logged as {user?.name}</div>;
}

'use client';

import getUser from '@/utils/get-user';
import { useQuery } from '@tanstack/react-query';

export default function WelcomeUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <div>Not logged in</div>;

  return <h1>Welcome to profile {user?.name}!</h1>;
}

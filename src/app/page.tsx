import NextLink from 'next/link';
import { Button } from 'reshaped';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Reshaped!</h1>
      <NextLink passHref legacyBehavior href="/profile">
        <Button>Get started</Button>
      </NextLink>
    </div>
  );
}

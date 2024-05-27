'use client';

import NextLink from 'next/link';
import { Breadcrumbs } from 'reshaped';

export default function ProfileBreadcrumbs() {
  return (
    <Breadcrumbs color="primary">
      <NextLink passHref legacyBehavior href="/">
        <Breadcrumbs.Item>Home</Breadcrumbs.Item>
      </NextLink>
      <Breadcrumbs.Item>Profile</Breadcrumbs.Item>
    </Breadcrumbs>
  );
}

import { Card, Skeleton, Text, View } from 'reshaped';

export type PostCardProps = {
  title: string;
  body: string;
};

export default function PostCard({ title, body }: PostCardProps) {
  return (
    <Card>
      <Text className="first-letter:uppercase" variant="body-2" weight="medium">
        {title}
      </Text>
      <Text className="first-letter:uppercase" variant="body-3">
        {body}
      </Text>
    </Card>
  );
}

export function PostCardLoading() {
  return (
    <Card>
      <View gap={3}>
        <Text variant="body-2">
          <Skeleton width="30%" />
        </Text>
        <View gap={2}>
          <Skeleton />
          <Skeleton width="60%" />
        </View>
      </View>
    </Card>
  );
}

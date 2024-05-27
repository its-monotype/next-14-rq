export default async function getPost() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  return data;
}

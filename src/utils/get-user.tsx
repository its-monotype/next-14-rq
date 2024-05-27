export default async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await res.json();
  return data;
}

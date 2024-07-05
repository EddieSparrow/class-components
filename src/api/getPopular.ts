export default async function getPopular() {
  const res = await fetch(`https://yts.mx/api/v2/list_movies.json?&limit=20`, {
    method: "GET",
  });
  return res.json();
}

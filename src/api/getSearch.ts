export default async function getSearch(inputValue: string) {
  const res = await fetch(
    `https://yts.mx/api/v2/list_movies.json?&query_term=${inputValue}&limit=20`,
    {
      method: "GET",
    },
  );
  return res.json();
}

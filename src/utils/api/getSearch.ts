export default async function getSearch(
  inputValue?: string,
  limit?: number,
  page?: number,
) {
  const res = await fetch(
    `https://yts.mx/api/v2/list_movies.json?&query_term=${inputValue}&limit=${limit}&page=${page}`,
    {
      method: "GET",
    },
  );
  return res.json();
}

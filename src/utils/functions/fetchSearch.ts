import getSearch from "../api/getSearch";

export default async function fetchSearch(inputValue: string) {
  try {
    const result = await getSearch(inputValue);
    const filmList = result.data;
    setFilmList(filmList);
  } catch (e) {
    console.log("ERROR: ", e);
  }
}

export default async function getSearch(inputValue: string) {
  const res = await fetch(
    `https://imdb8.p.rapidapi.com/v2/search?searchTerm=${inputValue}&first=20&country=US&language=en-US`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "d3346dc986mshec448045c0f2a8fp187a2bjsnfe39231841f7",
      },
    },
  );
  return res.json();
}

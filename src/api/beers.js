async function fetchBeers(name) {
  let url = "https://api.punkapi.com/v2/beers";
  if (name !== undefined) url = `${url}?beer_name=${name}`;
  const result = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  }).then((result) => result.json());

  return result.map(({ name, tagline, first_brewed, contributed_by }) => ({
    name,
    tagline,
    first_brewed,
    contributed_by,
  }));
}

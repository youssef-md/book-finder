export async function getBooksBySearch(
  search,
  startIndex = 0,
  maxResults = 12
) {
  const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const searchEndpoint = `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}&maxResults=${maxResults}&key=${googleApiKey}`;

  const bookRequest = await fetch(searchEndpoint);
  const books = await bookRequest.json();

  return books;
}

export async function getBooksBySearch(search) {
  if (!search) return;

  const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const searchEndpoint = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${googleApiKey}`;

  const bookRequest = await fetch(searchEndpoint);
  const books = await bookRequest.json();

  return books;
}

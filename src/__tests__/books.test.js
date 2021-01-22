import { getBooksBySearch } from '../services/books';

describe('services/books.js', () => {
  it('should fetch books', async () => {
    // fetch = jest.fn(() =>
    //   Promise.resolve({
    //     json: () => Promise.resolve([{ id: '1' }, { id: '2' }]),
    //   })
    // );
    // const res = await getBooksBySearch();
    // expect(res[0]).toMatchObject({ id: '1' });
    // expect(fetch).toHaveBeenCalledTimes(1);
  });
});

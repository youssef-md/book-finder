import { shallow } from 'enzyme';
import BookCard from '../components/BookCard';
import Button from '../components/Button';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    location: {
      pathname: '',
    },
  }),
}));

jest.mock('../hooks/favoritedBooks', () => ({
  useFavoritedBooks: () => ({
    checkIsFavorited: jest.fn(),
    addBook: jest.fn(),
    removeBook: jest.fn(),
  }),
}));

const bookComplete = {
  id: 1,
  volumeInfo: {
    title: 'Testing Stuff',
    authors: ['Author 1', 'Author 2'],
    categories: ['Category 1', 'Category 2'],
    imageLinks: {
      thumbnail: '',
    },
  },
};

describe('<BookCard/>', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<BookCard book={bookComplete} />);
  });

  it('should test buttons click', () => {
    const detail = wrapper.find(Button).at(0);
    const favorite = wrapper.find(Button).at(1);
    detail.simulate('click');
    favorite.simulate('click');
  });
});

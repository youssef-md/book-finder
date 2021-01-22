import { shallow } from 'enzyme';
import HeaderButton from '../components/Header/HeaderButton';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    location: {
      pathname: '',
    },
  }),
}));

describe('<HeaderButton/>', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<HeaderButton icon="heart" route="/" />);
  });

  it('should push a route', () => {
    wrapper.simulate('click');
  });
});

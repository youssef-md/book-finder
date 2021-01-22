import { shallow } from 'enzyme';
import SearchInput from '../components/SearchInput';

describe('<SearchInput/>', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<SearchInput />);
  });

  it('should render', () => {
    expect(
      wrapper.contains(<input placeholder="What do you wan't to find?" />)
    ).toBe(true);
  });
});

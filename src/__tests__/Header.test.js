import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('<Header/>', () => {
  let wrapper;
  const title = 'Testing Header';

  beforeAll(() => {
    wrapper = shallow(<Header title={title} />);
  });

  it('should render', () => {
    expect(wrapper.contains(title)).toBe(true);
  });
});

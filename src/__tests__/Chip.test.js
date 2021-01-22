import { shallow } from 'enzyme';
import Chip from '../components/Chip';

describe('<Chip/>', () => {
  let wrapper;
  const text = 'Testing Chip';

  beforeAll(() => {
    wrapper = shallow(<Chip text={text} />);
  });

  it('should render', () => {
    expect(wrapper.contains(text)).toBe(true);
  });
});

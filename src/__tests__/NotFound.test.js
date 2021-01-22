import { shallow } from 'enzyme';
import NotFound from '../pages/NotFound';

describe('<NotFound/>', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<NotFound />);
  });

  it('should render', () => {
    expect(wrapper.contains(<h1>Oh no!</h1>)).toBe(true);
  });
});

import { shallow } from 'enzyme';
import ShimmerBookCard from '../components/BookCard/ShimmerBookCard';

describe('<ShimmerBookCard/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ShimmerBookCard />);
    expect(wrapper.find('.fake-img')).toHaveLength(1);
  });
});

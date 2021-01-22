import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('<Button/>', () => {
  let wrapper;
  const spyOnClick = jest.fn();

  beforeAll(() => {
    wrapper = shallow(<Button onClick={spyOnClick} />);
  });

  it('should handle onClick', () => {
    wrapper.simulate('click');
    expect(spyOnClick).toHaveBeenCalled();
  });
});

import { shallow } from 'enzyme';
import Button from '../components/Button';
import Pagination from '../components/Pagination';

describe('<Pagination/>', () => {
  let wrapper;
  const title = 'Testing Header';
  const pages = 5;
  const spyHandleNewPage = jest.fn();

  beforeAll(() => {
    wrapper = shallow(
      <Pagination
        pages={pages}
        currentPage={0}
        handleNewPage={spyHandleNewPage}
      />
    );
  });

  it('should render pagination correctly', () => {
    expect(wrapper.find(Button)).toHaveLength(pages);
  });

  it('should navigate to the selected page', () => {
    const secondPage = wrapper.find(Button).at(1);
    secondPage.simulate('click');
    expect(spyHandleNewPage).toHaveBeenCalledTimes(1);
  });
});

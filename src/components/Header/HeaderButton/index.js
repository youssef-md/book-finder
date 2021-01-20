import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';

import { Container } from './styles';

const icons = {
  search: AiOutlineSearch,
  heart: AiOutlineHeart,
};

export default function HeaderButton({ icon, route }) {
  const history = useHistory();

  const Icon = useMemo(() => icons[icon]);

  const handleClick = useCallback(() => history.push(route), []);

  const isRouteSelected = useCallback(
    () => history.location.pathname == route,
    []
  );

  return (
    <Container onClick={handleClick} isSelected={isRouteSelected()}>
      <Icon />
    </Container>
  );
}

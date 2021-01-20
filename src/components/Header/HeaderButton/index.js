import { useCallback, useMemo } from 'react';
import * as Icons from 'react-feather';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function HeaderButton({ icon, route }) {
  const history = useHistory();

  const Icon = useMemo(() => Icons[icon]);

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

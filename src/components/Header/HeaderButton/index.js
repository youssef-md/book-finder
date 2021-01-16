import { useMemo } from 'react';
import * as Icons from 'react-feather';

import { Container } from './styles';

export default function HeaderButton({ icon }) {
  const Icon = useMemo(() => Icons[icon]);

  return (
    <Container>
      <Icon />
    </Container>
  );
}

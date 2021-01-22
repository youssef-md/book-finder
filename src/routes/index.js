import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/detail" component={Detail} />
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
}

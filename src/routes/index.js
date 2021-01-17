import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
}

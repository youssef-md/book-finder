import { Redirect, Route, Switch } from 'react-router-dom';

import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
}

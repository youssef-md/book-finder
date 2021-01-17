import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './components/globalStyles';

import Routes from './routes';

function App() {
  return (
    <div className="width-delimiter">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </div>
  );
}

export default App;

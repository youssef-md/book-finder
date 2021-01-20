import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './components/globalStyles';

import Routes from './routes';

function App() {
  return (
    <div className="width-delimiter">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  );
}

export default App;

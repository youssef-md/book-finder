import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './components/globalStyles';
import { FavoritedBooksProvider } from './hooks/favoritedBooks';

import Routes from './routes';

export default function App() {
  return (
    <div className="width-delimiter">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <FavoritedBooksProvider>
            <Routes />
          </FavoritedBooksProvider>
        </ThemeProvider>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  );
}

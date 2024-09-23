import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Main } from './components/Main';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <Main />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
import { Menu } from './components/Menu';
import { LayoutPaginas } from './components/LayoutPaginas';
import Global from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import { DefaultTheme, ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Global />
        <Menu toggleTheme={toggleTheme} />
        <LayoutPaginas />
      </div>
    </ThemeProvider>
  );
}

export default App;

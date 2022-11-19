
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './GolbalStyles';

import Header from "./Components/Header";
import Home from './Components/Home';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (<>
    <ThemeProvider theme={(theme === "light") ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Header 
        theme={theme} 
        setTheme={setTheme}
      />
      <Home theme={theme} />
    </ThemeProvider>
  </>);
}

export default App;

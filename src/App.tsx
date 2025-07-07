import React, { useState } from 'react';
import { ThemeProvider} from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { darkTheme } from './styles/darktheme';
import Home from './pages/Home';
import { CssBaseline } from '@mui/material';


const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme:theme;
  const toggleTheme =() => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home  toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

import { useState } from 'react'
import './App.css'
import {ThemeContext} from './contexte'
import {MaCard} from './MaCard'

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <div className="app" style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      <ThemeContext.Provider value={theme}>
        <button className="btn" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? 'dark' : 'light'}
        </button>
        <MaCard />
      </ThemeContext.Provider>
    </div>
  );
}


export default App;

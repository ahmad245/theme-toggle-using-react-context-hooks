import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './theme-context';

function App() {
  const { theme, dark, toggle } = useContext(ThemeContext)
  return (
    <div className="App">
      <header style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <button
          onClick={toggle}
        >
          Toggle to {!dark ? 'Dark' : 'Light'} theme
           </button>

       
       
        
      </header>
    </div>
  );
}

export default App;

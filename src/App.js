import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './approuter';

function App() {
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;

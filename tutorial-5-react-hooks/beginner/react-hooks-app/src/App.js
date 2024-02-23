import logo from './logo.svg';
import './App.css';

import Posts from './components/class/Posts'
import { Fetch } from './components/function/Fetch';

function App() {
  return (
    <div className="App">
       <Fetch />
    </div>
  );
}

export default App;

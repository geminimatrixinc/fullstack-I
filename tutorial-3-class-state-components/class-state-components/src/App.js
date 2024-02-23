import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import Greeting from './components/Greeter';
function App() {
  return (
    <>
        <Greeting message={"React! (from props).."}  />
        <HelloWorld  />
    </>
  );
}

export default App;

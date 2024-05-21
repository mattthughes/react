import logo from './logo.svg';
import './App.css';
import FuctionalGreeting from './components/FunctionalGreeting';
import FuctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FuctionalGreeting />
      <FuctionalGreetingWithProps greeting="nice to meet you" name='john' age='50' />
    </div>
  );
}

export default App;

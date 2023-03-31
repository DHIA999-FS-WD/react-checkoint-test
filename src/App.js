import './App.css';
// navbar section link
import Top from './nav.js';
// home(button + alert) section link
import Home  from './Home.js';
// signup section link
import Sing  from './singnUp';
// Login section link
import LoginSection from './login.js';

function App() {
  return (
    <div>
      <Top/>
      <Home/>
      <Sing/>
      <LoginSection/>
    </div>
  );
}

export default App;

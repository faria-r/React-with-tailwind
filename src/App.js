import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <h1 className='text-xl font-bold bg-indigo-300'>Hello tailwind</h1>
     <Pricing></Pricing>
    </div>
  );
}

export default App;
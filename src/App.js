import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Pricing from './Components/Pricing/Pricing';
import AssignmentGraph from './Components/Charts/AssignmentGraph';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <h1 className='text-xl font-bold bg-indigo-300'>Hello tailwind</h1>
     <Pricing></Pricing>
     <AssignmentGraph></AssignmentGraph>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Dashboard from './containers/Dashboard';

const Rough = () =>{
  const Box = () =>{
    return(
      <div>Box Created</div>
    )
  }
  const handleClick = () =>{
    
  }
  return (
    <div >
      Rough

      <ul>
        <li onClick={handleClick}>Box 1</li>
        <li>Box 2</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Rough/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ListSelect from './components/menu/ListSelect'
import TopBar from './components/topbar/TopBar'

function App() {
  return (
    <div className="App">
      <TopBar/>
      <ListSelect/>
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Textform from './Components/Textform/Textform';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Textform title="Enter your text here to do magic"/>
    </div>
    </>
  );
}

export default App;

import contactUs from './Pages/Contact';
import './App.css';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  const navigate= useNavigate();
  return (
    <div className="App">
      <header className="App-header">
       <div> NEW APP </div>
       <BrowserRouter>
       <Route path="/contactus" element ={<contactUs />} />  
       </BrowserRouter>
       <div onClick={navigate('/contactus')}> click here to link to contact us</div>
       </header>
    </div>
  );
}

export default App;

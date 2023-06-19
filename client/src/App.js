import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './views/Landing';
import Home from "./views/Home";
import Detail from "./views/Detail";
import Form from './views/Form';
import axios from 'axios';
axios.defaults.baseURL = 'https://dogshenry-production.up.railway.app';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route path="/home/:id" element={<Detail />}/>
        <Route exact path="/create" element={< Form/>}/>
        </Routes>
    </div>
  );
}

export default App;

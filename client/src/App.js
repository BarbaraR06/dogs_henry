import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './views/Landing';
import Home from "./views/Home";
import Detail from './views/Detail';
import Form from './views/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/home/:id" element={<Detail />}/>
        <Route exact path="/create" element={< Form/>}/>
        </Routes>
    </div>
  );
}

export default App;

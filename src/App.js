import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Detail from './Components/Detail';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


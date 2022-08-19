
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {

  return (
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/country/:countryName" element={<CountryDetail/>}/>
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </Router>
  );
}

export default App;

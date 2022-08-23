import './App.css';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Categories from './components/Categories'
import Reviews from './components/Reviews'
import Users from './components/Users'
import AboutUs from './components/AboutUs'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="categories/" element={<Categories />}/>
          <Route path="reviews/" element={<Reviews />}/>
          <Route path="reviews/:category" element={<Reviews />}/>
          <Route path="users/" element={<Users />}/>
          <Route path="about-us/" element={<AboutUs />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

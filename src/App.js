import './App.css';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Categories from './components/Categories'
import Reviews from './components/Reviews'
import Users from './components/Users'
import AboutUs from './components/AboutUs'
import FullReview from './components/FullReview'
import NavBar from './components/NavBar.jsx'
import InvalidPath from './components/invalid/InvalidPath'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoggedInUserContext } from './contexts/LoggedInUser';
import { useEffect, useState } from 'react';
import { getUsersByUsername } from './Api';

function App() {

  const [loggedInUser, setLoggedInUser] = useState({user: {username: 'guest'}})

  useEffect(() => {
    getUsersByUsername('cooljmessy').then((user) => {
      setLoggedInUser(user)
    })
  }, [])

  return (
    <LoggedInUserContext.Provider value={{loggedInUser, setLoggedInUser}}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="categories/" element={[<NavBar />, <Categories />]}/>
          <Route path="reviews/" element={[<NavBar />, <Reviews />]}/>
          <Route path="reviews/:review_id" element={[<NavBar />, <FullReview />]}/>
          <Route path="users/" element={[<NavBar />, <Users />]}/>
          <Route path="about-us/" element={[<NavBar />, <AboutUs />]}/>
          <Route path="/:invalid_path" element={[<NavBar />, <InvalidPath />]}/>
        </Routes>
      </div>
    </BrowserRouter>
    </LoggedInUserContext.Provider>
  );
}

export default App;

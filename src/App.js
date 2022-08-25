import './App.css';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Categories from './components/Categories'
import Reviews from './components/Reviews'
import Users from './components/Users'
import AboutUs from './components/AboutUs'
import FullReview from './components/FullReview'
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
          <Route path="categories/" element={<Categories />}/>
          <Route path="reviews/" element={<Reviews />}/>
          <Route path="reviews/:review_id" element={<FullReview />}/>
          <Route path="users/" element={<Users />}/>
          <Route path="about-us/" element={<AboutUs />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </LoggedInUserContext.Provider>
  );
}

export default App;

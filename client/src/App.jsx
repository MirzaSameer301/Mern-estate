import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing.jsx'
import UpdateListing from './pages/UpdateListing.jsx'
import Listing from './pages/Listing.jsx'
import Search from './pages/Search.jsx'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/sign-up' element={<SignUp/>}/>
       <Route path='/sign-in' element={<SignIn/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/listing/:listingId' element={<Listing/>}/>
       <Route path='/search' element={<Search/>}/>
       <Route element={<PrivateRoute/>}>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/create-listing' element={<CreateListing/>}/>
       <Route path='/update-listing/:listingId' element={<UpdateListing/>}/>
      
       </Route>
    </Routes>
    </BrowserRouter>
  )
}

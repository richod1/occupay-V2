import Home from './components/Home'
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import Payfee from './components/Payfee'
import Profile from './components/Profile';
import Payresit from './components/Payresit';
import About from './components/About'
import Contact from './components/Contact'
import {Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavHeader from './components/NavHeader';


function App() {
 
  return (
    <div className="App">
      
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="head" element={<NavHeader/>}/>
        <Route path="home" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/payfee" element={<Payfee/>}/>
        <Route path="/payresit" element={<Payresit/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;

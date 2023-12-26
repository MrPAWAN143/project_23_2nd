import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,  link, Link, Route } from 'react-router-dom'


import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from './components/About';
import Project from './components/Project';
import NotFound from './components/NotFound';
import UrlPage from './components/UrlPage';


function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

            <div className="col-12 bg-success" >
              <ul className="navbar-nav col-5 d-flex justify-content-between border border-0">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link text-white" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/About'} className="nav-link text-white" href="#">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Blog'} className="nav-link text-white" href="#">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Project'} className="nav-link text-white" href="#">Project</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Contact'} className="nav-link text-white" href="#">Contact Us</Link>
                </li>


              </ul>

            </div>
          </div>
        </nav>
      

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Blog' element={<Blog />}></Route>
          <Route path='/Project' element={<Project />}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='#' element={<NotFound />}></Route>
          <Route path='/:UrlPage' element={<UrlPage />}></Route>
          

        </Routes>

      </Router>
    </>


  );
}

export default App;

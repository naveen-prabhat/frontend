import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Forget from './components/pages/Forget';
import Courses from './components/pages/Courses';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Products from './components/pages/Products';
import Product from './components/pages/Product';
import Dashboard from './components/pages/user/Dashboard';
import NoMatch from './components/pages/NoMatch';
import Admin from './components/pages/admin/Admin';
import File from './components/pages/admin/File';

function App() {
  return (
    <Router>

    <div className="App">
      <Navbar />
      
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/forget' element={<Forget />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/courses' element={<Courses />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/help' element={<Products />}/>
          <Route exact path='/product/:_id' element={<Product />}/>
          <Route exact path='/admin' element={<Admin />}/>
          <Route exact path='/account' element={<Dashboard />}/>
          <Route exact path='/file' element={<File />}/>
          <Route exact path='/products' element={<File />}/>
          <Route exact path="*" element={<NoMatch />} status={404}/>
      </Routes>

      <Footer />
    </div>

    </Router>
  );
}

export default App;

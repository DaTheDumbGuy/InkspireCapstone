import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { loginStatus } from './services/api';
import Header from './components/common/Header';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import PageNotFound from './components/common/PageNotFound';
import Account from './components/pages/Account';
import Content from './components/common/Content';
import Footer from './components/common/Footer';
import Chapter from './components/pages/Chapter';
import NovelDescription from './components/common/NovelDescription';
// import { checkLoginStatus } from './services/api';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loginStatus()
      .then((account_id) => {
        setUser(account_id);
      })
      .catch((error) => {
        console.log('User not logged in:', error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/chapters' element={<Chapter />} />
        <Route path='/novel' element={<NovelDescription />} />
        {!user ?
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
          :
          <>
            <Route path="/account" element={<Account />} />
          </>
        }
        <Route path="*" element={<PageNotFound />} /> {/* Redirect to Page not found for unknown routes */}

      </Routes>
    </Router>
  )
}


function MainContent() {

  return (
    <>
      <Header />
      <main className=''>
        <Content />
      </main>
      <Footer />

    </>
  );
}
export default App
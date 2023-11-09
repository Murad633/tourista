import React from 'react';
import { Layout } from './components/Layout';
import { Home } from '../src/pages/Hompage'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Destination } from './pages/Destination';
import { Italy } from './pages/Italy';
import { AboutUs } from './pages/AboutUs';
import { FAQ } from './pages/FAQ';
import { Blog } from './pages/Blog';
import { ContactUs } from './pages/ContactUs';
import { SignIn } from './pages/SignIn';
import { ForgotPsw } from './pages/SignIn/pages/ForgotPsw';
import { CreateAccount } from './pages/SignIn/pages/CreateAccount';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>} />
          <Route path='/destinations'>
            <Route index element={<Layout><Destination/></Layout>} />
            <Route path='/destinations/italy' element={<Layout><Italy/></Layout>} />
          </Route>
          <Route path='/aboutus' element={<Layout><AboutUs/></Layout>}/>
          <Route path='/faq' element={<Layout><FAQ/></Layout>} />
          <Route path='/blog' element={<Layout><Blog/></Layout>} />
          <Route path='/contactus' element={<Layout><ContactUs/></Layout>} />
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/forgotpsw' element={<ForgotPsw/>}/>
          <Route path='/createaccount' element={<CreateAccount/>}/>
          <Route path='*' element={<Layout>{<h1 style={{textAlign:"center", padding:"50px 0"}}>Page not found</h1>}</Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

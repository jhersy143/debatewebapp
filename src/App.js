
import React from 'react';
import Navigationbar from './components/Navigationbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './components/Content';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import useToken from './components/token';
import Post from './components/Post';
import PostComments from './components/Comments';
import {useNavigate,useParaams} from 'react-router-dom';
import Createdebate  from './components/Createdebate'
function App() {
  const { token, setToken } = useToken();



    return (
      <>
        <Router>
          <Navigationbar token ={token}/>
          <Routes>
            <Route path='/'  exact element={!token?<Login setToken={setToken} />:<Homepage token={token}/>} />
            <Route path='/services' />
            <Route path='/login' element={<Login setToken={setToken}/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/profile' element={!token?<Login setToken={setToken} />:<Profile token={token}/>}/>
            <Route path='/post' element={!token?<Login setToken={setToken} />:<Post token={token}/>}/>
            <Route path='/create' element={!token?<Login setToken={setToken} />:<Createdebate token={token}/>}/>
          </Routes >
        </Router>
      </>
    );
  }
 


export default App;

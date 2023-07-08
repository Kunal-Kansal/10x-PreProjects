import React from 'react';
import './App.css';
// import NavLoginBar from './navigationBar/navLoginBar';
// import NavLoginBar2 from './navigationBar/navLoginBar2';
// import SignInPage from './SignInPage';
// import RegisterPage from './RegisterPage';
// import UploadNewVideo from './uploadNewVideo';
// import MyVideos from './myVideos';
// import SignInedPage from './SignInedPage';
import LandingPage from './landingPage';
import BirdsPictures from './BirdsPicture';
import BeachPictures from './BeachPictures';
import FoodPictures from './FoodPictures';
import MountainPictures from './MountainPictures';
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><LandingPage/></>}/>
        <Route path='/MountainNav' element={<><MountainPictures/></>}/>
        <Route path='/BirdsNav' element={<><BirdsPictures/></>}/>
        <Route path='/FoodNav' element={<><FoodPictures/></>}/>
        <Route path='/BeachesNav' element={<><BeachPictures/></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

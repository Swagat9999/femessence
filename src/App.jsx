import React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import Landing from './Landing'
import CourseCreate from './CourseCreate'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import Course from './Course'
import axios from 'axios'
import Navbar from './Navbar';
import {
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { userState } from './store/atoms/user';


function App() {

  return (
    <>
    <RecoilRoot>
    <Router>
            <Init/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/:courseId" element={<Course />} />
                <Route path="/about" element={<CourseCreate />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </Router>
    </RecoilRoot>
  </>
  )
}



function Init() {
  const setUser= useSetRecoilState(userState);

  const init= async() => {
    try{
  const res= await axios.get('http://localhost:3001/admin/me', {
  headers: {"Authorization":`Bearer ${localStorage.getItem('token')}`}
  });
  if(res.data.username){
    setUser({
      username:res.data.username,
      isLoading:false
    });
  }
}
catch{
  setUser({
    username:null,
    isLoading:true
  })
}
}

useEffect(()=>{
  init();
})
}

export default App

import React from 'react';
import './App.css'
import {Button} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './Component/Home'
import Allcourse from './Component/Allcourse'
import AddCourse from './Component/AddCourse'


function App (){
  const btnHandler = ()=>{
    toast.success("Form has been submited",{position:"buttom-center",autoClose: 10000,})
  }
  return(
    <>
    <ToastContainer/>
    <Home/>
    <Allcourse/>
    <AddCourse/>
  </>
  )
}

export default App;
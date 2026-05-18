import React from "react";
import './App.css'
import {getAll} from "./service/studentService.js";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import HeaderComponent from "./components/HeaderComponent.jsx";
import ListComponent from "./class_component/ListComponent.jsx";

function App() {
  return (
       <>
         <HeaderComponent/>
         <ListComponent/>
       </>
  );
}

export default App

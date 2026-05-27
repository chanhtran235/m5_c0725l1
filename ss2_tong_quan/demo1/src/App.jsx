
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import HeaderComponent from "./components/HeaderComponent.jsx";
import ListComponent from "./components/ListComponent.jsx";
import {Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent.jsx";
import AddComponent from "./components/AddComponent.jsx";
import {ToastContainer} from "react-toastify";
import LoginComponent from "./components/user/LoginComponent.jsx";


function App() {
  return (
       <>
           <ToastContainer/>
         <HeaderComponent/>
         <Routes>
             <Route path={'/'} element={<HomeComponent/>}/>
             <Route path={'/login'} element={<LoginComponent/>}/>
             <Route path={'/student'} element={<ListComponent/>}/>
             <Route path={'/student/add'} element={<AddComponent/>}/>
         </Routes>
       </>
  );
}

export default App

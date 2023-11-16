import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ''
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./HeaderStyle.css";
import Header from "./Header";
import Footer from "./Footer";

function LayoutUI() {
    return ( 
        <>
           <Header/>

           <Outlet/>
           <Footer/>
        </>
    );
}

export default LayoutUI;


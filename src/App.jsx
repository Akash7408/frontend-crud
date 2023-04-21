import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EmpCreate from "./components/EmpCreate";
import EmpListing from "./components/EmpListing";
import EmpDeatils from "./components/EmpDeatils";
import EmpEdit from "./components/EmpEdit";
//import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


export default function App(){
return(

<>


<BrowserRouter>
<h3 className="text-center text-danger">React Js Crud Operation</h3>
<Routes>
<Route path="/" element={<EmpListing/>}></Route>
<Route path="/empcreate" element={<EmpCreate/>}></Route>
<Route path="/empdetails/:empid" element={<EmpDeatils/>}></Route>
<Route path="/empedit/:empid" element={<EmpEdit/>}></Route>






</Routes>
</BrowserRouter>

</>

)






}
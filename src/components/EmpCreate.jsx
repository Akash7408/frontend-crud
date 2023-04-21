import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const EmpCreate = () => {



const[id,idchange]=useState('');
const[prod_name,setProd_name]=useState('');
const[price,setprice]=useState('');

const[url,seturl]=useState('');

const[validation,valchange]=useState(false);

const navigate=useNavigate();
const handlesubmit=(e)=>{

e.preventDefault();
const prodata={id,prod_name,price,url,};


let promise=fetch("http://localhost:5000/products",{
    method:"POST",
    
headers:{
    
    "Content-Type":"application/json"
},
body:JSON.stringify(prodata)



});
promise.then((res)=>{
    if(res.ok){
alert("saved successfully");
navigate('/');
    }

}).then((data)=>{
console.log(data)

}).catch((err)=>{
console.log(err)


})
}

    return ( 

        <>
        <div className="row">
     <div className="offset-lg-3 col-lg-4">
<form className="container" onSubmit={handlesubmit}>
<div className="card">

    <div className=" card-title ">
<h2 className="text-center">CREATE PRODUCT</h2>

    </div>
    <div className="card-body">

<div className="row">

<div className="col-lg-12">
<div className="form-group">
<lable>ID</lable>
<input value={id} disabled="disabled" className="form-control"></input>

</div>

</div>

<div className="col-lg-12">
<div className="form-group">
<lable>PROD.NAME</lable>
<input required value={prod_name}  onChange={e=>{setProd_name(e.target.value)}} className="form-control"></input>

</div>

</div>

<div className="col-lg-12">
<div className="form-group">
<lable>PRICE</lable>
<input value={price} onChange={e=>{setprice(e.target.value)}} className="form-control"></input>

</div>

</div>

<div className="col-lg-12">
<div className="form-group">
<lable>IMG</lable>
<input value={url} onChange={e=>{seturl(e.target.value)}} className="form-control"></input>

</div>

</div>




<div className="col-lg-12">
<div className="form-group">
<button type="submit" className="btn btn-success">SAVE</button>
<Link as={Link}  to="/" className="btn btn-warning ms-3">BACK</Link>

    </div>
</div>
</div>

    </div>
</div>


</form>


     </div>



        </div>

        
        </>
     );
}
 
export default EmpCreate;
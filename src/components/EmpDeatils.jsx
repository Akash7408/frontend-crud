import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDeatils = () => {

const {empid}=useParams();
  const [prodata,prodatachange]=useState({});

useEffect(()=>{

    fetch("http://localhost:5000/products/"+empid).then((res)=>{

        return res.json();
        
        }).then((data)=>{
            prodatachange(data)

        }).catch((error)=>{
        console.log(error)
        


        })
        


},[]);

    return ( 

        <>
        
            {prodata &&
                <div>
          
  <h1>THE PROD ID IS:{prodata.prod_name}<br/> ({prodata.id})</h1>
<h2>Contact deatils</h2>
<h5>PRICE :{prodata.price}</h5>
<h5>IMAGE is :<img src={prodata.url}/></h5>
<Link as={Link}  to="/" className="btn btn-warning ms-3">BACK TO</Link>

</div>
            }


       
        </>
     );
}
 
export default EmpDeatils;
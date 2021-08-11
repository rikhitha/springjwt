import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useHistory} from 'react-router-dom';

import ReactTable from "react-table"; 
import { useTable } from 'react-table'; 

export default function SendReport() {

    const mystyle = {
        color: "green",
        backgroundColor:"lightblue",
        padding: "60px",
        fontFamily: "Arial",
        height: "5px",
        //backgroundImage:' url("https://www.loginradius.com/blog/start-with-identity/static/3b4c33cef1861297f7da778dff9074a7/a3513/login-security.png")',
        width: "50%"
      };

    const [country,setCountry] = useState();
    const history = useHistory();

    useEffect(()=>{

        let authdata = JSON.parse(sessionStorage.getItem("auth")) || '';
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        console.log("check in session storage");
        
        const data = {};
        const headers = { 
            'Authorization': 'Bearer ' + authdata.token
        };

        axios.get("http://localhost:8080/countries",{ headers }).then((x)=>{
            console.log(JSON.stringify(x));
            setCountry(x.data);
        }).catch(err=>{
            console.error(err);
            history.push("/error/200");
        })
    },[])

    
   
    
   
    return (
        <div>
            <h1>SEND CIBIL REPORT</h1>
            {country && country.map((x,idx)=>{
                return <h4 key={idx}>{x.id} - {x.name}</h4>;
            })}
            
     <center>

     <form >
         <div style={mystyle}>
     <label for="myfile">Select a file:</label><br></br><br></br>
    <input type="file" id="myfile" name="myfile"/>
</div>
      </form>
        
       </center>
        </div>
    )
}

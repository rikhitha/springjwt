import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Auth from './auth';
import { useHistory} from 'react-router-dom';

export default function Login() {

    const history = useHistory();

    const mystyle = {
        color: "white",
        
        padding: "60px",
        fontFamily: "Arial",
        height: "800px",
        backgroundImage:' url("https://www.loginradius.com/blog/start-with-identity/static/3b4c33cef1861297f7da778dff9074a7/a3513/login-security.png")',
        width: "100%"
      };

    const [auth,setAuth] = useState({
        username:"admin",
        password:"admin"
    });

    const handleChange = (e) => {
        const {name,value} = e.target;

        setAuth((prev)=> {
            return {
                ...prev,
                [name]:value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (auth.username.trim() === "") {
            alert("No Username");
            return;
        }
            
        
        if (auth.password.trim() === "") {
            alert("No Password");
            return;
        }

        axios.post("http://localhost:8080/authenticate",auth).then((res)=>{
            console.log(JSON.stringify(res));
            console.log(res.data.token);
            console.log(res.data.roles);
            let authdata = new Auth(res.data.token,res.data.roles);
            //authdata = new Auth('',[]);
            console.log(JSON.stringify(auth));
            sessionStorage.setItem("auth",JSON.stringify(authdata));
            history.push('/dashboard');
        }).catch(err =>{
            console.error(err);
            history.push('/error/100');
        })
    }

    useEffect(()=>{
        sessionStorage.removeItem("auth");
    },[]);

    return (
        <center>
        <div style={mystyle}>
            
            <form onSubmit={handleSubmit} noValidate>
                <br>
                </br>
                
                <label>USERNAME</label><br></br>
                <input type="text" name="username" value={auth.username} onChange={handleChange} /><br>
                </br>
                <br></br>
                <label>PASSWORD</label><br>
                </br>
                <input type="password" name="password" value={auth.password} onChange={handleChange} />
                <br></br><br></br>
                <div>
                    <button type="submit">Login</button>
                    
                </div>
            </form>
            
        </div>
        </center>
    )
}

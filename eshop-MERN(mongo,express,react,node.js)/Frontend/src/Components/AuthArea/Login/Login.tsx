import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../Utils/firebase"


function Login(): JSX.Element {
    const navigate = useNavigate(); 
    const [user, setUser] = useState({
        email: "", 
        password: ""
    }); 

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target; 
        setUser((prevVal) => {
            return {
                ...prevVal, 
                [name]: value
            }
        })
    }

    const signIn = (e:SyntheticEvent) => {
        e.preventDefault(); 
        
        signInWithEmailAndPassword(auth ,user.email, user.password)
        .then(auth => {
            console.log(auth)
            navigate("/")
            })
            .catch(err => alert(err.message))
    }

    const register = (e:SyntheticEvent) => {
        e.preventDefault(); 
        
        createUserWithEmailAndPassword(auth ,user.email, user.password)
        .then(auth => {
            if(auth) navigate("/")
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className="Login">
			<NavLink to="/">
                <div className="loginLogo">
                    <StorefrontIcon className="loginLogoImage" fontSize="large"/>
                    <h2 className="loginLogoTitle">eSHOP</h2>
                </div>
            </NavLink>
            <div className="loginContainer">
                <h1>Sign-in</h1>

                <form>
                    <label>
                        <span>E-mail</span>
                        <input type="text" name="email" value={user.email} onChange={handleChange}/>
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" name="password" value={user.password} onChange={handleChange}/>
                    </label>
                    <button type="submit" className="loginSignInBtn" onClick={signIn}>Sing In</button>
                </form>
                <p>
                    By signing in you agree to the eShop Website Conditions of Use & Sale.
                </p>
                <button className="loginRegisterBtn" onClick={register}>Create your eShop Account</button>
            </div>
        </div>
    );
}

export default Login;

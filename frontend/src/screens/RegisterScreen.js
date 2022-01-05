import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userAction";

function RegisterScreen(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push('/')
        }
        return () => {
        }; 
    }, [userInfo])
    const submitHandler = (e) => {
        e.preventDefault(); 
        dispatch(register(email, password));   
    };

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Sign-In</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">
                            Email
                        </label>
                        <input type="name" name="name" id="name" onChange={(e) => { setName(e.target.value)}}></input>                        
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e) => { setEmail(e.target.value)}}></input>                        
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}}></input>
                    </li>
                    <li>
                        <label htmlFor="rePassword">Password</label>
                        <input type="rePassword" name="rePassword" id="rePassword" onChange={(e) => {setRePassword(e.target.value)}}></input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Register</button>
                    </li>
                    <li>
                        Aready have an account?<link to="/signin">Sign-in</link>
                    </li>
                </ul>
            </form>
        </div>
    )
           
};

export default RegisterScreen;
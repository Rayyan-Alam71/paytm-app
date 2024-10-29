import React, { useEffect, useState,  } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottmWarning from '../components/BottmWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 const navigate = useNavigate();
  return (
    <div className='bg-slate-300 h-screen w-screen flex justify-center items-center'>
      <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label ={"Sign Up"}/>
          <SubHeading/>
          <InputBox onChange = {(e)=>setFirstName(e.target.value)} label_text={"First Name"} placeholder={"John"}/>
          <InputBox onChange = {(e)=>setLastName(e.target.value)} label_text={"Last Name"} placeholder={"Doe"}/>
          <InputBox onChange = {(e)=>setUsername(e.target.value)}label_text={"Email"} placeholder={"johndoe@gmail.com"}/>
          <InputBox onChange = {(e)=>setPassword(e.target.value)} label_text={"Password"} placeholder={"123456"}/>
          <Button onClick ={async ()=>{
            const res = await axios.post("http://localhost:3000/api/v1/user/signup",{
              username : username,
              firstname:firstName,
              lastname: lastName, 
              password: password
            },{
              headers: {
                'Content-Type': 'application/json'
              }
            });
            console.log("enterd");
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
          }} className='w-full mt-6' label={"Sign Up"}/>
          <BottmWarning buttonText ={"Sign in"} to ={'/signin'}/>
      </div>
    </div>
  )
}

export default Signup

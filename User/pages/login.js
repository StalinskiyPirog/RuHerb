import React,{useState} from 'react';
import { LoginForm, SignUpForm } from '../components/authComponents';

export default function AuthPage({}){

  const [isLogin,setIsLogin] = useState(true);

  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");

  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  const [registerName,setRegisterName] = useState("");
  const [registerAvatar,setRegisterAvatar] = useState("");
  

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
    <main className="flex items-center justify-center w-full px-2 md:px-20">

      {
        isLogin? (
         <LoginForm setIsLogin={setIsLogin}/>
        ):(
         <SignUpForm setIsLogin={setIsLogin}/>
        )
      }
    </main>
    </div>
  )
}


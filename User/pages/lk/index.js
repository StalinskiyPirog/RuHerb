import { parseCookies } from "nookies";
import {useEffect} from "react";
import Router from "next/router"

export default function (){
    useEffect(()=>{
        const cookies = parseCookies();
        if (Object.entries(cookies).length == 0 && Object.entries(cookies)[0] != "session-key"){
          Router.push('/login');
        }
      })
    return(
        <></>
    )
}
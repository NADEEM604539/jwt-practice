"use client"
import React, { useEffect, useState } from 'react'
import { userDetails } from '../apis/loginapi'

const dashboardPage = () => {

  const [User, setUser] = useState<any>({})

  useEffect(() => {
    const token= localStorage.getItem("token");
    const load=async ()=>{
   
        if(token){
          const data = await userDetails(token);
          setUser(data.user);
        }
      } 
    
    load();
  }, [])

  const del=()=>{
    localStorage.removeItem("token");
  }

  return (
    <div>
      {User.email}

      <button onClick={del}>delete</button>
    </div>

  )
  
}

export default dashboardPage
"use client"
import React, { useEffect, useState } from 'react'
import { userDetails } from '../apis/loginapi'

const dashboardPage = () => {

  const [user, setuser] = useState({})

  useEffect(() => {
    const load=async ()=>{
      setuser(userDetails());
    }

    load();
  }, [])
  

  

  return (
    <div>
    
    </div>
  )
  
}

export default dashboardPage
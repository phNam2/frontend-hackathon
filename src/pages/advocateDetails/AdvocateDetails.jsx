import React, { useState, useEffect } from 'react'
import {useLocation} from "react-router-dom"
import { Helmet } from 'react-helmet'

const AdvocateDetails = () => {

  let [advocate, setAdvocate] = useState([])
  // Search the page location in the URL
  let location = useLocation()
  useEffect(() => {
    let arr = location.pathname.split("/");
    getAdvocate(arr[2])
  }, [])


  let getAdvocate = async(advocateID) => {
    let response = await fetch('https://cados.up.railway.app/advocates/'+ advocateID)
    let data = await response.json()
    setAdvocate(data.advocate) // Get the advocates information from API
}


  return (

    <div>
      <Helmet>
        <title>{advocate.name}</title>
      </Helmet>
      <h1>{advocate.name}</h1>
    </div>
    
  )
}

export default AdvocateDetails
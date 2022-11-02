import React, { useState, useEffect } from 'react'
import {useLocation} from "react-router-dom"

const AdvocateDetails = () => {

  let [advocate, setAdvocate] = useState([])
  // Search the page location in the URL
  let location = useLocation()
  useEffect(() => {
    let arr = location.pathname.split("/");
    console.log(arr[2])
    getAdvocate(arr[2])
  }, [])


  let getAdvocate = async(advocateID) => {
    let response = await fetch('https://cados.up.railway.app/advocates/'+ advocateID)
    let data = await response.json()
    console.log(data.advocate.name)
    setAdvocate(data.advocate) // Get the advocates information from API
}


  return (
    <h1>{advocate.name}</h1>
  )
}

export default AdvocateDetails
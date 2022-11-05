import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { Helmet } from 'react-helmet'
import {TbArrowBackUp} from 'react-icons/tb'
import './advocateDetails.css'

const AdvocateDetails = () => {

  let [advocate, setAdvocate] = useState([])
  // Search the page location in the URL
  let location = useLocation()
  let navigate = useNavigate()
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
      <div className="return">
        <TbArrowBackUp alt="Follow" size={40} onClick={() => navigate(-1)} />
        <h2 className='name_details'>{advocate.name}</h2>
      </div>
      <div className="detailsPage"></div>
        <div className="detailsPage-container">
          <div class="detailsPage-container-picture">1</div>
          <div class="detailsPage-container-description">2</div>
          <div class="detailsPage-container-companies">3</div>
        </div>
    </div>
    
  )
}

export default AdvocateDetails
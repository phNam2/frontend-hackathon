import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { Helmet } from 'react-helmet'
import {TbArrowBackUp} from 'react-icons/tb'
import {RiUserFollowLine, RiUserUnfollowFill} from 'react-icons/ri'
import { motion } from 'framer-motion'
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

    <motion.div initial={{ x: "100%" }} 
                animate={{ x: "0%" }}
                exit={{ opacity: 1}}
                transition={{duration: 0.75, ease: "easeOut"}}
    >
      <Helmet>
        <title>{advocate.name}</title>
      </Helmet>
      <div className="return">
        <TbArrowBackUp alt="Follow" size={40} onClick={() => navigate(-1)} />
        <h2 className='name_details'>{advocate.name}</h2>
      </div>
      <div className="detailsPage"></div>
        <div className="detailsPage-container">
          <div className="detailsPage-container-picture">
            <img src={advocate.profile_pic} />
          </div>
          <div className="detailsPage-container-description">
            <p className='detailsPage-container-description-info'>Name: 
              <p>{advocate.name}</p>
            </p>
            <p className='detailsPage-container-description-info'>User name: 
              <p>{advocate.username}</p>
            </p>
            <p >Twitter link: 
              <a href={advocate.twitter}
                 className={advocate.twitter !== null ? "detailsPage-container-description-twitter": null}
                target="_blank" rel="noopener noreferrer"
              >
                {' ' + advocate.twitter }
              </a>
            </p>
            <p className='detailsPage-container-description-info'> Biography: 
              <p>{' ' + advocate.bio}</p>
            </p>

            <p className='detailsPage-container-description-info'> Click to Follow:  
              {' '} <RiUserFollowLine alt="Follow" size={40} onClick={null} />
            </p>

            {/* <div className="detailsPage-container-button">
              <RiUserFollowLine alt="Follow" size={30} onClick={null} />
            </div> */}
          </div>
          <div class="detailsPage-container-companies">Companies (for later api)</div>
        </div>
    </motion.div>
    
  )
}

export default AdvocateDetails
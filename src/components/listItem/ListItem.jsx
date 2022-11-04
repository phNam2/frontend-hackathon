import React from 'react'
import {useNavigate} from 'react-router-dom';
import {RiUserFollowFill} from 'react-icons/ri'
import './listitem.css'

const ListItem = ({advocates}) => {
  
  const navigate = useNavigate();
  const goToAdvocatePage = (username) => {
    navigate('/advocates/'+username );
}

  return (
    <div className='"advocates_list"'>
      <div className="advocates_list-container">
        {advocates.map((advocate, i) =>(
          <div className="details">
            <img src={advocate.profile_pic} />
            <a href={advocate.twitter}>{'@'+advocate.username}</a>
            <div className="details-more">
              <h2>{advocate.name}</h2>
              <p>{advocate.bio}</p>
            </div>
            <div className="details-buttons">
              <RiUserFollowFill size={27} onClick={null} />
              <button onClick={() => goToAdvocatePage(advocate.username)}>Details</button>
            </div>

          </div>
          
        ))}
      </div>
    </div>
  )
}

export default ListItem
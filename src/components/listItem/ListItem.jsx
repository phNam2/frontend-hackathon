import React from 'react'
import {useNavigate} from 'react-router-dom';
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
          <div className="details" onClick={() => goToAdvocatePage(advocate.username)}>
            <img src={advocate.profile_pic} />
            <p>{'@'+advocate.username}</p>
            <div className="details-more">
              <h1>{advocate.name}</h1>
              <p>{advocate.bio}</p>
            </div>

          </div>
          
        ))}
      </div>
    </div>
  )
}

export default ListItem
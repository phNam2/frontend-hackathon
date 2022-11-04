import React from 'react'
import {useNavigate} from 'react-router-dom';

const ListItem = ({advocates}) => {
  
  const navigate = useNavigate();
  const goToAdvocatePage = (username) => {
    navigate('/advocates/'+username );
}

  return (
    <div className='"advocates_list"'>
      <div className="advocates_list-container">
        {advocates.map((advocate, i) =>(
          <div class="details" onClick={() => goToAdvocatePage(advocate.username)}>
            <img src={advocate.profile_pic} />
            <a href={'@'+advocate.twitter} key={i}>{advocate.username}</a>
            {/* <a href={'/advocates/'+advocate.username} key={i}>{advocate.name}</a> */}
            <div className="more">
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
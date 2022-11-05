import React from 'react'
import {useNavigate} from 'react-router-dom';
import {RiUserFollowLine, RiUserUnfollowFill} from 'react-icons/ri'
import './listitem.css'

const ListItem = ({advocates}) => {
  
  const navigate = useNavigate();

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  const goToAdvocatePage = (username) => {
    navigate('/advocates/'+username );
    topFunction();
}

  return (
    <div className='"advocates_list"'>
      <div className="advocates_list-container">
        {advocates.map((advocate, i) =>(
          <div className="details">
            <img src={advocate.profile_pic} />
            <a href={advocate.twitter}
               className={advocate.twitter !== null ? "details-twitter": null}
               target="_blank" rel="noopener noreferrer"
            >
              {'@'+advocate.username}
            </a>
            <div className="details-more">
              <h2>{advocate.name}</h2>
              <p>{advocate.bio}</p>
            </div>
            <div className="details-buttons">
              <div className="details-buttons-follows">
                <RiUserFollowLine alt="Follow" size={27} onClick={null} />
              </div>
              
              <button onClick={() => goToAdvocatePage(advocate.username)}>Details</button>
            </div>

          </div>
          
        ))}
      </div>
    </div>
  )
}

export default ListItem
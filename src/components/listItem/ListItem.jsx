import React from 'react'

const ListItem = ({advocates}) => {
  // console.log(advocates);

  return (
    <div>
      <div className="advocates-list">
        {advocates.map((advocate, i) =>(
          <div>
            <a href={'/advocates/'+advocate.username} key={i}>{advocate.name}</a>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default ListItem
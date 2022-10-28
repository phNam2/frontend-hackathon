import React from 'react'

const ListItem = ({advocates}) => {
  // console.log(advocates);

  return (
    <div>
      <h2>Advocates list:</h2>
      <div className="advocates-list">
        {advocates.map((advocate, i) =>(
          <h3 key={i}>{advocate.name}</h3>
        ))}
      </div>
    </div>
  )
}

export default ListItem
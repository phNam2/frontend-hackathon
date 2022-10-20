import React, { useState, useEffect } from 'react'

const AdvocatesList = () => {

    let [advocates, setAdvocates] = useState([])
    useEffect(() => {
        getAdvocates()
    }, [])

    let getAdvocates = async() => {
        let response = await fetch('https://cados.up.railway.app/advocates/')
        let data = await response.json()
        console.log('Data:', data.advocates)
        setAdvocates(data.advocates)
    }

    return (
        <div>
            <div>AdvocatesList:</div>
            <div className="advocates-list">
                {advocates.map((advocate, i) =>(
                    <h3 key={i}>{advocate.name}</h3>
                ))}
            </div>
        </div>
        

        
    )
}

export default AdvocatesList
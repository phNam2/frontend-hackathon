import React, { useState, useEffect } from 'react'

const AdvocatesList = () => {

    let [advocates, setAdvocates] = useState([])
    useEffect(() => {
        getAdvocates()
    }, [])

    let getAdvocates = async() => {
        let response = await fetch('https://cados.up.railway.app/advocates/')
        let data = await response.json()
        console.log('Data:', data)
        setAdvocates(data)
    }

    return (
        <div>AdvocatesList</div>

        
    )
}

export default AdvocatesList
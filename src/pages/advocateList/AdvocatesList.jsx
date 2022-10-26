import React, { useState, useEffect } from 'react'

const AdvocatesList = () => {

    let [advocates, setAdvocates] = useState([])
    let [pages, setPagesNumber] = useState([])
    let [pagesInfo, setPagesInfo] = useState([])
    useEffect(() => {
        getAdvocates()
    }, [])

    let getAdvocates = async() => {
        let response = await fetch('https://cados.up.railway.app/advocates/?page=3')
        let data = await response.json()
        console.log(data.pagination.pages)
        setAdvocates(data.advocates) // Get the advocates information from API
        setPagesInfo(data.pagination)
        setPagesNumber(data.pagination.pages) // Get the current pagination information from API
    }

    return (
        <div>
            <div>AdvocatesList:</div>
            {/* Advocate information */}
            <div className="advocates-list">
                {advocates.map((advocate, i) =>(
                    <h3 key={i}>{advocate.name}</h3>
                ))}
            </div>

            {/* Pages number showcase */}
            <div className="pages-number">
                {pages.map((page, i) =>(
                    <li key={i}>{page}</li>
                ))}
            </div>
            
            <h3>{pagesInfo.total_pages}</h3>
        </div>      
    )
}

export default AdvocatesList
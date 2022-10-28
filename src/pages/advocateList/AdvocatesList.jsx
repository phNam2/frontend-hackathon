import React, { useState, useEffect } from 'react'
import ListItem from '../../components/listItem/ListItem'
import './AdvocateList.css'

const AdvocatesList = () => {

    let [advocates, setAdvocates] = useState([])
    let [pages, setPagesNumber] = useState([])
    let [pagesInfo, setPagesInfo] = useState([])
    useEffect(() => {
        getAdvocates(50)
    }, [])

    let getAdvocates = async(current_page) => {
        let response = await fetch('https://cados.up.railway.app/advocates/?page='+ current_page)
        let data = await response.json()
        // console.log(data.pagination.pages)
        setAdvocates(data.advocates) // Get the advocates information from API
        setPagesInfo(data.pagination)
        setPagesNumber(data.pagination.pages) // Get the current pagination information from API
    }

    // The button lead to the API page after clicked
    const goToPage = (event) => {
        getAdvocates(Number(event.target.id))
    }

    return (
        <div>
            {/* Advocate information */}
            <ListItem advocates={advocates} />

            {/* Pages number showcase */}
            <ul className="pages-number">
                {pages.map((page, i) =>(
                    <li key={i} id={page} class="pages-button" onClick={goToPage}>{page}</li>
                ))}
            </ul>
            
            <h3>{pagesInfo.current_page}</h3>
        </div>      
    )
}

export default AdvocatesList
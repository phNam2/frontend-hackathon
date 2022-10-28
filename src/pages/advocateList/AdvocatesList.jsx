import React, { useState, useEffect } from 'react'
import {useLocation} from "react-router-dom";
import { ListItem } from '../../components';
import './AdvocateList.css'

const AdvocatesList = () => {

    let [advocates, setAdvocates] = useState([])
    let [pages, setPagesNumber] = useState([])
    let [pagesInfo, setPagesInfo] = useState([])

    // Search the page location in the URL
    const search = useLocation().search
    const pageURL = new URLSearchParams(search).get('page')
    useEffect(() => {
        if (pageURL == null) {
            getAdvocates(1)
        } else {
            getAdvocates(pageURL)
        }
    }, [])

    let getAdvocates = async(current_page) => {
        let response = await fetch('https://cados.up.railway.app/advocates/?page='+ current_page)
        let data = await response.json()
        // console.log(data.pagination.pages)
        setAdvocates(data.advocates) // Get the advocates information from API
        setPagesInfo(data.pagination)
        setPagesNumber(data.pagination.pages) // Get the current pagination information from API
        window.history.replaceState(null, "", "/advocates/?page=" + current_page)
    }

    // The button lead to the API page after clicked
    const goToPage = (event) => {
        getAdvocates(Number(event.target.id))
    }

    const goToFirstPage = () => {
        getAdvocates(1)
    }

    const goToLastPage = () => {
        getAdvocates(pagesInfo.total_pages)
    }

    return (
        <div>
            {/* Advocate information */}
            <ListItem advocates={advocates} />

            {/* Pages number showcase */}
            <ul className="pages-number">
                <li>
                    <button onClick={goToFirstPage}>First</button>
                </li>
                <li>
                    <button>Prev</button>
                </li>
                {pages.map((page, i) =>(
                    <li key={i} 
                        id={page} 
                        class={pagesInfo.current_page == page ? "active": null}
                        onClick={goToPage}
                    >
                        {page}
                    </li>
                ))}
                <li>
                    <button>Next</button>
                </li>
                <li onClick={goToLastPage}>
                    <button>Last</button>
                </li>
            </ul>
            
            <h3>{pagesInfo.current_page}</h3>
            
        </div>      
    )
}

export default AdvocatesList
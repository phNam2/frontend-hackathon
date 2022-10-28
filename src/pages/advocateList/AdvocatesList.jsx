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

    // The function go to the first page
    const goToFirstPage = () => {
        getAdvocates(1)
    }

    // The function go to the last page
    const goToLastPage = () => {
        getAdvocates(pagesInfo.total_pages)
    }

    // The function go to the previous page
    const goToPrevPage = () => {
        if (pagesInfo.has_previous) {
            getAdvocates(pagesInfo.current_page-1)
        }
    }

    // The function go to the next page
    const goToNextPage = () => {
        if (pagesInfo.has_next) {
            getAdvocates(pagesInfo.current_page+1)
        }
    }

    return (
        <div>
            {/* Advocate information */}
            <ListItem advocates={advocates} />

            {/* Pages number button section */}
            <ul className="pages-number">
                <li>
                    <button onClick={goToFirstPage}>First</button>
                </li>
                <li>
                    <button onClick={goToPrevPage}>Prev</button>
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
                    <button onClick={goToNextPage}>Next</button>
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
import React, { useState, useEffect } from 'react'
import {useLocation} from "react-router-dom";
import { ListItem } from '../../components';
import './AdvocateList.css'

const AdvocatesList = () => {

    let [advocates, setAdvocates] = useState([])
    let [pages, setPagesNumber] = useState([])
    let [pagesInfo, setPagesInfo] = useState([])
    let [select, setSelect] = useState([null])

    // Search the page location in the URL
    let search = useLocation().search
    let pageURL = new URLSearchParams(search).get('page')
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
        window.history.replaceState(null, "", "/advocates/?page=" + current_page) // Fix the URL for history search
    }

    // The button lead to the API page after clicked
    const goToPage = (event) => {
        getAdvocates(Number(event.target.id))
        // console.log(event.target.id)
    }

    const goToPage2 = (event) => {
        let arr = event.target.id.split(" ");
        getAdvocates(Number(arr[1]))
        // console.log(arr[1])
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

    // Return all the page number in the collapsible button
    const allPageNumber = [];
    for (let i=1; i<= pagesInfo.total_pages; i++) {
        allPageNumber.push(<div key={"drop"+i} 
                               onClick={goToPage2} 
                               id={"drop "+i}
                            >
                                {i}
                            </div>);
    }


    const toggle = (i) => {
        if (select === i) {
            return setSelect(null)
        }

        setSelect(i)
    }
    // Rendering conditional for the choosing button
    function Element({ page }) {
        if (pagesInfo.current_page === page ) {
          return <div>
                    <div className="upper" onClick={() => toggle(page)}>
                        {page}
                        <span>{select!=page ? '-' : '+'}</span>
                    </div>
                    <div className={select!=page ? "vertical-menu":"vertical-menu-show"}>
                        {allPageNumber}
                    </div>
                 </div>
        }
        return <a>{page}</a>;
    }

    return (
        <div>
            {/* Advocate information */}
            <ListItem advocates={advocates} />

            {/* Pages number button section */}
            <ul className="pages-number">
                <div key="first" className={pagesInfo.current_page === 1 ? "work": null}>
                    <button onClick={goToFirstPage}>First</button>
                </div>
                <div key="prev"className={pagesInfo.current_page === 1 ? "work": null}>
                    <button onClick={goToPrevPage}>Prev</button>
                </div>
                {pages.map((page, i) =>(
                    <div>
                        <li key={i} 
                            id={page} 
                            className={pagesInfo.current_page === page ? "active": null}
                            onClick={goToPage}
                        >
                            <Element page={page}/>
                        </li>

                    </div>
                ))}
                <div key="next" className={pagesInfo.current_page === pagesInfo.total_pages ? "work": null}>
                    <button onClick={goToNextPage}>Next</button>
                </div>
                <div key="last" className={pagesInfo.current_page === pagesInfo.total_pages ? "work": null}>
                    <button onClick={goToLastPage}>Last</button>
                </div>
            </ul>
            
            <h3>{pagesInfo.current_page}</h3>
            
        </div>      
    )
}

export default AdvocatesList
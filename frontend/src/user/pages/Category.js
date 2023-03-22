
import { useEffect, useState } from "react"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header"
import { CategoryHeader } from "../components/category/CategoryHeader"
import { CategoryBody } from "../components/category/CategoryBody"
import {category} from "../api/category"
import { useLocation } from "react-router-dom"
import { SearchBody } from "../components/search/SearchBody"
const PAGE_LIMIT = 20
const Category = () => {

    const location = useLocation()

    let cat = location.state ? location.state : ""

    const [currentPage, setCurrentPage] = useState(1)
    const [startPage, setStartPage] = useState(1)
    const [data, setData] = useState([])
    
    const [numOfPages, setNumOfPages] = useState(1)
   
    useEffect(() => {
        getData(1)
    }, [])

    function getData(page){
        category({category: cat, page: page, limit: PAGE_LIMIT},(results) => {
          const tmp = results.docs
          const pageNo = results.total / PAGE_LIMIT
          setData([...tmp])
          setNumOfPages(pageNo)
          setCurrentPage(page)
        })
      }

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <div style={{ height: "13vh", background: " #2f3831" }}>
            
            </div>
            <CategoryHeader title={cat}/>
            <SearchBody data={data} />
            <div class="col-lg-12">
                <div class="blog-pagination margin-top-55">
                    <div class="custom-pagination mt-4 mt-lg-5">
                        <nav>
                            <ul class="pagination">

                                <li class="page-item" onClick={() => {
                                    if (startPage > 1)
                                        setStartPage(startPage - 1)
                                }}>
                                    <a class="page-link"
                                        aria-label="&laquo; Previous">&lsaquo;</a>
                                </li>
                                {numOfPages > 0 && <li className={"page-item " + (startPage == currentPage ? 'active' : '')} onClick={() => {getData(startPage + 0)}}><a class="page-link" >{startPage}</a></li>}
                                {numOfPages > 1 && <li className={"page-item " + (startPage + 1 == currentPage ? 'active' : '')}  onClick={() => {getData(startPage + 1)}}><a class="page-link" >{startPage + 1}</a></li>}
                                {numOfPages > 2 && <li className={"page-item " + (startPage + 2 == currentPage ? 'active' : '')}  onClick={() => {getData(startPage + 2)}}><a class="page-link">{startPage + 2}</a></li>}

                                <li class="page-item" onClick={() => {
                                    if (startPage + 3 <= numOfPages)
                                        setStartPage(startPage + 1)
                                }}>
                                    <a class="page-link"
                                        aria-label="Next &raquo;">&rsaquo;</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

            </div>
            </div>

        </>
    )
}

export default Category

 // const changePage = (page) => {
        
    //     const PER_PAGE = 3
    //     if (page * PER_PAGE- PER_PAGE < results.length) {

    //         const start = page * PER_PAGE - PER_PAGE
    //         const end =  start + PER_PAGE < results.length ? start + PER_PAGE : results.length

    //         let temp = []
    //         for (let i = start; i < end; i++) {
    //             temp.push(results[i])
    //         }
    //         setData(temp)
    //         setCurrentPage(page)
    //     } else {
    //     }
    // }
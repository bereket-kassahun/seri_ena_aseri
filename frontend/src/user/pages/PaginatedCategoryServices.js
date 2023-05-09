
import { useEffect, useState } from "react"
import { CategoryHeader } from "../components/category/CategoryHeader"
import { SearchBody } from "../components/search/SearchBody"
import { categoryPaginatedList, subCategoryPaginatedList } from "../api"
import { useLocation } from "react-router-dom"
const PAGE_LIMIT = 20
const PaginatedCategoryServices = () => {

    const location = useLocation()

    let state = location.state ? location.state : ""
    const category = state.category
    const subcategory = state.subcategory
    const useSubcategory = state.useSubcategory ? state.useSubcategory : false

    const [currentPage, setCurrentPage] = useState(1)
    const [startPage, setStartPage] = useState(1)
    const [data, setData] = useState([])
    
    const [numOfPages, setNumOfPages] = useState(1)
   
    useEffect(() => {
        getData(1)
    }, [])

    function getData(page){
        if(useSubcategory){
            subCategoryPaginatedList({subcategory: subcategory, page: page, limit: PAGE_LIMIT},(res) => {
                if(res.success){
                    console.log("subactegory paginated", res )
                    const tmp = res.docs.docs
                    const pageNo = res.docs.total / PAGE_LIMIT
                    setData([...tmp])
                    setNumOfPages(pageNo)
                    setCurrentPage(page)
                }
              })
        }else{
            categoryPaginatedList({category: category, page: page, limit: PAGE_LIMIT},(res) => {
                if(res.success){
                    const tmp = res.docs.docs
                    const pageNo = res.docs.total / PAGE_LIMIT
                    setData([...tmp])
                    setNumOfPages(pageNo)
                    setCurrentPage(page)
                }
              })
        }
        
      }

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <div style={{ height: "13vh", background: " #2f3831" }}>
            
            </div>
            <CategoryHeader title={useSubcategory ? subcategory : category}/>
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

export default PaginatedCategoryServices

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
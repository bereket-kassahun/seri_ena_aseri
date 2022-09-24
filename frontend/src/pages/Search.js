
import { Header } from '../components/header'
import { Footer } from '../components/footer/Footer';
import { SearchBody } from '../components/search/SearchBody';
import { SearchHeader } from '../components/search/SearchHeader';
import { search } from '../api/search'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PAGE_LIMIT = 20
const Search = () => {
  const location = useLocation()

  let word = location.state ? location.state : ""

  const [currentPage, setCurrentPage] = useState(1)
  const [startPage, setStartPage] = useState(1)
  const [numOfPages, setNumOfPages] = useState(1)
  const [data, setData] = useState([])
  const [searchWord, setSearchWord] = useState(word)

  useEffect(() => {
    getData(1)
  }, [])

  useEffect(() => {
    getData(1)
  },[searchWord])
  function getData(page){
    search({word: searchWord, page: page, limit: PAGE_LIMIT},(results) => {
      console.log(results.docs)
      const tmp = results.docs
      const pageNo = results.total / PAGE_LIMIT
      setData([...tmp])
      setNumOfPages(pageNo)
      setCurrentPage(page)
      
    })
  }

  function callback(word){
    setSearchWord(word)
  }
  return (
    <div className="">
      <Header/>
      <SearchHeader hint={word} callback={callback}/>
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
                {numOfPages > 0 && <li className={"page-item " + (startPage == currentPage ? 'active' : '')} onClick={() => { getData(startPage + 0) }}><a class="page-link" >{startPage}</a></li>}
                {numOfPages > 1 && <li className={"page-item " + (startPage + 1 == currentPage ? 'active' : '')} onClick={() => { getData(startPage + 1) }}><a class="page-link" >{startPage + 1}</a></li>}
                {numOfPages > 2 && <li className={"page-item " + (startPage + 2 == currentPage ? 'active' : '')} onClick={() => { getData(startPage + 2) }}><a class="page-link">{startPage + 2}</a></li>}

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
      <Footer/>
    </div>
  );
}

export default Search;

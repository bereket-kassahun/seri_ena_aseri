
import { Header } from '../components/header'
import { Footer } from '../components/footer/Footer';
import { SearchBody } from '../components/search/SearchBody';
import { SearchHeader } from '../components/search/SearchHeader';
// import { search } from '../api/search'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { search } from '../api'
const PAGE_LIMIT = 20
const Search = () => {
  const location = useLocation()

  let word = location.state ? location.state : ""

  const [currentPage, setCurrentPage] = useState(1)
  const [startPage, setStartPage] = useState(1)
  const [numOfPages, setNumOfPages] = useState(1)
  const [data, setData] = useState([])
  const [searchWord, setSearchWord] = useState(word)


  const [rating, setRating] = useState("-1")
  const [price, setPrice] = useState("-1")
  const [type, setType] = useState("-1")
  const [paymentType, setPaymentType] = useState("-1")
  const [experience, setExperience] = useState("-1")
  

  // fetching data when loading for first time
  useEffect(() => {
    getData()
  }, [])

  // fetching data when rating, price, type change
  useEffect(() => {
    getData()
  }, [rating, price, type, paymentType, experience])

  function getData(page = 1, word = searchWord) {
    search({ rating: rating, price: price, type: type, word: word, page: page, experience: experience, limit: PAGE_LIMIT, paymentType: paymentType }, (results) => {
      const tmp = results.docs
      const pageNo = results.total / PAGE_LIMIT
      setData([...tmp])
      setNumOfPages(pageNo)
      setCurrentPage(page)
    })
  }

  function callback(word) {
    getData(undefined, word)
    setSearchWord(word)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <SearchHeader hint={word} callback={callback} />

      <div class="container" style={{ paddingTop: "10px" }}>
        <form method="get" id="search_service_list_form">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Rating</label>
                <select class="form-select" id="inputGroupSelect01" onChange={(evnt) => { setRating(evnt.target.value) }}>
                  <option selected value="-1">All</option>
                  <option value="5">{`5`}</option>
                  <option value="4">{`4`}</option>
                  <option value="3">{`3`}</option>
                  <option value="2">{`0 to 2`}</option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Price</label>
                <select class="form-select" id="inputGroupSelect01" onChange={(evnt) => { setPrice(evnt.target.value) }}>
                  <option value="-1" selected>All</option>
                  <option value="4">{`Greater Than 5000`}</option>
                  <option value="3">{`1000 to 5000`}</option>
                  <option value="2">{`500 to 1000`}</option>
                  <option value="1">{`0 to 500`}</option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Category</label>
                <select class="form-select" id="inputGroupSelect01" onChange={(evnt) => { setType(evnt.target.value); console.log(evnt.target.value) }}>
                  <option value="-1" selected>All</option>
                  <option value="2">{`Premium`}</option>
                  <option value="1">{`Standard`}</option>
                  <option value="0">{`Basic`}</option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Payment Type</label>
                <select class="form-select" id="inputGroupSelect01" onChange={(evnt) => { setPaymentType(evnt.target.value); console.log(evnt.target.value) }}>
                  <option value={-1} selected="">All</option>
                  <option value={0} >Fixed Price</option>
                  <option value={1} >Per Hour</option>
                  <option value={2} >Starting From</option>
                  <option value={3} >Please Call</option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Experience</label>
                <input class="form-control" name="experience" id="experience" type="number" placeholder="Experience" onChange={(evnt) => { setExperience(evnt.target.value) }} />
              </div>
            </div>
          </div>
        </form>
      </div>
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
                {numOfPages > 0 && <li className={"page-item " + (startPage == currentPage ? 'active' : '')} onClick={() => { getData(startPage + 0, undefined) }}><a class="page-link" >{startPage}</a></li>}
                {numOfPages > 1 && <li className={"page-item " + (startPage + 1 == currentPage ? 'active' : '')} onClick={() => { getData(startPage + 1, undefined) }}><a class="page-link" >{startPage + 1}</a></li>}
                {numOfPages > 2 && <li className={"page-item " + (startPage + 2 == currentPage ? 'active' : '')} onClick={() => { getData(startPage + 2, undefined) }}><a class="page-link">{startPage + 2}</a></li>}

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
  );
}

export default Search;

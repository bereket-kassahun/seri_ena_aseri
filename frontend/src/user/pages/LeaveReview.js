import { LeaveReviewCard } from "../components/cards/LeaveReviewCard"
import ReviewHeader from "../components/review/ReviewHeader"
import { JoinUs } from "../components/sections/JoinUs"
import Rating from 'react-rating'
import { EmptyResult } from "../components/service/EmptyResult"

import { useState, useEffect, useContext } from 'react'

import { ClientContext } from "../context/client-context"
import { search } from '../api'

import { saveRating } from "../api"
import networkCall from "../../utils/networkCall"
export const LeaveReview = () => {
    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);

    const [currentServiceId, setCurrentServiceId] = useState("")
    const [clientRatedService, setClientRatedService] = useState(false)
    // const [ratingValue, setRatingValue] = useState(0)
    // let ratingValue = undefined


    const [currentPage, setCurrentPage] = useState(1)
    const [startPage, setStartPage] = useState(1)
    const [numOfPages, setNumOfPages] = useState(1)
    const [data, setData] = useState([])
    const [searchWord, setSearchWord] = useState('')
    const [showNothing, setShowNothing] = useState(false)


    const [value, setValue] = useState(0)
    const [review, setReview] = useState('')

    const [letterCount, setLetterCount] = useState(0)
    const setRatingId = (_id, clientAlreadyRated) => {
        setClientRatedService(clientAlreadyRated)
        setCurrentServiceId(_id)
    }
    const saveCurrentRating = () => {
        console.log(currentClient._id, currentServiceId)
        if (currentClient._id != "" && currentServiceId != "") {
            networkCall({ clientId: currentClient._id, serviceId: currentServiceId, clientEmail: currentClient.email, value: value, value: value, review: review }, (data) => {

                console.log(data)
                if (data.success) {

                }
            }, 'POST', 'client/rate')
            // saveRating({ clientId: currentClient._id, serviceId: currentServiceId, value: ratingValue }, (data) => {
            //     if (data.success) {
            //         console.log("success")
            //     }
            // })
        }
    }

    // useEffect(() => {
    //     getData()
    //   }, [rating, price, type])

    function getData(page = 1, word = searchWord) {
        search({ rating: '-1', price: '-1', type: '-1', word: word, page: 1, limit: 20 }, (results) => {
            const tmp = results.docs
            const pageNo = results.total / 20
            console.log(results)
            setData([...tmp])
            setNumOfPages(pageNo)
            setCurrentPage(page)
            tmp.length == 0 ? setShowNothing(true) : setShowNothing(false)
        })
    }

    function callback(word) {
        getData(1, word)
        setSearchWord(word)
    }

    const temp = { title: 'sdsd ', body: 'adffffff', overview: ' who cares who cares ' }
    return (
        <>
            <ReviewHeader hint={''} callback={callback} />
            <div className="row" style={{ margin: '0px' }}>

                {
                    data.map((value, index) => {
                        return (<LeaveReviewCard data={value} setRatingId={setRatingId} />)
                    })
                }

                {
                    showNothing && (
                        <>
                            <EmptyResult />
                        </>
                    )
                }

            </div>
            <JoinUs />

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                {
                                    clientRatedService ? (<h3>You have already rated this service</h3>)
                                        :
                                        (
                                            <>
                                                <Rating
                                                    emptySymbol={<span class="fa fa-2x  fa-star"></span>}
                                                    fullSymbol={<span class="fa fa-2x  fa-star checked"> </span>}
                                                    onClick={(rate) => { setValue(rate) }}
                                                />
                                                <div class="mb-3">
                                                    <label for="message-text" class="col-form-label">Message: {letterCount}/90</label>
                                                    <textarea class="form-control" id="message-text" style={{ width: '100%' }} maxlength="90"
                                                        onChange={(evnt) => {
                                                            setReview(evnt.target.value)
                                                            setLetterCount(evnt.target.value.length)
                                                        }}>
                                                    </textarea>
                                                </div>
                                            </>
                                        )
                                }

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">
                                <button class="btn btn-primary" data-bs-dismiss="modal" onClick={(evnt) => {
                                    if (!clientRatedService) {
                                        addServiceIdToRatings(currentServiceId)
                                        saveCurrentRating()
                                    }
                                }}>
                                    {
                                        <p style={{ color: "white" }}>{clientRatedService ? "Close" : "Rate"} </p>
                                    }
                                </button>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
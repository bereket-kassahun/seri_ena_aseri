import { useEffect, useState } from "react"
import { notify } from "../../utils/notify"
import { ToastContainer } from "react-toastify";
import networkCall from "../../utils/networkCall";
import { Link } from "react-router-dom";
export const CreateService = () => {

    const [word, setWord] = useState('')
    const [serviceType, setServiceType] = useState(0)
    const [searchResult, setSearchResult] = useState([])
    const searchProfessional = () => {
        networkCall({ word: word }, (data) => {
            setSearchResult(data)
        }, 'POST', 'admin/search_professional')
    }

    // useEffect(() => {
    //     searchProfessional()
    // }, word)

    return (
        <>
            <div class="row gx-3 mb-3">
                <div class="col-md-6">
                    <label class="small mb-1" for="inputLastName">Select Type of Service</label>
                    <select class="form-select" aria-label="Default select example"
                        onChange={(evnt) => { setServiceType(evnt.target.value) }}>
                        <option value="0">Basic Service</option>
                        <option value="1">Standard Service</option>
                        <option value="2">Premium Service</option>
                    </select>
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter professional's first name/email/last name" aria-label="Recipient's username" aria-describedby="button-addon2"
                    onChange={(evnt) => { setWord(evnt.target.value) }} />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                    onClick={(evnt) => { searchProfessional() }}>Search</button>
            </div>
            <ul >
                {
                    searchResult.map((value, index) => {
                        return (
                            <li>
                                <Link class="dropdown-item" to="/admin/dashboard/add_service" state={{ serviceType: serviceType, value: value }} style={{ cursor: "pointer" }}>
                                    {value.email}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>


            {/* <div class="dropdown">
                <ul >
                    {
                        <li>
                            <Link class="dropdown-item" to="/search" style={{ cursor: "pointer" }}>
                                THIS IS WRONG WAY TO CONDUCT
                            </Link>
                        </li>

                    }
                    <li>
                        <Link class="dropdown-item" to="/search" style={{ cursor: "pointer" }}>
                            THIS IS WRONG WAY TO CONDUCT
                        </Link>
                    </li>
                    <li>
                        <Link class="dropdown-item" to="/search" style={{ cursor: "pointer" }}>
                            THIS IS WRONG WAY TO CONDUCT
                        </Link>
                    </li>
                </ul>
            </div> */}
        </>
    )
}
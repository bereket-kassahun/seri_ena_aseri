import { EditorState } from 'draft-js';
import { uploadImage } from '../../api/uploadImage';
import { serviceRegister } from '../../api/serviceRegister';
import { SellerContext } from "../../context/seller-context";
import { useContext, useState } from "react"
import "./editor.css"
import { BasicServiceCard } from './BasicServiceCardPreview';
import { sellerLogin } from '../../../user/api';
import { categories } from '../../../utils/category_list';
export const EntryService = () => {

    const seller = useContext(SellerContext);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);



    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")


    // const [img, setImg] = useState("")
    const [title, setTitle] = useState("")
    const [overview, setOverview] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [professionalStatus, setProfessionalStatus] = useState(0)


    const currentService = {
        title, overview, category, price,
        professionalFirstName: seller.firstName, professionalLastName: seller.lastName,
        professionalImage: seller.img
    }

    const validateData = () => {
        if (title == "" || overview == "" || category == "" || price == "") {
            setErrorMsg("Please fill all fields!")
            setSuccessMsg("")
            return false
        }
        if (seller == null || seller._id == null) {
            setErrorMsg("Please Login first!")
            setSuccessMsg("")
            return false
        }
        setErrorMsg("")
        return true
    }

    const register = (img) => {
        const professionalId = seller._id
        const professionalFirstName = seller.firstName
        const professionalLastName = seller.lastName
        const professionalImage = seller.img
        const professionalPhoneNumber = seller.phoneNumber
        const serviceType = 0

        serviceRegister({ title, price, overview, category, professionalId, professionalFirstName, professionalLastName, professionalImage, professionalStatus, serviceType, professionalPhoneNumber }, (data) => {
            setSuccessMsg("Service Registered!")
        })
    }


    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
        ]
    }


    return (
        <>
            {/* <div class="row">
                <div class="col-lg-12">
                    <div class="dashboard-settings margin-top-40">
                        <h2 class="dashboards-title"> Entry Service </h2>
                    </div>
                </div>
            </div> */}
            {
                errorMsg.length > 0 && (
                    <div class="alert alert-danger margin-top-20" role="alert">
                        {errorMsg}
                    </div>
                )
            }

            {
                successMsg.length > 0 && (
                    <div class="alert alert-primary margin-top-20" role="alert">
                        {successMsg}
                    </div>
                )
            }

            <div class="row" >
                <section class="content margin-top-10" style={{ width: "100%" }} >
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Basic Info</h3>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        {/* <label for="inputName">Project Name</label>
                                        <input type="text" id="inputName" class="form-control"/> */}
                                        <label for="title" > Title* </label>
                                        <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} />

                                    </div>
                                    <div class="form-group">
                                        <label for="inputDescription">Overview*</label>
                                        <textarea id="inputDescription" class="form-control" rows="4" maxLength="50" placeholder="Add overview" onChange={(evnt) => { setOverview(evnt.target.value) }}></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="title" class="info-title"> Category* </label>
                                        <input class="form-control" list="browsers" name="browser" placeholder="Add category" id="browser" onChange={(evnt) => { setCategory(evnt.target.value) }} />
                                        <datalist id="browsers">
                                            {
                                                categories.map((value, index) => (
                                                    <option value={value.title} />
                                                ))
                                            }
                                        </datalist>
                                    </div>
                                    <div class="form-group">
                                        <label for="title" class="info-title"> Price* </label>
                                        <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <div class="" >
                <div class="margin-top-30" >
                    <div class="media-upload-btn-wrapper" style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        alignContent: "space-between",
                    }} >
                        <div>
                            <button type="button" class="btn btn-primary btn-lg btn-open-modal" data-bs-toggle="modal" data-bs-target="#modal-preview-service">
                                Preview Service
                            </button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary btn-lg btn-open-modal" onClick={() => {
                                if (validateData()) {
                                    register()
                                }
                            }}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <BasicServiceCard data={currentService} />
        </>
    )
}
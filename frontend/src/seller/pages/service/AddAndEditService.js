import { EditorState } from 'draft-js';

import { uploadImage } from '../../api/uploadImage';
import { serviceRegister } from '../../api';
import { SellerContext } from "../../context/seller-context";
import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import "./editor.css"

import { RichTextEditor } from '@mantine/rte';
import { DetailPreview } from './DetailPreview';
import { PremiumServiceCardPreview } from './PremiumServiceCardPreview';
// import { categories } from '../../../utils/categories';
// import { subcategories } from '../../../utils/subcategories'
import { mainCategories } from '../../../utils/maincategories'
import { BasicServiceCard } from './BasicServiceCardPreview';


import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { categories } from '../../../utils/categories';
export const AddAndEditService = ({ editing = false }) => {
    const location = useLocation()

    let state = location.state ? location.state : ""
    let type = state.type

    const { seller, updateCurrentSeller } = useContext(SellerContext);

    const navigate = useNavigate()

    if (!seller) {
        navigate('/seller')
    }

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);

    const [subcategories, setSubcategories] = useState([])

    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")


    const [title, setTitle] = useState("")
    const [overview, setOverview] = useState("")
    const [category, setCategory] = useState(mainCategories[0])
    const [subcategory, setSubcategory] = useState(subcategories[0])
    const [price, setPrice] = useState("")
    const [bio, setBio] = useState("")
    const [img, setImg] = useState("")
    const [city, setCity] = useState("")
    const [specificLocation, setSpecificLocation] = useState("")
    const [specificAdress, setSpecificAdress] = useState("")
    const [deliveryDay, setDeliveryDay] = useState("")
    const [professionalStatus, setProfessionalStatus] = useState(type)
    const [paymentType, setPaymentType] = useState(0)
    const [serviceRegistered, setServiceRegistered] = useState(false)
    const [imageUploadStarted, setImageUploadStarted] = useState(false)
    const [imageUploadEnded, setImageUploadEnded] = useState(false)
    const [experience, setExperience] = useState(0)

    const [latitude, setLatitued] = useState("")
    const [longitude, setLongitued] = useState("")

    const [incorrectImageTypeSelected, setIncorrectImageTypeSelected] = useState(false);

    let currentService = {}

    if (seller) {
        currentService = {
            title, overview, category, subcategory, price, experience, paymentType, bio, city, specificAdress, deliveryDay, professionalStatus, img, detail: editorState,
            professionalFirstName: seller.firstName, professionalLastName: seller.lastName, professionalImage: seller?.img, latitude, longitude, status: 2
        }
    }


    const [letterCountOverview, setLetterCountOverview] = useState(0)
    const [selectedImageName, setSelectedImageName] = useState("")

    useEffect(() => {
        if (type == 2 || type == 1) {
            checkLocationPermission()
        }
    }, [])

    const checkLocationPermission = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLatitued(position.coords.latitude + "");
                setLongitued(position.coords.longitude + "");
            });
            return true
        }
        else {
            notifyError("Please Allow Location Permission")
            return false
        }
    }

    const onFileChange = (evnt) => {
        let files = Array.from(evnt.target.files)

        if (files.length == 0) {
            return;
        }


        setImageUploadStarted(true)
        setImageUploadEnded(false)

        const formData = new FormData()

        files.forEach((file, i) => {
            setSelectedImageName(file.name)
            formData.append(i, file)
        })

        uploadImage(formData, (res) => {
            console.log(res)
            if (res.success) {
                res.payload.forEach((data, i) => {
                    setImg(data.secure_url)
                    setImageUploadStarted(false)
                    setImageUploadEnded(true)
                    setIncorrectImageTypeSelected(false);
                })
            } else {
                if (res.error.message)
                    notifyError(res.error.message)
                setIncorrectImageTypeSelected(true);
            }
        })
    }


    const notifySuccess = (msg) =>
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    const notifyError = (msg) =>
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });


    const validateData = () => {
        if (incorrectImageTypeSelected) {
            notifyError("Incorrect Image File Selected")
            return false
        }
        if (serviceRegistered) {
            notifyError("The Service is Already Registered")
            return false
        }

        if (type == '2') {
            if (title == "" || overview == "" || category == "" || (price == "" && paymentType != 3) || city == "" || editorState.isEmpty) {
                notifyError("Please fill all fields")
                return false
            }
            if (imageUploadStarted && !imageUploadEnded) {
                notifyError("Image is being uploaded")
                return false
            } else if (img == "") {
                notifyError("Please pick an image")
                return false
            }
            // else if (!checkLocationPermission()) {
            //     notifyError("Please allow location Permission")
            //     return false
            // }
        }

        if (type == '1') {
            if (title == "" || overview == "" || category == "" || (price == "" && paymentType != 3) || city == "") {
                notifyError("Please fill all fields")
                return false
            }
            if (imageUploadStarted && !imageUploadEnded) {
                notifyError("Image is being uploaded")
                return false
            } else if (img == "") {
                notifyError("Please pick an image")
                return false
            }
            // else if (!checkLocationPermission()) {
            //     return false
            // }
        }

        if (type == '0') {
            if (title == "" || overview == "" || category == "" || (price == "" && paymentType != 3)) {
                notifyError("Please fill all fields")
                return false
            }
        }

        if (seller == null || seller._id == null) {
            notifyError("Please Login first")
            return false
        }


        return true
    }

    const register = () => {
        const detail = type == 2 ? editorState : ""
        const professionalId = seller._id
        const professionalFirstName = seller.firstName
        const professionalLastName = seller.lastName
        const professionalImage = seller?.img
        const professionalPhoneNumber = seller.phoneNumber
        const serviceType = type

        console.log(typeof (detail), detail, editorState.isEmpty)

        serviceRegister({ title, price, experience, overview, category, subcategory, bio, city, specificAdress, detail, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImage, professionalStatus, serviceType, professionalPhoneNumber, paymentType, latitude, longitude, specificLocation }, (res) => {
            if (res.success) {
                notifySuccess("Service Registered")
                setServiceRegistered(true)
            } else {
                notifyError("Unable To Register Your Service")
            }
        })
    }




    const updateSubCategory = (currentCategory) => {
        categories.forEach(element => {
            if (element.category == currentCategory) {
                setSubcategories(element.subcategories)
                setSubcategory(element.subcategories[0])
            }
        });
    }

    useEffect(() => {
        updateSubCategory(category)
    }, [category])

    const basicServiceForm = (
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title"><b> {seller?.text?.create_service?.basicInfo} </b></h3>
            </div>
            <div class="card-body">
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b>{seller?.text?.create_service?.serviceTitle}</b> </span>
                    </div>
                    <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} />
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> {seller?.text?.create_service?.category} </b> </span>
                    </div>
                    <select class="custom-select" onChange={(evnt) => {
                        setCategory(evnt.target.value)

                    }}>
                        {
                            mainCategories.map((value, index) => (
                                <option value={value}>{value}</option>
                            ))
                        }
                    </select>
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> {seller?.text?.create_service?.subCategory} </b> </span>
                    </div>
                    <select class="custom-select" onChange={(evnt) => { setSubcategory(evnt.target.value) }}>
                        {
                            subcategories.map((value, index) => (
                                <option value={value}>{value}</option>
                            ))
                        }
                    </select>
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> {seller?.text?.create_service?.price} </b> </span>
                    </div>
                    <select class="custom-select" style={{ maxwidth: "60px" }} onChange={(evnt) => { setPaymentType(evnt.target.value) }}>
                        <option value={0} selected="">Fixed Price</option>
                        <option value={1} >Per Hour</option>
                        <option value={2} >Starting From</option>
                        <option value={3} >Please Call</option>
                    </select>
                    <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} />
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> Experience(In Years) </b> </span>
                    </div>
                    <input class="form-control" name="experience" id="experience" type="number" placeholder="Experience" onChange={(evnt) => { setExperience(evnt.target.value) }} />
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">{seller?.text?.create_service?.overview}: {letterCountOverview}/90</label>
                    <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="Add overview" maxlength="90"
                        onChange={(evnt) => {
                            setOverview(evnt.target.value)
                            setLetterCountOverview(evnt.target.value.length)
                        }}>
                    </textarea>
                </div>
                <div class="form-group">
                    <label for="title" class="info-title"> <b> {seller?.text?.create_service?.imageInfo} </b>  </label>
                    <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "right" }} >
                        <label for="image" class="btn btn-secondary"> {seller?.text?.create_service?.selectImage}</label>
                        <input type='file' id='image' style={{ visibility: "hidden" }} accept="image/*" onChange={(evnt) => { onFileChange(evnt) }} label='Image' />
                        <p>{selectedImageName}</p>
                    </div>
                </div>
            </div>
        </div>
    )



    const aboutYou = (
        <div class="card card-secondary" style={{ height: '100%' }}>
            <div class="card-header">
                <h3 class="card-title"> <b> {seller?.text?.create_service?.aboutYou} </b></h3>
            </div>
            <div class="card-body">
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b>  {seller?.text?.create_service?.city}  </b> </span>
                    </div>
                    <input class="form-control" name="title" id="title" type="text" placeholder="Add city" onChange={(evnt) => { setCity(evnt.target.value) }} />
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b>  {seller?.text?.create_service?.specificLocation}  </b> </span>
                    </div>
                    <select class="custom-select" style={{ maxwidth: "60px" }} onChange={(evnt) => { setSpecificLocation(evnt.target.value) }}>
                        <option value={"Kechene"} selected="">Kechene</option>
                        <option value={"Bole"} >Bole</option>
                        <option value={"Tor-Hayiloch"} >Tor-Hayiloch</option>
                        <option value={"HayaHulet"} >HayaHulet</option>
                        <option value={"CMC"} >CMC</option>
                        <option value={"Ayer-Tena"} >Ayer-Tena</option>
                    </select>
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b>  {seller?.text?.create_service?.location}  </b> </span>
                    </div>
                    <input class="form-control" name="latitude" id="title" type="number" value={latitude} />
                    <input class="form-control" name="longitued" id="title" type="number" value={longitude} />
                </div>

                <div class="form-group">
                    <label for="title" class="info-title"> <b> {seller?.text?.create_service?.bio} </b>  </label>
                    <textarea class="form-control" name="title" id="title" rows="6" type="text" placeholder="write your personal info that clients can see" onChange={(evnt) => { setBio(evnt.target.value) }} />
                </div>
            </div>
        </div>
    )



    return (
        <>
            <ToastContainer />
            {
                type == 2 && (
                    <>
                        <div class="row">
                            <div class="col-lg-12 margin-top-10">
                                <section class="content" style={{ width: "100%", paddingTop: "30px" }}>
                                    <div class="row">
                                        <div class="row">
                                            <div class="col-md-6">
                                                {basicServiceForm}
                                            </div>
                                            <div class="col-md-6">
                                                {aboutYou}
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card card-secondary margin-top-30">
                                                <div class="card-header">
                                                    <h3 class="card-title"> <b> {seller?.text?.create_service?.serviceDetail} </b></h3>
                                                </div>
                                                <div class="card-body">
                                                    <div class="single-dashboard-input">
                                                        <div class="single-info-input margin-top-30" >
                                                            <RichTextEditor value={editorState} onChange={setEditorState} className="custom-editor" style={{ minHeight: "300px" }} />;
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='col-md-4'>
                                            <div class="card card-secondary margin-top-30">
                                                <div class="card-header">
                                                    <h3 class="card-title"> <b> {seller?.text?.create_service?.notes} </b></h3>
                                                </div>
                                                <div class="card-body">
                                                    <div class="single-dashboard-input">
                                                        <div class="single-info-input margin-top-30" >
                                                            <div class="list-group">
                                                                <a class="list-group-item list-group-item-action">
                                                                    <p class="mb-1">{seller?.text?.create_service?.note1Title}</p>
                                                                    <p style={{ fontSize: '11px' }}>{seller?.text?.create_service?.note1Text}</p>
                                                                </a>
                                                                <a class="list-group-item list-group-item-action">

                                                                    <p class="mb-1">{seller?.text?.create_service?.note2Title}</p>
                                                                    <p style={{ fontSize: '11px' }}>{seller?.text?.create_service?.note2Text}</p>

                                                                </a>
                                                                <a class="list-group-item list-group-item-action">

                                                                    <p class="mb-1">{seller?.text?.create_service?.note13Title}</p>
                                                                    <p style={{ fontSize: '11px' }}>{seller?.text?.create_service?.note3Text}</p>

                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
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
                                        <button type="button" class="btn btn-primary btn-lg btn-open-modal" data-bs-toggle="modal" data-bs-target="#modal-preview-service" onClick={() => { }}>
                                            Preview Service
                                        </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-primary btn-lg btn-open-modal" data-bs-toggle="modal" data-bs-target="#modal-fullscreen-xl" onClick={() => { }}>
                                            Preview Detail Page
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

                        <DetailPreview currentService={currentService} professional={seller} />
                        <PremiumServiceCardPreview data={currentService} setRatingId={() => { }} />
                    </>
                )
            }

            {
                type == 1 && (
                    <>
                        <div class="row">
                            <div class="col-lg-12 margin-top-10">
                                <section class="content" style={{ width: "100%", paddingTop: "30px" }}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            {basicServiceForm}
                                        </div>
                                        <div class="col-md-6">
                                            {aboutYou}
                                        </div>
                                    </div>
                                </section>
                            </div>
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
                                        <button type="button" class="btn btn-primary btn-lg btn-open-modal" data-bs-target="#modal-preview-service" data-bs-toggle="modal" onClick={() => { }}>
                                            Preview Service
                                        </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-primary btn-lg btn-open-modal" onClick={() => {
                                            if (validateData()) {
                                                if (latitude == "" || longitude == "") {
                                                    notifyError("Please Allow Location Permission")
                                                    return
                                                }
                                                register()
                                            }
                                        }}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <PremiumServiceCardPreview data={currentService} setRatingId={() => { }} />
                    </>
                )
            }

            {
                type == 0 && (
                    <>
                        <div class="row" >
                            <section class="content margin-top-10" style={{ width: "100%" }} >
                                <div class="row">
                                    <div class="col-md-12">
                                        {basicServiceForm}
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
                                                // notifySuccess(latitude+" "+longitude)
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
        </>
    )
}
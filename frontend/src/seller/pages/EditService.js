import { EditorState } from 'draft-js';

import { uploadImage } from '../api/uploadImage';
import { serviceRegister, update_services } from '../api';
import { SellerContext } from "../context/seller-context";
import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import "./service/editor.css"

import { RichTextEditor } from '@mantine/rte';
import { DetailPreview } from './service/DetailPreview';
import { PremiumServiceCardPreview } from './service/PremiumServiceCardPreview';
// import { categories } from '../../../utils/categories';
// import { subcategories } from '../../../utils/subcategories'
import { mainCategories } from '../../utils/maincategories'
import { BasicServiceCard } from './service/BasicServiceCardPreview';


import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { categories } from '../../utils/categories';
export const EditService = ({ editing = false }) => {
    const location = useLocation()

    let state = location.state ? location.state : ""

    let row = location.state ? location.state : ""
    let service = row.row
    let type = service.serviceType
    const { seller, updateCurrentSeller } = useContext(SellerContext);

    const navigate = useNavigate()

    if (!seller) {
        navigate('/seller')
    }

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);

    const [subcategories, setSubcategories] = useState([])

    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")


    const [title, setTitle] = useState(service?.title)
    const [overview, setOverview] = useState(service?.overview)
    const [category, setCategory] = useState(service?.category)
    const [subcategory, setSubcategory] = useState(service?.subcategory)
    const [price, setPrice] = useState(service?.price)
    const [bio, setBio] = useState(service?.bio)
    const [img, setImg] = useState(service?.img)
    const [city, setCity] = useState(service?.city)    
    const [specificLocation, setSpecificLocation] = useState(service?.specificLocation)    
    const [detail, setDetail] = useState(service.detail)
    const [specificAdress, setSpecificAdress] = useState(service?.specificAdress)
    const [deliveryDay, setDeliveryDay] = useState(service?.deliveryDay)
    const [professionalStatus, setProfessionalStatus] = useState(type)
    const [paymentType, setPaymentType] = useState(0)
    const [serviceRegistered, setServiceRegistered] = useState(false)
    const [imageUploadStarted, setImageUploadStarted] = useState(false)
    const [imageUploadEnded, setImageUploadEnded] = useState(false)

    const [latitude, setLatitued] = useState(service?.title)
    const [longitude, setLongitued] = useState(service?.title)

    const [incorrectImageTypeSelected, setIncorrectImageTypeSelected] = useState(false);

    let currentService = {}

    if (seller) {
        currentService = {
            title, overview, category, subcategory, price, paymentType, bio, city, specificAdress, deliveryDay,specificLocation, professionalStatus, img, detail,
            professionalFirstName: seller.firstName, professionalLastName: seller.lastName, professionalImage: seller.img, latitude, longitude, status: 2
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

        if(files.length == 0){
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
        // const detail = type == 2 ? editorState : ""
        const professionalId = seller._id
        const professionalFirstName = seller.firstName
        const professionalLastName = seller.lastName
        const professionalImage = seller.img
        const professionalPhoneNumber = seller.phoneNumber
        const serviceType = type

        console.log(detail)

        update_services({_id: service._id, title, price, overview, category, subcategory, bio, city, specificAdress, detail, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImage, professionalStatus, serviceType, professionalPhoneNumber, paymentType, latitude, longitude, specificLocation}, (res) => {
            if (res.success) {
                notifySuccess("Service Updated")
            } else {
                notifyError("Unable To Update Your Service")
                console.log(res)
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
                <h3 class="card-title"><b> Basic Info </b></h3>
            </div>
            <div class="card-body">
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> Service Title </b> </span>
                    </div>
                    <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} value={title}  />
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> Category </b> </span>
                    </div>
                    <select class="custom-select" onChange={(evnt) => {
                        setCategory(evnt.target.value)

                    }}  value={category}>
                        {
                            mainCategories.map((value, index) => (
                                <option value={value}>{value}</option>
                            ))
                        }
                    </select>
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> SubCategory </b> </span>
                    </div>
                    <select class="custom-select" onChange={(evnt) => { setSubcategory(evnt.target.value) }}  value={subcategory}>
                        {
                            subcategories.map((value, index) => (
                                <option value={value}>{value}</option>
                            ))
                        }
                    </select>
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> Price </b> </span>
                    </div>
                    <select class="custom-select" style={{ maxwidth: "60px" }} onChange={(evnt) => { setPaymentType(evnt.target.value) }}  value={paymentType}>
                        <option value={0} selected="">Fixed Price</option>
                        <option value={1} >Per Hour</option>
                        <option value={2} >Starting From</option>
                        <option value={3} >Please Call</option>
                    </select>
                    <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} value={price}/>
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Overivew: {letterCountOverview}/90</label>
                    <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="Add overview" maxlength="90"
                        onChange={(evnt) => {
                            setOverview(evnt.target.value)
                            setLetterCountOverview(evnt.target.value.length)
                        }}  value={overview}>
                    </textarea>
                </div>
                <div class="form-group">
                    <label for="title" class="info-title"> <b> Service Image </b>  </label>
                    <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "right" }} >
                        <label for="image" class="btn btn-secondary">Select Image</label>
                        <input type='file' id='image' style={{visibility:"hidden"}} accept="image/*" onChange={(evnt) => { onFileChange(evnt) }} label='Image' />
                        <p>{selectedImageName}</p>
                    </div>
                </div>
            </div>
        </div>
    )



    const aboutYou = (
        <div class="card card-secondary" style={{ height: '100%' }}>
            <div class="card-header">
                <h3 class="card-title"> <b> About You </b></h3>
            </div>
            <div class="card-body">
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> City </b> </span>
                    </div>
                    <input class="form-control" name="title" id="title" type="text" placeholder="Add city" onChange={(evnt) => { setCity(evnt.target.value) }}  value={city}/>
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> Specific Location </b> </span>
                    </div>
                    <select class="custom-select" style={{ maxwidth: "60px" }} onChange={(evnt) => { setSpecificLocation(evnt.target.value) }} value={specificLocation}>
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
                        <span class="input-group-text"> <b> Location </b> </span>
                    </div>
                    <input class="form-control" name="latitude" id="title" type="number" value={latitude} />
                    <input class="form-control" name="longitued" id="title" type="number" value={longitude} />
                </div>
                <div class="form-group">
                    <label for="title" class="info-title"> <b>Bio</b>  </label>
                    <textarea class="form-control" name="title" id="title" rows="6" type="text" placeholder="write your personal info that clients can see" onChange={(evnt) => { setBio(evnt.target.value) }}  value={bio}/>
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
                                                    <h3 class="card-title"> <b> Service Detail </b></h3>
                                                </div>
                                                <div class="card-body">
                                                    <div class="single-dashboard-input">
                                                        <div class="single-info-input margin-top-30" >
                                                            <RichTextEditor value={detail} onChange={setDetail} className="custom-editor" style={{ minHeight: "300px" }} />;
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='col-md-4'>
                                            <div class="card card-secondary margin-top-30">
                                                <div class="card-header">
                                                    <h3 class="card-title"> <b> Notes! </b></h3>
                                                </div>
                                                <div class="card-body">
                                                    <div class="single-dashboard-input">
                                                        <div class="single-info-input margin-top-30" >
                                                            <div class="list-group">
                                                                <a class="list-group-item list-group-item-action">
                                                                    <p class="mb-1">Add content:</p>
                                                                    <p style={{ fontSize: '11px' }}>To add content, simply click inside the editor and start typing. You can also paste text from another source, like a Word document or email.</p>
                                                                </a>
                                                                <a class="list-group-item list-group-item-action">

                                                                    <p class="mb-1">Formatting:</p>
                                                                    <p style={{ fontSize: '11px' }}>To format your text, use the toolbar at the top of the editor. You can change the font, size, and color of your text, as well as add bold, italic, and underline formatting. You can also create bulleted or numbered lists and align your text to the left, center, or right.</p>

                                                                </a>
                                                                <a class="list-group-item list-group-item-action">

                                                                    <p class="mb-1">Add links:</p>
                                                                    <p style={{ fontSize: '11px' }}>To add links to your content, select the text you want to link and click on the "Insert Link" button in the toolbar. You can link to another page on our website or to an external website.</p>

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
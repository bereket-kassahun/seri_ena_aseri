import { EditorState } from 'draft-js';

import { uploadImage } from '../../api/uploadImage';
import { serviceRegister } from '../../api/serviceRegister';
import { SellerContext } from "../../context/seller-context";
import { useContext, useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import "./editor.css"

import { RichTextEditor } from '@mantine/rte';
import { DetailPreview } from './DetailPreview';
import { PremiumServiceCardPreview } from './PremiumServiceCardPreview';
import { categories } from '../../../utils/category_list';
import { BasicServiceCard } from './BasicServiceCardPreview';


import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export const AddAndEditService = ({ editing = false }) => {
    const location = useLocation()

    let state = location.state ? location.state : ""
    let type = state.type

    const seller = useContext(SellerContext);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);


    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")


    const [title, setTitle] = useState("")
    const [overview, setOverview] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [bio, setBio] = useState("")
    const [img, setImg] = useState("")
    const [city, setCity] = useState("")
    const [specificAdress, setSpecificAdress] = useState("")
    const [deliveryDay, setDeliveryDay] = useState("")
    const [professionalStatus, setProfessionalStatus] = useState(type)
    const [paymentType, setPaymentType] = useState(0)
    const [serviceRegistered, setServiceRegistered] = useState(false)
    const [imageUploadStarted, setImageUploadStarted] = useState(false)
    const [imageUploadEnded, setImageUploadEnded] = useState(false)

    const [latitude, setLatitued] = useState("")
    const [longitude, setLongitued] = useState("")

    const currentService = {
        title, overview, category, price, bio, city, specificAdress, deliveryDay, professionalStatus, img, detail: editorState,
        professionalFirstName: seller.firstName, professionalLastName: seller.lastName, professionalImage: seller.img, latitude, longitude
    }



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
        setImageUploadStarted(true)
        setImageUploadEnded(false)
        let files = Array.from(evnt.target.files)

        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })

        uploadImage(formData, (res) => {
            res.forEach((data, i) => {
                setImg(data.secure_url)
                setImageUploadStarted(false)
                setImageUploadEnded(true)
            })
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
        if (serviceRegistered) {
            notifyError("The Service is Already Registered")
            return false
        }
        switch (type) {
            case 2:
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
                } else if (!checkLocationPermission()) {
                    return false
                }
                break;
            case 1:
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
                } else if (!checkLocationPermission()) {
                    return false
                }
                break;
            case 0:
                if (title == "" || overview == "" || category == "" || (price == "" && paymentType != 3)) {
                    notifyError("Please fill all fields")
                    return false
                }
                break;
            default:
                return false
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
        const professionalImage = seller.img
        const professionalPhoneNumber = seller.phoneNumber
        const serviceType = type

        console.log(typeof (detail), detail, editorState.isEmpty)
        serviceRegister({ title, price, overview, category, bio, city, specificAdress, detail, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImage, professionalStatus, serviceType, professionalPhoneNumber, paymentType, latitude, longitude }, (res) => {
            if (res.success) {
                notifySuccess("Service Registered")
                setServiceRegistered(true)
            } else {
                notifyError("Unable To Register Your Service")
            }
        })
    }



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
                                                <div class="card card-primary">
                                                    <div class="card-header">
                                                        <h3 class="card-title"><b> Basic Info </b></h3>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="form-group input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"> <b> Title </b> </span>
                                                            </div>
                                                            <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} />
                                                        </div>
                                                        <div class="form-group input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"> <b> Category </b> </span>
                                                            </div>
                                                            <input class="form-control" list="browsers" name="browser" placeholder="Add category" id="browser" onChange={(evnt) => { setCategory(evnt.target.value) }} />
                                                            <datalist id="browsers">
                                                                {
                                                                    categories.map((value, index) => (
                                                                        <option value={value.title} />
                                                                    ))
                                                                }
                                                            </datalist>
                                                        </div>
                                                        <div class="form-group input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"> <b> Delivery Days </b> </span>
                                                            </div>
                                                            <input class="form-control" name="deliveryDay" id="deliveryDay" type="number" placeholder="Delivery Days" onChange={(evnt) => { setDeliveryDay(evnt.target.value) }} />
                                                        </div>
                                                        <div class="form-group input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"> <b> Price </b> </span>
                                                            </div>
                                                            <select class="custom-select" style={{ maxwidth: "60px" }} onChange={(evnt) => { setPaymentType(evnt.target.value) }}>
                                                                <option value={0} selected="">Fixed Price</option>
                                                                <option value={1} >Per Hour</option>
                                                                <option value={2} >Starting From</option>
                                                                <option value={3} >Please Call</option>
                                                            </select>
                                                            <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="title" class="info-title"> <b>Overview</b> </label>
                                                            <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="Add overview" onChange={(evnt) => { setOverview(evnt.target.value) }} />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="title" class="info-title"> <b> Service Image </b>  </label>
                                                            <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "right" }} >
                                                                <input type='file' id='single' onChange={(evnt) => { onFileChange(evnt) }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card card-secondary" style={{ height: '100%' }}>
                                                    <div class="card-header">
                                                        <h3 class="card-title"> <b> About You </b></h3>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="form-group input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"> <b> City </b> </span>
                                                            </div>
                                                            <input class="form-control" name="title" id="title" type="text" placeholder="Add city" onChange={(evnt) => { setCity(evnt.target.value) }} />
                                                        </div>
                                                        <div class="form-group input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"> <b> Location </b> </span>
                                                            </div>
                                                            <input class="form-control" name="latitude" id="title" type="number" value={latitude} />
                                                            <input class="form-control" name="longitued" id="title" type="number" value={longitude} />
                                                        </div>
                                                        {/* <div class="form-group input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"> <b> Specific Address </b> </span>
                                                        </div>
                                                        <input class="form-control" name="title" id="title" type="text" placeholder="Add Specific Address" onChange={(evnt) => { setSpecificAdress(evnt.target.value) }} />
                                                    </div> */}
                                                        <div class="form-group">
                                                            <label for="title" class="info-title"> <b>Bio</b>  </label>
                                                            <textarea class="form-control" name="title" id="title" rows="6" type="text" placeholder="write your personal info that clients can see" onChange={(evnt) => { setBio(evnt.target.value) }} />
                                                        </div>
                                                    </div>
                                                </div>
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
                                                            <RichTextEditor value={editorState} onChange={setEditorState} className="custom-editor" style={{ minHeight: "300px" }} />;
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
                                                                    <p style={{fontSize: '11px'}}>To add content, simply click inside the editor and start typing. You can also paste text from another source, like a Word document or email.</p>
                                                                </a>
                                                                <a class="list-group-item list-group-item-action">
                                                                    
                                                                    <p class="mb-1">Formatting:</p>
                                                                    <p style={{fontSize: '11px'}}>To format your text, use the toolbar at the top of the editor. You can change the font, size, and color of your text, as well as add bold, italic, and underline formatting. You can also create bulleted or numbered lists and align your text to the left, center, or right.</p>

                                                                </a>
                                                                <a class="list-group-item list-group-item-action">
                                                                    
                                                                    <p class="mb-1">Add links:</p>
                                                                    <p style={{fontSize: '11px'}}>To add links to your content, select the text you want to link and click on the "Insert Link" button in the toolbar. You can link to another page on our website or to an external website.</p>

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
                        <PremiumServiceCardPreview data={currentService} />
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
                                            <div class="card card-primary">
                                                <div class="card-header">
                                                    <h3 class="card-title"><b> Basic Info </b></h3>
                                                </div>
                                                <div class="card-body">
                                                    <div class="form-group input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"> <b> Title </b> </span>
                                                        </div>
                                                        <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} />
                                                    </div>
                                                    <div class="form-group input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"> <b> Category </b> </span>
                                                        </div>
                                                        <input class="form-control" list="browsers" name="browser" placeholder="Add category" id="browser" onChange={(evnt) => { setCategory(evnt.target.value) }} />
                                                        <datalist id="browsers">
                                                            {
                                                                categories.map((value, index) => (
                                                                    <option value={value.title} />
                                                                ))
                                                            }
                                                        </datalist>
                                                    </div>
                                                    <div class="form-group input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"> <b> Delivery Days </b> </span>
                                                        </div>
                                                        <input class="form-control" name="deliveryDay" id="deliveryDay" type="number" placeholder="Delivery Days" onChange={(evnt) => { setDeliveryDay(evnt.target.value) }} />
                                                    </div>
                                                    <div class="form-group input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"> <b> Price </b> </span>
                                                        </div>
                                                        <select class="custom-select" style={{ maxwidth: "60px" }} onChange={(evnt) => { setPaymentType(evnt.target.value) }}>
                                                            <option value={0} selected="">Fixed Price</option>
                                                            <option value={1} >Per Hour</option>
                                                            <option value={2} >Starting From</option>
                                                            <option value={3} >Please Call</option>
                                                        </select>
                                                        <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="title" class="info-title"> <b>Overview</b> </label>
                                                        <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="Add overview" onChange={(evnt) => { setOverview(evnt.target.value) }} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="title" class="info-title"> <b> Service Image </b>  </label>
                                                        <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "right" }} >
                                                            <input type='file' id='single' onChange={(evnt) => { onFileChange(evnt) }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="card card-secondary">
                                                <div class="card-header">
                                                    <h3 class="card-title"> <b> About You </b></h3>
                                                </div>
                                                <div class="card-body">
                                                    <div class="form-group input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"> <b> City </b> </span>
                                                        </div>
                                                        <input class="form-control" name="title" id="title" type="text" placeholder="Add city" onChange={(evnt) => { setCity(evnt.target.value) }} />
                                                    </div>

                                                    <div class="form-group input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"> <b> Location </b> </span>
                                                        </div>
                                                        <input class="form-control" name="latitude" id="title" type="number" value={latitude} />
                                                        <input class="form-control" name="longitued" id="title" type="number" value={longitude} />
                                                    </div>
                                                    {/* <div class="form-group input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"> <b> Specific Address </b> </span>
                                                        </div>
                                                        <input class="form-control" name="title" id="title" type="text" placeholder="Add Specific Address" onChange={(evnt) => { setSpecificAdress(evnt.target.value) }} />
                                                    </div> */}
                                                    <div class="form-group">
                                                        <label for="title" class="info-title"> <b>Bio</b>  </label>
                                                        <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="write your personal info that clients can see" onChange={(evnt) => { setBio(evnt.target.value) }} />
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

                        <PremiumServiceCardPreview data={currentService} />
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
                                        <div class="card card-primary">
                                            <div class="card-header">
                                                <h3 class="card-title"><b> Basic Info </b></h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"> <b> Title </b> </span>
                                                    </div>
                                                    <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} />
                                                </div>
                                                <div class="form-group input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"> <b> Category </b> </span>
                                                    </div>
                                                    <input class="form-control" list="browsers" name="browser" placeholder="Add category" id="browser" onChange={(evnt) => { setCategory(evnt.target.value) }} />
                                                    <datalist id="browsers">
                                                        {
                                                            categories.map((value, index) => (
                                                                <option value={value.title} />
                                                            ))
                                                        }
                                                    </datalist>
                                                </div>
                                                <div class="form-group input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"> <b> Delivery Days </b> </span>
                                                    </div>
                                                    <input class="form-control" name="deliveryDay" id="deliveryDay" type="number" placeholder="Delivery Days" onChange={(evnt) => { setDeliveryDay(evnt.target.value) }} />
                                                </div>
                                                <div class="form-group input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"> <b> Price </b> </span>
                                                    </div>
                                                    <select class="custom-select" style={{ maxwidth: "60px" }} onChange={(evnt) => { setPaymentType(evnt.target.value) }}>
                                                        <option value={0} selected="">Fixed Price</option>
                                                        <option value={1} >Per Hour</option>
                                                        <option value={2} >Starting From</option>
                                                        <option value={3} >Please Call</option>
                                                    </select>
                                                    <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> <b>Overview</b> </label>
                                                    <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="Add overview" onChange={(evnt) => { setOverview(evnt.target.value) }} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> <b> Service Image </b>  </label>
                                                    <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "right" }} >
                                                        <input type='file' id='single' onChange={(evnt) => { onFileChange(evnt) }} />
                                                    </div>
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
                                                if (latitude == "" || longitude == "") {
                                                    notifyError("Please Allow Location Permission")
                                                    return
                                                }
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
import { EditorState } from 'draft-js';

import { uploadImage } from '../api/uploadImage';
import { serviceRegister } from '../api/serviceRegister';
import { SellerContext } from "../context/seller-context";
import { useContext, useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
// import "./editor.css"

// import { subcategories } from '../../utils/subcategories'
import { mainCategories } from '../../utils/maincategories'
import { RichTextEditor } from '@mantine/rte';
import { update_services } from '../api';

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { DetailPreview } from './service/DetailPreview';
import { PremiumServiceCardPreview } from './service/PremiumServiceCardPreview';
import { categories } from '../../utils/categories';
import { BasicServiceCard } from './service/BasicServiceCardPreview';
export const EditService = () => {

    const location = useLocation()

    let row = location.state ? location.state : ""
    let service = row.row
    const { seller, updateCurrentSeller } = useContext(SellerContext);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);

    const [subcategories, setSubcategories] = useState([])


    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")


    // const [img, setImg] = useState("") service.detail
    const [title, setTitle] = useState(service.title)
    const [overview, setOverview] = useState(service.overview)
    const [category, setCategory] = useState(service.category)
    const [price, setPrice] = useState(service.price)
    const [bio, setBio] = useState(service.bio)
    const [latitude, setLatitued] = useState(service.latitude)
    const [longitude, setLongitude] = useState(service.longitude)
    const [img, setImg] = useState(service.img)
    const [city, setCity] = useState(service.city)
    const [specificAdress, setSpecificAdress] = useState(service.specificAdress)
    const [deliveryDay, setDeliveryDay] = useState(service.deliveryDay)
    const [professionalStatus, setProfessionalStatus] = useState(2)
    const [detail, setDetail] = useState(service.detail)
    const [subcategory, setSubcategory] = useState(service.subcategory)
    const [paymentType, setPaymentType] = useState(service.paymentType)
    const [serviceRegistered, setServiceRegistered] = useState(false)
    const [imageUploadStarted, setImageUploadStarted] = useState(false)
    const [imageUploadEnded, setImageUploadEnded] = useState(false)



    useEffect(() => {
        console.log(service)
    }, [])

    let files = []
    const onFileChange = (evnt) => {
        files = Array.from(evnt.target.files)
    }

    const fileUpload = () => {

        if (files.length == 0) {
            register(img)
        } else {
            const formData = new FormData()

            files.forEach((file, i) => {
                formData.append(i, file)
            })


            uploadImage(formData, (res) => {
                res.forEach((data, i) => {
                    // setImg(data.secure_url)
                    register(data.secure_url)
                })
            })
        }

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
        // if (title == "" || overview == "" || category == "" || price == "" || city == "" || specificAdress == "" || editorState.isEmpty) {
        //     setErrorMsg("Please fill all fields!")
        //     setSuccessMsg("")
        //     return false
        // }
        if (seller == null || seller._id == null) {
            notifyError("Please Login first!")
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
        if (service.serviceType == 0) {
            update_services({ _id: service._id, title, price, overview, category, professionalPhoneNumber }, (data) => {
                console.log(data)
                notifySuccess("Service Updated!")
            })
        } else if (service.serviceType == 1) {
            update_services({ _id: service._id, title, price, overview, category, bio, city, specificAdress, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImage, professionalStatus, professionalPhoneNumber }, (data) => {
                console.log(data)
                notifySuccess("Service Updated!")
            })
        } else {

            update_services({ _id: service._id, title, price, overview, category, bio, city, specificAdress, detail, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImage, professionalStatus, professionalPhoneNumber }, (data) => {
                console.log(data)
                notifySuccess("Service Updated!")
            })
        }

    }


    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
        ]
    }


    const currentService = {
        title, overview, category, subcategory, price, bio, city, specificAdress, deliveryDay, professionalStatus, img, detail: editorState,
        professionalFirstName: seller.firstName, professionalLastName: seller.lastName, professionalImage: seller.img, latitude, longitude
    }


    const updateSubCategory = (currentCategory) => {
        categories.forEach(element => {
            if (element.category == currentCategory) {
                setSubcategories(element.subcategories)
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
                        <span class="input-group-text"> <b> Title </b> </span>
                    </div>
                    <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} value={title} />
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <b> Category </b> </span>
                    </div>
                    <select class="custom-select" onChange={(evnt) => { setCategory(evnt.target.value) }} value={category}>
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
                    <select class="custom-select" onChange={(evnt) => { setSubcategory(evnt.target.value) }} value={subcategory}>
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
                    <select class="custom-select" style={{ maxwidth: "60px" }} onChange={(evnt) => { setPaymentType(evnt.target.value) }} value={paymentType}>
                        <option value={0} selected="">Fixed Price</option>
                        <option value={1} >Per Hour</option>
                        <option value={2} >Starting From</option>
                        <option value={3} >Please Call</option>
                    </select>
                    <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} value={price} />
                </div>
                <div class="form-group">
                    <label for="title" class="info-title"> <b>Overview</b> </label>
                    <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="Add overview" onChange={(evnt) => { setOverview(evnt.target.value) }} value={overview} />
                </div>
                <div class="form-group">
                    <label for="title" class="info-title"> <b> Service Image </b>  </label>
                    <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "right" }} >
                        <input type='file' id='single' onChange={(evnt) => { onFileChange(evnt) }} />
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
                    <input class="form-control" name="title" id="title" type="text" placeholder="Add city" onChange={(evnt) => { setCity(evnt.target.value) }} value={city} />
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
                    <textarea class="form-control" name="title" id="title" rows="6" type="text" placeholder="write your personal info that clients can see" onChange={(evnt) => { setBio(evnt.target.value) }} value={bio} />
                </div>
            </div>
        </div>
    )

    return (
        <>
            {/* <div class="row">
                <div class="col-lg-12">
                    <div class="dashboard-settings margin-top-40">
                        <h2 class="dashboards-title"> Edit Service </h2>
                    </div>
                </div>
            </div> */}
            <ToastContainer />
            <div>
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
            </div>

            {
                service.serviceType == 2 && (
                    <>
                        <div class="row">
                            <div class="col-lg-12 margin-top-30">
                                <section class="content" style={{ width: "100%", paddingTop: "30px" }}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            {basicServiceForm}
                                        </div>
                                        <div class="col-md-6">
                                            {aboutYou}

                                            <div class="card card-secondary margin-top-30">
                                                <div class="card-header">
                                                    <h3 class="card-title">Service Detail</h3>
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
                service.serviceType == 1 && (
                    <>

                        <div class="row">
                            <div class="col-lg-12 margin-top-30">
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
                                        <button type="button" class="btn btn-primary btn-lg btn-open-modal" data-bs-toggle="modal" data-bs-target="#modal-preview-service" onClick={() => { }}>
                                            Preview Service
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PremiumServiceCardPreview data={currentService} setRatingId={() => { }} /></>

                )
            }

            {
                service.serviceType == 0 && (
                    <>
                        <div class="row" style={{ paddingTop: "30px" }}>
                            <section class="content margin-top-30" style={{ width: "100%" }} >
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
                                </div>
                            </div>
                        </div>

                        <BasicServiceCard data={currentService} />
                    </>


                )
            }




            <div class="single-dashboard-input" >
                <div class="single-info-input margin-top-30">
                    <div class="form-group ">
                        <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "right" }} >
                            <button type="button" class="btn btn-info " onClick={() => {
                                if (validateData()) {
                                    fileUpload()
                                }
                            }}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
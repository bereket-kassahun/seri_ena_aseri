import { EditorState } from 'draft-js';

import { uploadImage } from '../api/uploadImage';
import { serviceRegister } from '../api/serviceRegister';
import { SellerContext } from "../context/seller-context";
import { useContext, useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
// import "./editor.css"

import { RichTextEditor } from '@mantine/rte';
import { update_services } from '../api';
export const EditService = () => {

    const location = useLocation()

    let row = location.state ? location.state : ""
    let service = row.row
    const seller = useContext(SellerContext);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);




    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")


    // const [img, setImg] = useState("")
    const [title, setTitle] = useState(service.title)
    const [overview, setOverview] = useState(service.overview)
    const [category, setCategory] = useState(service.category)
    const [price, setPrice] = useState(service.price)
    const [bio, setBio] = useState(service.bio)
    const [img, setImg] = useState(service.img)
    const [city, setCity] = useState(service.city)
    const [specificAdress, setSpecificAdress] = useState(service.specificAdress)
    const [deliveryDay, setDeliveryDay] = useState(service.deliveryDay)
    const [professionalStatus, setProfessionalStatus] = useState(2)


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


    const validateData = () => {
        // if (title == "" || overview == "" || category == "" || price == "" || city == "" || specificAdress == "" || editorState.isEmpty) {
        //     setErrorMsg("Please fill all fields!")
        //     setSuccessMsg("")
        //     return false
        // }
        if (seller == null || seller._id == null) {
            setErrorMsg("Please Login first!")
            setSuccessMsg("")
            return false
        }
        setErrorMsg("")
        return true
    }

    const register = (img) => {

        const detail = editorState
        const professionalId = seller._id
        const professionalFirstName = seller.firstName
        const professionalLastName = seller.lastName
        const professionalImage = seller.img
        const professionalPhoneNumber = seller.phoneNumber
        if(service.serviceType == 0){
            update_services({ _id: service._id, title, price, overview, category, professionalPhoneNumber}, (data) => {
                console.log(data)
                setSuccessMsg("Service Updated!")
            })
        }else if(service.serviceType == 1){
            update_services({ _id: service._id, title, price, overview, category, bio, city, specificAdress, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImage, professionalStatus, professionalPhoneNumber }, (data) => {
                console.log(data)
                setSuccessMsg("Service Updated!")
            })
        }else{
    
            update_services({ _id: service._id, title, price, overview, category, bio, city, specificAdress, detail, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImage, professionalStatus, professionalPhoneNumber }, (data) => {
                console.log(data)
                setSuccessMsg("Service Updated!")
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

    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="dashboard-settings margin-top-40">
                        <h2 class="dashboards-title"> Edit Service </h2>
                    </div>
                </div>
            </div>

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
                    <div class="row">
                        <div class="col-lg-12 margin-top-30">
                            <section class="content" style={{ width: "100%", paddingTop: "30px" }}>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card card-primary">
                                            <div class="card-header">
                                                <h3 class="card-title">Basic Info</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Title* </label>
                                                    <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} value={title} />

                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Category* </label>
                                                    <input class="form-control" list="browsers" name="browser" placeholder="Add category" id="browser" onChange={(evnt) => { setCategory(evnt.target.value) }} value={category} />
                                                    <datalist id="browsers">
                                                        <option value="Plumbing" />
                                                        <option value="Cleaning " />
                                                        <option value="Electronics Installations and Repairs" />
                                                        <option value="TV Dish Installation and Repair" />
                                                        <option value="Painting" />
                                                        <option value="Disinfection" />
                                                        <option value="Laundry" />
                                                        <option value="Hairdresser" />
                                                        <option value="Gardening" />
                                                        <option value="Tutoring" />
                                                        <option value="Accounting" />
                                                        <option value="Web Development" />
                                                        <option value="App Development" />
                                                        <option value="Graphics Designer" />
                                                        <option value="IT support technician" />
                                                        <option value="Veterinary nurse" />
                                                        <option value="Mechanic" />
                                                        <option value="Nurse" />
                                                    </datalist>
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Delivery Days* </label>
                                                    <input class="form-control" name="title" id="title" type="number" placeholder="Add overview" onChange={(evnt) => { setDeliveryDay(evnt.target.value) }} value={deliveryDay} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Price* </label>
                                                    <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} value={price} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Overview* </label>
                                                    <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="Add overview" onChange={(evnt) => { setOverview(evnt.target.value) }} value={overview} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Service Image* </label>
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
                                                <h3 class="card-title">About You</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> City* </label>
                                                    <input class="form-control" name="title" id="title" type="text" placeholder="Add city" onChange={(evnt) => { setCity(evnt.target.value) }} value={overview} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Specific Address* </label>
                                                    <input class="form-control" name="title" id="title" type="text" placeholder="Add Specific Address" onChange={(evnt) => { setSpecificAdress(evnt.target.value) }} value={overview} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Bio </label>
                                                    <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="write your personal info that clients can see" onChange={(evnt) => { setBio(evnt.target.value) }} value={overview} />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card card-secondary margin-top-30">
                                            <div class="card-header">
                                                <h3 class="card-title">Service Detail</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="single-dashboard-input">
                                                    <div class="single-info-input margin-top-30" >
                                                        <RichTextEditor value={editorState} onChange={setEditorState} className="custom-editor" style={{ minHeight: "300px" }} placeholder={service.detail} />;
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )
            }

            {
                service.serviceType == 1 && (
                    <div class="row">
                        <div class="col-lg-12 margin-top-30">
                            <section class="content" style={{ width: "100%", paddingTop: "30px" }}>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card card-primary">
                                            <div class="card-header">
                                                <h3 class="card-title">Basic Info</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Title* </label>
                                                    <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} value={title} />

                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Category* </label>
                                                    <input class="form-control" list="browsers" name="browser" placeholder="Add category" id="browser" onChange={(evnt) => { setCategory(evnt.target.value) }} value={category} />
                                                    <datalist id="browsers">
                                                        <option value="Plumbing" />
                                                        <option value="Cleaning " />
                                                        <option value="Electronics Installations and Repairs" />
                                                        <option value="TV Dish Installation and Repair" />
                                                        <option value="Painting" />
                                                        <option value="Disinfection" />
                                                        <option value="Laundry" />
                                                        <option value="Hairdresser" />
                                                        <option value="Gardening" />
                                                        <option value="Tutoring" />
                                                        <option value="Accounting" />
                                                        <option value="Web Development" />
                                                        <option value="App Development" />
                                                        <option value="Graphics Designer" />
                                                        <option value="IT support technician" />
                                                        <option value="Veterinary nurse" />
                                                        <option value="Mechanic" />
                                                        <option value="Nurse" />
                                                    </datalist>
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Delivery Days* </label>
                                                    <input class="form-control" name="title" id="title" type="number" placeholder="Add overview" onChange={(evnt) => { setDeliveryDay(evnt.target.value) }} value={category} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Price* </label>
                                                    <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} value={price} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Overview* </label>
                                                    <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="Add overview" onChange={(evnt) => { setOverview(evnt.target.value) }} value={overview} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Service Image* </label>
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
                                                <h3 class="card-title">About You</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> City* </label>
                                                    <input class="form-control" name="title" id="title" type="text" placeholder="Add city" onChange={(evnt) => { setCity(evnt.target.value) }} value={city} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Specific Address* </label>
                                                    <input class="form-control" name="title" id="title" type="text" placeholder="Add Specific Address" onChange={(evnt) => { setSpecificAdress(evnt.target.value) }} value={specificAdress} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="title" class="info-title"> Bio </label>
                                                    <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="write your personal info that clients can see" onChange={(evnt) => { setBio(evnt.target.value) }} value={bio} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )
            }

            {
                service.serviceType == 0 && (
                    <div class="row" style={{ paddingTop: "30px" }}>
                        <section class="content margin-top-30" style={{ width: "100%" }} >
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
                                                <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} value={title} />

                                            </div>
                                            <div class="form-group">
                                                <label for="inputDescription">Overview*</label>
                                                <textarea id="inputDescription" class="form-control" rows="4" maxLength="50" placeholder="Add overview" onChange={(evnt) => { setOverview(evnt.target.value) }} value={overview}></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="title" class="info-title"> Category* </label>
                                                <input class="form-control" list="browsers" name="browser" placeholder="Add category" id="browser" onChange={(evnt) => { setCategory(evnt.target.value) }} value={category} />
                                                <datalist id="browsers">
                                                    <option value="Plumbing" />
                                                    <option value="Cleaning " />
                                                    <option value="Electronics Installations and Repairs" />
                                                    <option value="TV Dish Installation and Repair" />
                                                    <option value="Painting" />
                                                    <option value="Disinfection" />
                                                    <option value="Laundry" />
                                                    <option value="Hairdresser" />
                                                    <option value="Gardening" />
                                                    <option value="Tutoring" />
                                                    <option value="Accounting" />
                                                    <option value="Web Development" />
                                                    <option value="App Development" />
                                                    <option value="Graphics Designer" />
                                                    <option value="IT support technician" />
                                                    <option value="Veterinary nurse" />
                                                    <option value="Mechanic" />
                                                    <option value="Nurse" />
                                                </datalist>
                                            </div>
                                            <div class="form-group">
                                                <label for="title" class="info-title"> Price* </label>
                                                <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} value={price} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
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
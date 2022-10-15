
import { uploadImage } from '../../api/uploadImage';
import { serviceRegister } from '../../api/serviceRegister';
import { SellerContext } from "../../context/seller-context";
import { useContext, useState } from "react"
import "./editor.css"
import { PremiumServiceCardPreview } from './PremiumServiceCardPreview';
import { categories } from '../../../utils/category_list';
export const MediumService = () => {

    const seller = useContext(SellerContext);

    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")


    // const [img, setImg] = useState("")
    const [title, setTitle] = useState("")
    const [overview, setOverview] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [bio, setBio] = useState("")
    const [img, setImg] = useState("")
    const [city, setCity] = useState("")
    const [specificAdress, setSpecificAdress] = useState("")
    const [deliveryDay, setDeliveryDay] = useState("")
    const [professionalStatus, setProfessionalStatus] = useState(1)



    const currentService = {
        title, overview, category, price, bio, city, specificAdress, deliveryDay, professionalStatus, img,
        professionalFirstName: seller.firstName, professionalLastName: seller.lastName,
        professionalImage: seller.img
    }


    // let files = []
    const onFileChange = (evnt) => {
        let files = Array.from(evnt.target.files)

        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })

        uploadImage(formData, (res) => {
            res.forEach((data, i) => {
                // setImg(data.secure_url)
                setImg(data.secure_url)
                // register(data.secure_url)
            })
        })
    }

    const fileUpload = () => {
        register(img)
    }


    const validateData = () => {
        if (title == "" || overview == "" || category == "" || price == "" || city == "" || specificAdress == "") {
            setErrorMsg("Please fill all fields!")
            setSuccessMsg("")
            return false
        }
        if (img == "") {
            setErrorMsg("Please pick an image!")
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
        const serviceType = 1

        serviceRegister({ title, price, overview, category, bio, city, specificAdress, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImage, professionalStatus, serviceType, professionalPhoneNumber }, (data) => {
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
                        <h2 class="dashboards-title"> Medium Service </h2>
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
            <div class="row">
                <div class="col-lg-12 margin-top-10">
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
                                            <input class="form-control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} />

                                        </div>
                                        <div class="form-group">
                                            <label for="title" class="info-title"> Category* </label>
                                            <input class="form-control" list="browsers" name="browser" placeholder="Add category" id="browser" onChange={(evnt) => { setCategory(evnt.target.value) }} />
                                            <datalist id="browsers">
                                                {
                                                    categories.map((value, index) => (
                                                        <option value={value.title}/>
                                                    ))
                                                }
                                            </datalist>
                                        </div>
                                        <div class="form-group">
                                            <label for="title" class="info-title"> Delivery Days* </label>
                                            <input class="form-control" name="title" id="title" type="number" placeholder="Add Delivery Days" onChange={(evnt) => { setDeliveryDay(evnt.target.value) }} />
                                        </div>
                                        <div class="form-group">
                                            <label for="title" class="info-title"> Price* </label>
                                            <input class="form-control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} />
                                        </div>
                                        <div class="form-group">
                                            <label for="title" class="info-title"> Overview* </label>
                                            <textarea class="form-control" name="title" id="title" rows="3" type="text" placeholder="Add overview" onChange={(evnt) => { setOverview(evnt.target.value) }} />
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
                                            <input class="form-control" name="title" id="title" type="text" placeholder="Add city" onChange={(evnt) => { setCity(evnt.target.value) }} />
                                        </div>
                                        <div class="form-group">
                                            <label for="title" class="info-title"> Specific Address* </label>
                                            <input class="form-control" name="title" id="title" type="text" placeholder="Add Specific Address" onChange={(evnt) => { setSpecificAdress(evnt.target.value) }} />
                                        </div>
                                        <div class="form-group">
                                            <label for="title" class="info-title"> Bio </label>
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
                            <button type="button" class="btn btn-primary btn-lg btn-open-modal" data-bs-target="#modal-preview-service" data-bs-toggle="modal" onClick={() => {
                                // if (validateData()) {
                                //     fileUpload()
                                // }
                            }}>
                                Preview Service
                            </button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary btn-lg btn-open-modal" onClick={() => {
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

            <PremiumServiceCardPreview data={currentService} />


        </>
    )
}
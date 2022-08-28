import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import ReactQuill from "react-quill"
// import 'react-quill/dist/quill.snow.css'

import { uploadImage } from '../../api/uploadImage';
import { serviceRegister } from '../../api/serviceRegister';
import { SellerContext } from "../../context/seller-context";
import { useContext, useState } from "react"
import "./editor.css"

import { RichTextEditor } from '@mantine/rte';
export const AddService = () => {

    const seller = useContext(SellerContext);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);



    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")


    // const [img, setImg] = useState("")
    const [title, setTitle] = useState("")
    const [overview, setOverview] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [bio, setBio] = useState("")
    const [city, setCity] = useState("")
    const [specificAdress, setSpecificAdress] = useState("")
    const [deliveryDay, setDeliveryDay] = useState("")


    const [imgUploadStarted, setImageUploadStarted] = useState(false)
    const [imgUploadEnded, setImageUploadEnded] = useState(false)

    let files = []
    const onFileChange = (evnt) => {
        files = Array.from(evnt.target.files)
    }

    const fileUpload = () => {
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


    const validateData = () => {
        if (title == "" || overview == "" || category == "" || price == "" || city == "" || specificAdress == "" || editorState.isEmpty) {
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
        const detail = editorState
        const professionalId = seller._id
        const professionalFirstName = seller.firstName
        const professionalLastName = seller.lastName
        const professionalImg = '/'

        serviceRegister({ title, price, overview, category, bio, city, specificAdress, detail, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImg }, (data) => {
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

    // const formats = [
    //     'header',
    //     'bold', 'italic', 'underline', 'strike', 'blockquote',
    //     'list', 'bullet', 'indent',
    //     'link', 'image'
    // ]
    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="dashboard-settings margin-top-40">
                        <h2 class="dashboards-title"> Add Service </h2>
                    </div>
                </div>
            </div>

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
                <div class="col-lg-12 margin-top-30">
                    <div class="single-settings">

                        <div class="social-login-wrapper">
                            <div class="bar-wrap">
                                <span class="bar"></span>
                                <p class="or" style={{ whiteSpace: "nowrap" }}>Basic Info</p>
                                <span class="bar"></span>
                            </div>

                            <div class="single-dashboard-input">
                                <div class="single-info-input margin-top-30">
                                    <label for="title" class="info-title"> Title* </label>
                                    <input class="form--control" name="title" id="title" type="text" placeholder="Add title" onChange={(evnt) => { setTitle(evnt.target.value) }} />
                                </div>


                                <div class="single-info-input margin-top-30">
                                    <label for="title" class="info-title"> Category* </label>
                                    {/* <input class="form--control" name="title" id="title" type="text" placeholder="Add category" onChange={(evnt) => { setCategory(evnt.target.value) }} /> */}
                                    <input class="form-control" list="browsers" name="browser" placeholder="Add category" id="browser"  onChange={(evnt) => { setCategory(evnt.target.value) }}/>
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
                            </div>

                            <div class="single-dashboard-input">
                                <div class="single-info-input margin-top-30">
                                    <label for="title" class="info-title"> Delivery Days* </label>
                                    <input class="form--control" name="title" id="title" type="number" placeholder="Add overview" onChange={(evnt) => { setDeliveryDay(evnt.target.value) }} />
                                </div>

                                <div class="single-info-input margin-top-30">
                                    <label for="title" class="info-title"> Price* </label>
                                    <input class="form--control" name="title" id="title" type="number" placeholder="Add price" onChange={(evnt) => { setPrice(evnt.target.value) }} />
                                </div>
                            </div>
                            <div class="single-dashboard-input">
                                <div class="single-info-input margin-top-30">
                                    <label for="title" class="info-title"> Overview* </label>
                                    <textarea class="form--control" name="title" id="title" rows="3" type="text" placeholder="Add overview" onChange={(evnt) => { setOverview(evnt.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <div class="social-login-wrapper">
                            <div class="bar-wrap">
                                <span class="bar"></span>
                                <p class="or" style={{ whiteSpace: "nowrap" }}>About You</p>
                                <span class="bar"></span>
                            </div>

                            <div class="single-dashboard-input">
                                <div class="single-info-input margin-top-30">
                                    <label for="title" class="info-title"> City* </label>
                                    <input class="form--control" name="title" id="title" type="text" placeholder="Add city" onChange={(evnt) => { setCity(evnt.target.value) }} />
                                </div>
                                <div class="single-info-input margin-top-30">
                                    <label for="title" class="info-title"> Specific Address* </label>
                                    <input class="form--control" name="title" id="title" type="text" placeholder="Add Specific Address" onChange={(evnt) => { setSpecificAdress(evnt.target.value) }} />
                                </div>
                            </div>
                            <div class="single-dashboard-input">
                                <div class="single-info-input margin-top-30">
                                    <label for="title" class="info-title"> Bio </label>
                                    <textarea class="form--control" name="title" id="title" rows="3" type="text" placeholder="write your personal info that clients can see" onChange={(evnt) => { setBio(evnt.target.value) }} />
                                </div>
                            </div>
                        </div>

                        <div class="social-login-wrapper">
                            <div class="bar-wrap">
                                <span class="bar"></span>
                                <p class="or" style={{ whiteSpace: "nowrap" }}>Service Detail* </p>
                                <span class="bar"></span>
                            </div>

                            <div class="single-dashboard-input">
                                <div class="single-info-input margin-top-30" >
                                    <RichTextEditor value={editorState} onChange={setEditorState} className="custom-editor" style={{ minHeight: "300px" }} />;
                                    {/* <ReactQuill
                                        theme="snow"
                                        modules={modules}
                                        // formats={formats}
                                        value={editorState}
                                        onChange={setEditorState}
                                        style={{ height: "300px", paddingTop: "20px" }}
                                        className="custom-editor"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div class="single-dashboard-input">
                <textarea
                    disabled
                    value={editorState}
                />
            </div> */}

            <div class="single-dashboard-input" style={{ marginTop: "30px" }}>
                <div class="single-info-input margin-top-30">
                    <div class="form-group ">
                        <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "left" }} >
                            <input type='file' id='single' onChange={(evnt) => { onFileChange(evnt) }} />
                        </div>
                    </div>
                </div>
            </div>

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

            {/* <div style={{ height: "300px" }} placeholder="please work">
                <Editor editorState={editorState} onChange={setEditorState} />
            </div> */}


        </>
    )
}
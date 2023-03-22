import { useState } from "react"
import { notify } from "../../utils/notify"
import { ToastContainer } from "react-toastify";
import networkCall from "../../utils/networkCall";

export const RegisterProfessional = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [professionalType, setProfessionalType] = useState(0)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const validate = () => {
        if (firstName == '' || lastName == '' || phoneNumber == '' || email == '' || professionalType == '' || password == '') {
            notify('ERROR', 'Please Fill All Fields')
            return false
        }
        if (password != confirmPassword) {
            notify('ERROR', 'Password and Confirmation password do not match')
            return false
        }
        if (!email.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            notify('ERROR', 'Invalid Email!')
            return false
        }
        notify('SUCCESS', 'Started Professional registration')
        return true
    }


    const register = () => {
        networkCall({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            paymentType: professionalType,
        }, (data) => {
            if (data.success) {
                notify('SUCCESS', 'You have successfully register a professional!')
            } else {
                notify('ERROR', 'ERROR: ' + (data.message ? data.message : 'Unable to register a professional!'))
            }
        }, 'POST','admin/register_professional')
    }

    return (
        <>
            <div class=" card mb-4" >
                <div class="card-header">Please Fillout The Form Below</div>
                <div class="card-body">
                    <form>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Frist Name</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Frist Name"
                                    onChange={(evnt) => { setFirstName(evnt.target.value) }} />
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last Name</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Last Name"
                                    onChange={(evnt) => { setLastName(evnt.target.value) }} />
                            </div>
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Password</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Password"
                                    onChange={(evnt) => { setPassword(evnt.target.value) }} />
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Confirm Password!</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Confirm Password!"
                                    onChange={(evnt) => { setConfirmPassword(evnt.target.value) }} />
                            </div>
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Phone Number</label>
                                <input class="form-control" id="inputFirstName" type="tel" placeholder="phone number"
                                    onChange={(evnt) => { setPhoneNumber(evnt.target.value) }} />
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Email</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="email"
                                    onChange={(evnt) => { setEmail(evnt.target.value) }} />
                            </div>
                        </div>

                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Professional Type</label>
                                <select class="form-select" aria-label="Default select example"
                                    onChange={(evnt) => { setProfessionalType(evnt.target.value) }}>
                                    <option selected>Not Paid</option>
                                    <option value="1">Basic Professional</option>
                                    <option value="2">Standard Professional</option>
                                    <option value="3">Premium Professional</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="inputOrgName"></label>
                            <button type="button" class="btn btn-success" style={{ float: 'right' }}
                                onClick={(evnt) => {
                                    if (validate()) {
                                        register()
                                    }
                                }} >Create User</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
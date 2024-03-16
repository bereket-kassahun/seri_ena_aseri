
import { ToastContainer } from 'react-toastify';
import '../../style/create-sub-admin.css'
import { notify } from '../../utils/notify';
import { register } from '../api';
export const CreateSubAdmin = () => {
    return (
        <>
            <form id="sub-admin-form" className='sub-admin' onSubmit={(evnt) => {
                evnt.preventDefault();
                let formData = new FormData(evnt.target);
                const data = [...formData.entries()];
                const formatedData = {};
                data.map(val => {
                    if (Array.isArray(val) && val?.length > 0) {
                        formatedData[val[0]] = val[1];
                    }
                })
                console.log(formatedData);
                formatedData.isSubAdmin = true;
                register(formatedData, (res) => {
                    console.log(res);
                    if (res.success) {
                        notify('SUCCESS', 'Sub admin Regstered');

                    }
                })
            }}>
                <div class="container">
                    <h1>Register SubAdmin</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" id="psw" required />

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="verifyPassword" id="psw-repeat" required />
                    <hr />
                    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}

                    <button type="submit" class="registerbtn" >Register</button>
                </div>

                {/* <div class="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div> */}
            </form>
            <ToastContainer />
        </>
    )
}
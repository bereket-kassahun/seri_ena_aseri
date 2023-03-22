
import { Rating } from './Rating'
import './style.css'
export const Chat = ({ data }) => {
    return (
        <>
            <div class="main">
                <div class="px-2 scroll">
                    <p> Recent Reviews </p>
                    {
                        data != null && 
                        data.map((value, index) => {
                            return (
                                <div class="d-flex align-items-center">
                                    <div class="text-left pr-1"><i class="bi bi-person" style={{fontSize: '2em'}}></i></div>
                                    <div class="pr-2 pl-1">
                                        <span class="name">{value.clientEmail}</span>
                                        <span class="name" style={{ marginLeft: '5px' }}><Rating value={value.value} /></span>
                                        <p class="msg">{value.review}</p>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}


// <div class="d-flex align-items-center text-right justify-content-end ">
//                         <div class="pr-2"> <span class="name">Dr. Hendrikson</span>
//                             <p class="msg">Let's jump on a video call</p>
//                         </div>
//                         <div><img src="https://i.imgur.com/HpF4BFG.jpg" width="30" class="img1" /></div>
//                     </div>
//                     <div class="text-center"><span class="between">Call started at 10:47am</span></div>
//                     <div class="text-center"><span class="between">Call ended at 11:03am</span></div>
//                     <div class="d-flex align-items-center">
//                         <div class="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" class="img1" /></div>
//                         <div class="pr-2 pl-1"> <span class="name">Sarah Anderson</span>
//                             <p class="msg">How often should i take this?</p>
//                         </div>
//                     </div>
//                     <div class="d-flex align-items-center text-right justify-content-end ">
//                         <div class="pr-2"> <span class="name">Dr. Hendrikson</span>
//                             <p class="msg">Twice a day, at breakfast and before bed</p>
//                         </div>
//                         <div><img src="https://i.imgur.com/HpF4BFG.jpg" width="30" class="img1" /></div>
//                     </div>
//                     <div class="d-flex align-items-center">
//                         <div class="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" class="img1" /></div>
//                         <div class="pr-2 pl-1"> <span class="name">Sarah Anderson</span>
//                             <p class="msg">How often should i take this?</p>
//                         </div>
//                     </div>
//                 </div>
//                 <nav class="navbar bg-white navbar-expand-sm d-flex justify-content-between"> <input type="text number" name="text" class="form-control" placeholder="Type a message..." />
//                     <div class="icondiv d-flex justify-content-end align-content-center text-center ml-2"> <i class="fa fa-paperclip icon1"></i> <i class="fa fa-arrow-circle-right icon2"></i> </div>
//                 </nav>

import '../style/rating.css'

const EntrySellerCard = () => {
    return (
        <>
            <div class="col-xl-4 col-lg-6 col-sm-12 col-12 " style={{ padding: "3px" }}>
                <div class="card">
                    <div class="card-body" style={{ padding: "10px" }}>
                        <div class="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px", }}
                                class="rounded-circle"
                            />
                            <div class="" style={{ flexGrow: "4", paddingLeft: "10px" }}>
                                <p class="font-weight-bold" style={{ color: "black" }}>Kate Hunington</p>
                                <p class="font-weight-normal" style={{ color: "black" }}>This is normal text that... </p>
                            </div>
                            <div class="" style={{ flexGrow: "1" }}>
                                <div class="rating" style={{ display: "inline" }}>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>

                                </div>
                            </div>
                            <div class="btn-wrapper" style={{ flexGrow: "1" }}>
                                <a class="cmn-btn btn-bg-3" style={{ background: ``, padding: "5px 10px 5px 10px" }}>
                                    Call <i class="fas fa-phone ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
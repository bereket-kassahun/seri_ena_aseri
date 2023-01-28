
import { SellerContext } from "../../context/seller-context";
import { useContext } from "react"
import { Link } from 'react-router-dom'
import "./editor.css"
import "../../../style/payment-card.css"

export const AddService = () => {

    const seller = useContext(SellerContext);

    return (
        <>
            {/* <div class="row">
                <div class="col-lg-12">
                    <div class="dashboard-settings margin-top-40">
                        <h2 class="dashboards-title">Add Services </h2>
                    </div>
                </div>
            </div> */}
            <div class="row" style={{ paddingTop: "30px" }}>
                <div class="col-md mb-3 mb-md-0 col-xl-4 col-lg-4 col-sm-6">
                    <div class="card h-100 zi-1">
                        <div class="card-header text-center">
                            <div class="mb-2">
                                <span class="fs-5 align-top text-dark fw-semi-bold">Birr</span>
                                <span id="pricingCount1" class="fs-1 text-dark fw-semi-bold" data-hs-toggle-switch-item-options="{
                             &quot;min&quot;: 29,
                             &quot;max&quot;: 19
                           }">39</span>
                                {/* <span>/mo</span> */}
                            </div>

                            <h3 class="card-title">Basic Service</h3>
                            <div _ngcontent-serverapp-c81="" class="small mb-2">
                                For services that take minimal space when displayed to clients
                            </div>
                        </div>

                        <div class="card-body d-flex justify-content-center py-0">
                            <ul class="list-checked list-checked-soft-bg-primary">
                                <li class="list-checked-item">Title</li>
                                <li class="list-checked-item">Full Name</li>
                                <li class="list-checked-item">rating</li>
                                <li class="list-checked-item">Shown in List Format</li>
                            </ul>
                        </div>

                        <div class="card-footer text-center" style={{ borderTop: "none" }}>
                            <div class="d-grid mb-2">
                                <Link to="add_edit_service" state={{type: 0}} style={{ margin: "auto" }}>
                                    <button type="button" class="btn btn-ghost-primary">Create Service</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md mb-3 mb-md-0 col-xl-4 col-lg-4 col-sm-6">
                    <div class="card h-100 zi-1 bg-primary text-white">
                        <div class="card-header text-center">
                            <div class="mb-2">
                                <span class="fs-5 align-top  fw-semi-bold ">Birr</span>
                                <span id="pricingCount1" class="fs-1  fw-semi-bold " data-hs-toggle-switch-item-options="{
                             &quot;min&quot;: 29,
                             &quot;max&quot;: 19
                           }" >59</span>
                                {/* <span>/mo</span> */}
                            </div>

                            <h3 class="card-title text-white">Standard Service</h3>
                            <div _ngcontent-serverapp-c81="" class="small mb-2 text-white">
                                For services that will be displayed in a card format to clients
                            </div>
                        </div>

                        <div class="card-body d-flex justify-content-center py-0">
                            <ul class="list-checked list-checked-soft-bg-primary text-white">

                                <li class="list-checked-item-white text-white">Title</li>
                                <li class="list-checked-item-white text-white">Full Name</li>
                                <li class="list-checked-item-white text-white">Header Image</li>
                                <li class="list-checked-item-white text-white">Overview</li>
                                <li class="list-checked-item-white text-white">Shown in a card format</li>
                                <li class="list-checked-item-white text-white">Shown at top</li>
                            </ul>
                        </div>

                        <div class="card-footer text-center" style={{ borderTop: "none" }}>
                            <div class="d-grid mb-2">
                                <Link to="add_edit_service" state={{type: 1}} style={{ margin: "auto" }}>
                                    <button type="button" class="btn btn-ghost-primary text-white">Create Service</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md mb-3 mb-md-0 col-xl-4 col-lg-4 col-sm-6">
                    <div class="card h-100 zi-1">
                        <div class="card-header text-center">
                            <div class="mb-2">
                                <span class="fs-5 align-top text-dark fw-semi-bold">Birr</span>
                                <span id="pricingCount1" class="fs-1 text-dark fw-semi-bold" data-hs-toggle-switch-item-options="{
                             &quot;min&quot;: 29,
                             &quot;max&quot;: 19
                           }">79</span>
                                {/* <span>/mo</span> */}
                            </div>

                            <h3 class="card-title">Premium Service</h3>
                            <div _ngcontent-serverapp-c81="" class="small mb-2">
                                For services that  will be displayed in a card form and have detail pages
                            </div>
                        </div>

                        <div class="card-body d-flex justify-content-center py-0">
                            <ul class="list-checked list-checked-soft-bg-primary">

                                <li class="list-checked-item">Title</li>
                                <li class="list-checked-item">Full Name</li>
                                <li class="list-checked-item">Header Image</li>
                                <li class="list-checked-item">Overview</li>
                                <li class="list-checked-item">Shown in a card format</li>
                                <li class="list-checked-item">Shown at top</li>
                                <li class="list-checked-item">Contains a detail page</li>
                            </ul>
                        </div>

                        <div class="card-footer text-center" style={{ borderTop: "none" }}>
                            <div class="d-grid mb-2">
                                <Link to="add_edit_service" state={{type: 2}} style={{ margin: "auto" }}>
                                    <button type="button" class="btn btn-ghost-primary">Create Service</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div _ngcontent-serverapp-c81="" class="mb-4 col-xl-4 col-lg-4 col-sm-6 mb-xl-0">
                    <div _ngcontent-serverapp-c81="" class="card text-center h-100">
                        <div _ngcontent-serverapp-c81="" class="card-body">
                            <h4 _ngcontent-serverapp-c81="" class="mb-2">Basic Service</h4>
                            <div _ngcontent-serverapp-c81="" class="small mb-2">
                                For services that take minimal space when displayed to clients</div>
                            <span _ngcontent-serverapp-c81="" data-cy="freelancerLicenseSalePrice">
                                <div _ngcontent-serverapp-c81="" class="badge bg-success-soft text-success mb-2">
                                    34% off!
                                </div>
                                <div _ngcontent-serverapp-c81="" class="d-flex align-items-center justify-content-center">
                                    <del _ngcontent-serverapp-c81="" class="h3 mb-0 text-gray-400 me-2">59 Birr</del>
                                    <div _ngcontent-serverapp-c81="" class="h1 mb-0 text-green">39 Birr</div>
                                </div>
                            </span>
                            <div _ngcontent-serverapp-c81="" class="d-grid">
                                <Link to="entry_service" style={{ margin: "auto" }}>
                                    <button _ngcontent-serverapp-c81="" data-cy="buyNowFreelancer" class="btn btn-primary my-3 fw-500">
                                        <span _ngcontent-serverapp-c81="">Create Service</span>
                                    </button>
                                </Link>
                            </div>
                            <ul _ngcontent-serverapp-c81="" class="list-group list-group-flush small">
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Title</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Full Name</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">rating</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Shown in List Format</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                {/* <div _ngcontent-serverapp-c81="" class="mb-4 col-xl-4 col-lg-4 col-sm-6 mb-xl-0">
                    <div _ngcontent-serverapp-c81="" class="card text-center h-100">
                        <div _ngcontent-serverapp-c81="" class="card-body">
                            <h4 _ngcontent-serverapp-c81="" class="mb-2">Standard Service</h4>
                            <div _ngcontent-serverapp-c81="" class="small mb-2">
                                For services that will be displayed in a card format to clients</div>
                            <span _ngcontent-serverapp-c81="" data-cy="freelancerLicenseSalePrice">
                                <div _ngcontent-serverapp-c81="" class="badge bg-success-soft text-success mb-2">
                                    34% off!
                                </div>
                                <div _ngcontent-serverapp-c81="" class="d-flex align-items-center justify-content-center">
                                    <del _ngcontent-serverapp-c81="" class="h3 mb-0 text-gray-400 me-2">79 Birr</del>
                                    <div _ngcontent-serverapp-c81="" class="h1 mb-0 text-green">59 Birr</div>
                                </div>
                            </span>
                            <div _ngcontent-serverapp-c81="" class="d-grid">
                                <Link to="medium_service" style={{ margin: "auto" }}>
                                    <button _ngcontent-serverapp-c81="" data-cy="buyNowFreelancer" class="btn btn-primary my-3 fw-500">
                                        <span _ngcontent-serverapp-c81="">Create Service</span>
                                    </button>
                                </Link>
                            </div>
                            <ul _ngcontent-serverapp-c81="" class="list-group list-group-flush small">
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Title</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Full Name</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Header Image</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Overview</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Shown in a card format</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Shown at top</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                {/* <div _ngcontent-serverapp-c81="" class="mb-4 col-xl-4 col-lg-4 col-sm-6 mb-xl-0">
                    <div _ngcontent-serverapp-c81="" class="card text-center h-100">
                        <div _ngcontent-serverapp-c81="" class="card-body">
                            <h4 _ngcontent-serverapp-c81="" class="mb-2">Premium Service</h4>
                            <div _ngcontent-serverapp-c81="" class="small mb-2">
                                For services that  will be displayed in a card form and have detail pages</div>
                            <span _ngcontent-serverapp-c81="" data-cy="freelancerLicenseSalePrice">
                                <div _ngcontent-serverapp-c81="" class="badge bg-success-soft text-success mb-2">
                                    34% off!
                                </div>
                                <div _ngcontent-serverapp-c81="" class="d-flex align-items-center justify-content-center">
                                    <del _ngcontent-serverapp-c81="" class="h3 mb-0 text-gray-400 me-2">99 Birr</del>
                                    <div _ngcontent-serverapp-c81="" class="h1 mb-0 text-green">79 Birr</div>
                                </div>
                            </span>
                            <div _ngcontent-serverapp-c81="" class="d-grid">
                                <Link to="premium_service" style={{ margin: "auto" }}>
                                    <button _ngcontent-serverapp-c81="" data-cy="buyNowFreelancer" class="btn btn-primary my-3 fw-500">
                                        <span _ngcontent-serverapp-c81="">Create Service</span>
                                    </button>
                                </Link>
                            </div>
                            <ul _ngcontent-serverapp-c81="" class="list-group list-group-flush small">
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Title</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Full Name</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Header Image</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Overview</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Shown in a card format</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Shown at top</li>
                                <li _ngcontent-serverapp-c81="" class="list-group-item">Contains a detail page</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
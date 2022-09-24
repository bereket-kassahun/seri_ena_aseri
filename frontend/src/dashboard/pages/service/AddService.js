
import { SellerContext } from "../../context/seller-context";
import { useContext } from "react"
import { Link } from 'react-router-dom'
import "./editor.css"

export const AddService = () => {

    const seller = useContext(SellerContext);

    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="dashboard-settings margin-top-40">
                        <h2 class="dashboards-title">Add Services </h2>
                    </div>
                </div>
            </div>
            <div class="row" style={{ paddingTop: "30px" }}>
                <div _ngcontent-serverapp-c81="" class="mb-4 col-xl-4 col-lg-4 col-sm-6 mb-xl-0">
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
                </div>
                <div _ngcontent-serverapp-c81="" class="mb-4 col-xl-4 col-lg-4 col-sm-6 mb-xl-0">
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
                </div>
                <div _ngcontent-serverapp-c81="" class="mb-4 col-xl-4 col-lg-4 col-sm-6 mb-xl-0">
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
                </div>
            </div>
        </>
    )
}
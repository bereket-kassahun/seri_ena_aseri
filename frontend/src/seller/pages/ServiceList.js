
import { useContext, useEffect, useState } from "react"
import { SellerContext } from "../context/seller-context";

import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { Link } from "react-router-dom";
import { check_publishing_ability, professional_services, update_avialability } from '../api'


import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export const ServiceList = () => {

    const navigate = useNavigate()

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


    const seller = useContext(SellerContext);
    const columns = [
        {
            name: "Title",
            selector: "title",
            sortable: true
        },
        {
            name: "Category",
            selector: "category",
            sortable: true
        },
        // {
        //     name: "Overview",
        //     selector: "overview",
        //     sortable: true,
        //     cell: data => <span>{data.overview.length < 20 ? data.overview : data.overview.substring(0, 19)+"..."}</span>
        // },
        {
            name: "Price",
            selector: "price",
            sortable: true
        },
        {
            name: "Status",
            selector: "status",
            sortable: true,
            cell: row => {
                if (row.status == "0") {
                    return <span class="badge bg-danger">not published</span>
                }
                if (row.status == "1") {
                    return <span class="badge bg-secondary">disabled</span>
                }
                if (row.status == "2") {
                    return <span class="badge bg-success">published</span>
                }
            }

        },
        {
            name: "Availability",
            selector: "available",
            sortable: true,
            cell: row => {
                return (
                    <div class="form-check form-switch">
                        {
                            row.available ? (
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked onClick={(evnt) => {
                                    update_avialability({ available: evnt.target.checked, _id: row._id }, (res) => {
                                        if (res.success) {
                                            notifySuccess("updated sucessfully")
                                        } else {
                                            notifyError("Unable to update!")
                                        }
                                    })
                                }} />
                            ) : (
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={(evnt) => {
                                    update_avialability({ available: evnt.target.checked, _id: row._id }, (res) => {
                                        if (res.success) {
                                            notifySuccess("updated sucessfully")
                                        } else {
                                            notifyError("Unable to update!" + row._id)
                                        }
                                    })
                                }} />
                            )
                        }

                    </div>
                )
            }
        },
        {
            name: "",
            selector: "buttons",
            button: true,
            cell: row =>
                true ? (
                    <>
                        <div _ngcontent-serverapp-c81="" class="d-grid">
                            <Link to="edit_service" state={{ row }} >
                                <button _ngcontent-serverapp-c81="" data-cy="buyNowFreelancer" class="btn btn-primary my-3 fw-500">
                                    <span _ngcontent-serverapp-c81="">Edit</span>
                                </button>
                            </Link>
                        </div>
                    </>
                ) : null
        },
        {
            name: "",
            selector: "publish",
            button: true,
            cell: row =>
                true ? (
                    <>
                        <div _ngcontent-serverapp-c81="" class="d-grid">

                            {
                                row.status == 0 ? (
                                    <button _ngcontent-serverapp-c81="" data-cy="buyNowFreelancer" class="btn btn-primary my-3 fw-500"
                                        onClick={(evnt) => {
                                            check_publishing_ability({ serviceId: row._id, serviceType: row.serviceType, professionalId: row.professionalId }, (res) => {
                                                if (res.success) {
                                                    notifySuccess("Published  Selected Service")
                                                } else {
                                                    navigate("/seller/payment", { state: row })
                                                }
                                            })
                                        }}>
                                        <span _ngcontent-serverapp-c81="">Publish</span>
                                    </button>
                                ) : (
                                    <button _ngcontent-serverapp-c81="" data-cy="buyNowFreelancer" class="btn btn-primary my-3 fw-500" disabled>
                                        <span _ngcontent-serverapp-c81="">Publish</span>
                                    </button>
                                )
                            }

                        </div>
                    </>
                ) : null
        }
    ];

    const [serviceList, setServiceList] = useState([])
    const [tableData, setTableData] = useState({ columns, serviceList })

    const [loading, setLoading] = useState(true);




    useEffect(() => {
        professional_services({ id: seller._id, page: 1, limit: 10 }, (ret) => {
            if (ret.data.service_data) {
                let tmp = ret.data.service_data
                setServiceList(tmp)
                setTableData({ columns, data: tmp })
                setLoading(false);
            }
        })
    }, [])







    return (
        <>
            <ToastContainer />
            <div class="row margin-top-30">
                <div class="content-wrapper" style={{ minHeight: "16px", width: "100%", paddingTop: "30px" }}>
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            columns={columns}
                            data={serviceList}
                            noHeader
                            defaultSortField="_id"
                            defaultSortAsc={false}
                            progressPending={loading}
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
                </div>
            </div>
        </>
    )
}
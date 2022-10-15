
import { useContext, useEffect, useState } from "react"

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { Link } from "react-router-dom";
import { approve_service, get_pending_services} from '../api'

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


export const ServiceApproval = () => {


    const columns = [
        {
            name: "Title",
            selector: "title",
            sortable: true
        },
        {
            name: "Seller",
            selector: "category",
            sortable: true,
            cell: data => <span>{data.professionalFirstName} {data.professionalLastName}</span>
        },
        {
            name: "Overview",
            selector: "overview",
            sortable: true,
            cell: data => <span>{data.overview.length < 20 ? data.overview : data.overview.substring(0, 19) + "..."}</span>
        },
        {
            name: "Price",
            selector: "price",
            sortable: true
        },
        {
            name: "",
            selector: "publish",
            button: true,
            cell: row =>
                true ? (
                    <>
                        {
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={(evnt) => {
                                setClickedService(row)
                            }}>Approve</button>
                        }
                    </>
                ) : null
        }
    ];

    const [serviceList, setServiceList] = useState([])
    const [tableData, setTableData] = useState({ columns, serviceList })

    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [clickedService, setClickedService] = useState({})



    const notifySuccess = () =>
        toast.success("The service is Approved Succesfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    const handlePageChange = page => {
        setLoading(true)
        get_pending_services({ page: page, limit: perPage }, (data) => {
            if (data.docs) {
                let tmp = data.docs
                setServiceList(data.docs)
                setTableData({ columns, data: tmp })
                setTotalRows(data.data.total);
                setLoading(false);
            }
        })
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        get_pending_services({ page: page, limit: newPerPage }, (data) => {
            if (data.docs ) {
                let tmp = data.docs
                setServiceList(data.docs)
                setTableData({ columns, data: tmp })
                setPerPage(newPerPage);
                setLoading(false);
            }
        })
    };


    const approveService = (id) => {
        approve_service({ id: id }, (data) => {
            if (data.success) {
                notifySuccess()
            } else {
                alert("shit")
            }
        })
    }
    useEffect(() => {
        get_pending_services({ page: 1, limit: 10 }, (data) => {
            if (data.docs) {
                let tmp = data.docs
                setServiceList(data.docs)
                setTableData({ columns, data: tmp })
                setTotalRows(data.data.total);
                setLoading(false);
            }
        })
    }, [])





    return (
        <>
            {/* <div class="row">
                <div class="col-lg-12">
                    <div class="dashboard-settings margin-top-40">
                        <h2 class="dashboards-title">Pending Services</h2>
                    </div>
                </div>
            </div> */}
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
                            paginationServer
                            paginationTotalRows={totalRows}
                            onChangeRowsPerPage={handlePerRowsChange}
                            onChangePage={handlePageChange}
                            highlightOnHover
                        />
                    </DataTableExtensions>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel2">Confirmation</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you Sure you want to approve this service?
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-dismiss="modal" onClick={(evnt) => {
                                if(clickedService._id){
                                    approveService(clickedService._id)
                                }
                            }}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
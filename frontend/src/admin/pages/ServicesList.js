
import { useContext, useEffect, useState } from "react"

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { get_services, toggle_status } from '../api'
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


export const ServicesList = () => {


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
                if (row.status == "1") {
                    return <span class="badge bg-secondary">Disabled</span>
                } else {
                    return <span class="badge bg-success">Enabled</span>
                }
            }
        },
        {
            name: "Setting",
            selector: "available",
            sortable: true,
            cell: row => {
                return (

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-cog"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalToggle2" className={"dropdown-item " + (row.status != 1 ? 'disabled' : '')} style={{ cursor: "pointer" }} onClick={(evnt) => { setDisable(false); setCurrentId(row._id) }}>Enable</a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalToggle2" className={"dropdown-item " + (row.status == 1 ? 'disabled' : '')} style={{ cursor: "pointer" }} onClick={(evnt) => { setDisable(true); setCurrentId(row._id) }}>Disable</a></li>
                        </ul>
                    </div>
                )
            }
        },
    ];

    const [serviceList, setServiceList] = useState([])
    const [tableData, setTableData] = useState({ columns, serviceList })

    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(10);

    const [disable, setDisable] = useState(false)
    const [currentId, setCurrentId] = useState()


    const notifySuccess = () =>
        toast.success("The service is Enabled Succesfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    const notifyError = () =>
        toast.error("Unable to Disabled The Service ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });


    const call_get_services = (page, limit) => {
        get_services({ page: page, limit: limit }, (data) => {
            if (data.docs) {
                let tmp = data.docs
                setServiceList(data.docs)
                setTableData({ columns, data: tmp })
                setTotalRows(data.total);
                setPerPage(limit)
                setCurrentPage(page)
                setLoading(false);
            }
        })
    }
    const handlePageChange = page => {
        setLoading(true)
        call_get_services(page, perPage)
    };


    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);
        call_get_services(page, newPerPage)
    };


    useEffect(() => {
        call_get_services(1, 10);
    }, [])


    const make_toggle_status = (value) => {
        toggle_status({ status: value ? 1 : 2, _id: currentId }, (res) => {
            if (res.success) {
                notifySuccess()
                call_get_services(currentPage, perPage)
            } else {
                notifyError()
            }
        })
    }

    return (
        <>
            {
                (
                    <div class="row margin-top-30">
                        <div class="content-wrapper" style={{ minHeight: "16px", width: "100%", paddingTop: "30px" }}>
                            <DataTableExtensions {...tableData}
                                export={false}
                                print={false}
                            >
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
                )
            }

            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel2">Confirmation</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you Sure you want to {disable ? "Disable" : "Enable"} this service?
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-dismiss="modal" onClick={(evnt) => {
                                make_toggle_status(disable, currentId)
                            }}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
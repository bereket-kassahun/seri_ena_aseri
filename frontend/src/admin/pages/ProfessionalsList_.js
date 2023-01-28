
import { useContext, useEffect, useState } from "react"

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { Link } from "react-router-dom";
import { approve_service, get_pending_services, get_professionals} from '../api'

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


export const ProfessionalsList = () => {


    const columns = [
        {
            name: "First Name",
            selector: "firstName",
            sortable: true
        },
        {
            name: "Last Name",
            selector: "lastName",
            sortable: true,
            
        },
        {
            name: "Number of Calls",
            selector: "numOfCalls",
            sortable: true,
        },
        {
            name: "email",
            selector: "email",
            sortable: true
        },
    ];

    const [professionalList, setProfessionalList] = useState([])
    const [tableData, setTableData] = useState({ columns, professionalList })

  
    useEffect(() => {
        get_professionals({page: 1, limit: 20}, (res) => {
            console.log(res.docs)
            setProfessionalList(res.docs)
            setTableData({ columns, data: res.docs })
        })
    }, [])



    return (
        <>
            <div class="row margin-top-30">
                <div class="content-wrapper" style={{ minHeight: "16px", width: "100%", paddingTop: "30px" }}>
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            columns={columns}
                            data={professionalList}
                        />
                    </DataTableExtensions>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
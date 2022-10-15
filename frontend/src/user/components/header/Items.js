import { Link } from "react-router-dom"
import '../../../style/header-item.css'
import { useState } from "react";
import { Item } from "./Item";
export const Items = ({ items }) => {


    return (
        // <div className="collapse navbar-collapse" id="bizcoxx_main_menu" >
            <>
                {
                    items.map((item, index) => (

                        <Link to={item.href}>
                            <li key={index} class="nav-item">
                                <Item name={item.name}></Item>
                            </li>
                        </Link>
                        // item.subitems.length > 0 ?
                        //     (
                        //         <li className=" menu-item-has-children " key={index}>
                        //             <a href={item.href} key={index} style={{ color: "white" }}>{item.name}</a>
                        //             <ul className="sub-menu">
                        //                 {
                        //                     item.subitems.map((subitem, index) => (
                        //                         <Link to={subitem.href}>
                        //                             <li key={index}>
                        //                                 <a key={index} style={{ color: "white" }}>{subitem.name}</a>
                        //                             </li>
                        //                         </Link>
                        //                     ))
                        //                 }
                        //             </ul>
                        //         </li>
                        //     )
                        //     :

                    ))
                }
            </>
        // </div>
    )
}
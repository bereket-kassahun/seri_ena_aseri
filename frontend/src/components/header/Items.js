import { Link } from "react-router-dom"


export const Items = ({ items }) => {
    return (
        <div className="collapse navbar-collapse" id="bizcoxx_main_menu">
            <ul className="navbar-nav">
                {
                    items.map((item, index) => (
                        item.subitems.length > 0 ?
                            (
                                <li className=" menu-item-has-children " key={index}>
                                    <a href={item.href} key={index}>{item.name}</a>
                                    <ul className="sub-menu">
                                        {
                                            item.subitems.map((subitem, index) => (
                                                <Link to={subitem.href}>
                                                    <li key={index}>
                                                        <a key={index}>{subitem.name}</a>
                                                    </li>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                </li>
                            )
                            :
                            (
                                <li key={index}>
                                    <a href={item.href} key={index}>{item.name}</a>
                                </li>
                            )

                    ))
                }
            </ul>
        </div>
    )
}
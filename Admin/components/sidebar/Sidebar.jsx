
import { Link } from 'next/link'

import { useRouter } from "next/router";
import './sidebar.module.css'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

function SidebarItem(props){

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

export default function Sidebar(props){
    const router = useRouter()
    const activeItem = sidebar_items.findIndex(item => item.route === router.pathname)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />RISK RADAR
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link href={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

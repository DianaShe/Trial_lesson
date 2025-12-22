import { NavLink } from "react-router";
import {chapters} from '../data'

const Navigation = ({setOpen}) => {
    
    return (
        <ul className="text-gray-600 text-lg flex flex-col gap-3 items-start pt-14 md:pl-6 list-disc">
            {chapters.map((item )=> <NavLink onClick={() => setOpen(false)} to={item.path} key={item.id} className="hover:text-emerald-800 hover:font-medium">{item.title}</NavLink>)}
            </ul>
    )
}

export default Navigation;
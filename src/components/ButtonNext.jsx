import { useNavigate } from "react-router";

const ButtonNext = ({path, title}) => {
    let navigate = useNavigate();
    return (
        <button className="mt-20 ml-auto mr-auto rounded-lg border border-transparent px-7 py-2 font-medium bg-emerald-600 cursor-pointer text-white hover:bg-emerald-800"
        onClick={() => navigate(path)}>{title}</button>
    )
}

export default ButtonNext;
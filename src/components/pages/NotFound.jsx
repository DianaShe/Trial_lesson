import ButtonNext from "../ButtonNext"

const NotFound = () => {
    return (
        <>
        <p className="text-6xl font-medium text-gray-500 mt-40">Page is not found</p>
        <ButtonNext path='/' title='Go back' />
        </>
        
    )
}

export default NotFound;
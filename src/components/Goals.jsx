
const Goals = ({goals}) => {
    return (
        <>
        <p className='text-3xl text-start my-6 text-gray-800'>In this lesson we will:</p>
        <ul className='text-start text-gray-800 list-inside list-image-[url(./assets/checkmark.png)]'>
            {goals.map((goal, i) => <li className='mb-1' id={i}>{goal}</li>)}
        </ul>
        </>
        

    )
}

export default Goals;
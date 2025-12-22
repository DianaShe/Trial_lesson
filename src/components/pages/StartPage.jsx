import Banner from "../Banner";
import board from '../../assets/board.jpg'
import Goals from "../Goals";
import ButtonNext from "../ButtonNext";

import {chapters} from '../../data'

const StartPage = () => {
    
    const goals =
        ["learn new words and talk about challenges", "find out what level of English you have", "set goals for your future studying"]

    return (
        <>
        <Banner img={board} />
        <Goals goals={goals}/>
        <ButtonNext path={chapters[1].path} title={chapters[1].title}/>
        </>
    )
}

export default StartPage;
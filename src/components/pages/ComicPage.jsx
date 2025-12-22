import img1 from '../../assets/1_.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import { chapters } from '../../data'
import ButtonNext from '../ButtonNext'
import Task from '../Task'

const ComicPage = () => {
    return (
        <>
        <Task task='Read the comic strip and complete the sentences below' />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <ul className='text-start list-disc list-inside mt-6'>
            <li>This comic strip is about…</li>
            <li>The word “challenge” means…</li>
            <li>The most difficult challenge here is…</li>
        </ul>
        <ButtonNext path={chapters[2].path} title={chapters[2].title}/>
        </>
    )
}

export default ComicPage;
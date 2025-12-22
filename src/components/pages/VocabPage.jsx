import checklist from '../../assets/checklist.jpg'
import Banner from '../Banner';
import ButtonNext from '../ButtonNext';
import FillGaps from '../FillGaps';
import Task from '../Task';
import { chapters, phrases } from '../../data';

const VocabPage = () => {

//     const correctPhrases = [
//     "keep doing something",
//     "break a habit",
//     "do my best",
//     "reach a goal",
//     "make a positive change",
//     "stay focused",
//   ];

  const shuffled = [...phrases]
    .map(p => p.phrase)
    .sort(() => Math.random() - 0.5);

  console.log(shuffled);
  

    return (
        <>
        <Banner img={checklist}/>
        <Task task='Fill in the gaps using the correct words from the list'/>
        <ul className="flex flex-wrap my-6">
            {shuffled.map(item => <li className="after:ml-1 not-last:after:content-['/']">{item}</li>)}
        </ul>
        <ol className='list-decimal list-inside text-start'>
            <FillGaps phrases={phrases} />
        </ol>
        <ButtonNext path={chapters[3].path} title={chapters[3].title}/>
        </>
    )
}

export default VocabPage;
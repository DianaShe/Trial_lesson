import Banner from "../Banner";
import Form from "../Form"
import Task from "../Task"
import survey from '../../assets/survey.jpg'

const FormPage = () => {
    return (
        <>
        <Banner img={survey} />
        <Task task='Please, fill in the form so that we can make the study course that fits your needs.' />
        <Form />
        </>
    )
}

export default FormPage;

import './App.css'
import VideoPage from './components/pages/VideoPage';
import FormPage from './components/pages/FormPage';
import { Routes, Route } from "react-router";
import StartPage from './components/pages/StartPage'
import SharedLayout from './components/pages/SharedLayout'
import ComicPage from './components/pages/ComicPage'
import VocabPage from './components/pages/VocabPage'
import PracticePage from './components/pages/PracticePage'
import NotFound from './components/pages/NotFound';

function App() {
  

  return (
    
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<StartPage/>}/>
        <Route path='goals' element={<StartPage/>}/>
        <Route path='warm-up' element={<ComicPage/>}/>
        <Route path='vocabulary' element={<VocabPage/>}/>
        <Route path='practice' element={<PracticePage/>}/>
        <Route path='comprehension' element={<VideoPage/>}/>
        <Route path='form' element={<FormPage/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

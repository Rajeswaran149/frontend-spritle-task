import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import MasterLogin from '../src/Pages/MasterLogin'
import StudentLogin from '../src/Pages/StudentLogin'
import MasterRegister from './Pages/MasterRegister'
import StudentRegister from './Pages/StudentRegister'
import Homepage from './Pages/Homepage'
import Nav from './components/Nav'
import Activity from './Pages/Activity'
import NavMaster from './components/NavMast'
import HomeMaster from './Pages/HomeMaster'
import InitialPage from './Pages/InitialPage'
import QuestionPage from './Pages/QuestionPage'
import Quote from './Pages/Quote'
import './App.css'
import MasterActivity from './Pages/MasterActivity'

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/MasterLogin" />
          <Route path="/"  element={<InitialPage />}/>
          <Route path="/MasterRegister" element={<MasterRegister/>}/>
          <Route path="/MasterHome" element={<NavMaster/>}/>
          <Route path="/StudentHomepage" element={<Nav/>}/>
          <Route path='/Activity' element={<Nav />} />
          <Route path='/MasterActivity' element={<NavMaster/>}/>
          <Route path='/Question' element={<NavMaster/>}/>
        </Routes>

        <Routes >
          <Route path="/MasterLogin" element={<MasterLogin/>}/>
          <Route path="/StudentLogin" element={<StudentLogin/>}/>
          
          <Route path="/StudentRegister" element={<StudentRegister/>}/>
          <Route path="/StudentHomepage" element={<Homepage/>}/>
          <Route path='/Activity' element={<Activity />}/>
          <Route path='/MasterHome' element={<HomeMaster/>}/>
          <Route path='/MasterActivity' element={<MasterActivity/>}/>
          <Route path='/Question' element={<QuestionPage/>}/>
        </Routes>

        <Routes>
        <Route path="/StudentHomepage" element={<Quote/>}/>
        <Route path='/MasterHome' element={<Quote/>}/>
        <Route path='/Activity' element={<Quote />}/>
        <Route path='/MasterActivity' element={<Quote/>}/>
        <Route path='/Question' element={<Quote/>}/>
        </Routes>

        
      </Router>
    </div>
 )     
}

export default App;


import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import DoctorsHome from './Components/DoctorsHome';
import DoctorsProfile from './Components/DoctorsProfile';
import AddModal from './Components/AddModal';
import EditProfielModal from './Components/EditProfielModal';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Form/>}></Route>
     <Route path='/Profile' element={<DoctorsProfile/>}></Route>
     <Route path='/Home' element={<DoctorsHome/>}></Route>
     <Route path='/Modal' element={<AddModal/>}></Route>
     <Route path='/ProfielEditModal' element={<EditProfielModal/>}></Route>

    </Routes>
    </BrowserRouter>
   </div>
  );
}
export default App;


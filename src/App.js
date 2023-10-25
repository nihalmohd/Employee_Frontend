
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import Employeelist from './Components/Employeelist';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Form/>}></Route>
     <Route path='/emplist' element={<Employeelist/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}
export default App;


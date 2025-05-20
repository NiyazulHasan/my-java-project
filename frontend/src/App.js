import EmployeeListComponent from "./components/EmployeeListComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App()
{
  return (
      <div className="bg-color">
          <HeaderComponent/>

          <BrowserRouter>
             <div className="container mt-5">
              <Routes>
                  <Route exact path="/" element={<EmployeeListComponent/>}></Route>
                  <Route path="/employees" element={<EmployeeListComponent/>}></Route>
                  <Route path="/add-emp" element={<CreateEmployeeComponent/>}></Route>
                  <Route path="/update-emp/:id" element={<UpdateEmployeeComponent/>}></Route>
              </Routes>
              </div> 
          </BrowserRouter>
          
          <FooterComponent/>
      </div>
  )
}
export default App;
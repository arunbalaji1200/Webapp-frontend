import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import ViewUsersComponent from './Components/ViewUsersComponent';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';
import RequestForm from './Components/RequestForm';
import Newlaptop from './Components/Newlaptop';
import Repairlaptop from './Components/RepairLaptop';
import Viewform from './Components/viewform';
import Viewnewlaptop from './Components/viewnewlaptop';
import Viewrepairlaptop from './Components/Viewrepairlap';
import Updatestatus from './Components/Updatestatus';
import Index from './Components/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/home" element={<HomeComponent/>} /> 
          <Route exact path="/view/:id" element={<ViewUsersComponent/>} /> 
          <Route exact path="/add/:id" element={<AddUser/>} /> 
          <Route exact path="/update/:id" element={<UpdateUser/>} /> 
          <Route exact path="/form" element={<RequestForm/>} />
          <Route exact path="/newlap" element={<Newlaptop/>} />
          <Route exact path="/repairlap" element={<Repairlaptop/>} />
          <Route exact path="/viewform" element={<Viewform/>} />
          <Route exact path="/viewnewlap/:id" element={<Viewnewlaptop/>} />
          <Route exact path="/viewrepairlap/:id" element={<Viewrepairlaptop/>} />
          <Route exact path="/updatestatus/:id" element={<Updatestatus/>} />
          <Route exact path="/index" element={<Index/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

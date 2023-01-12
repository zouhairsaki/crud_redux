import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserList from "./Pages/UserList"; 
import {Provider} from "react-redux";
import store from "./config/store"
import UpdateUser from "./Pages/UpdateUser";
import AjouterUser from "./Pages/AjouterUser";

function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path ="/" element={<UserList/> }/>
            <Route path ="/add_user" element={<AjouterUser/> }/>
            <Route path ="/update_user/:id" element={<UpdateUser/> }/>
          </Routes>
        
        </div>
      </BrowserRouter>
    </Provider >
  );
}

export default App;

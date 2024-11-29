import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import UserList from './components/pages/UserList';
import UserView from './components/pages/UserView';
import UserEdit from './components/pages/UserEdit';



function App() {
  return (
   <BrowserRouter>
 <Routes>
 <Route path="/" element={<Main />}>
 <Route index element={<UserList/>}/>
 <Route path="user-view/:id" element={<UserView/>}/>
 <Route path="user-edit/:id" element={<UserEdit/>}/>
 </Route>
 </Routes>
   </BrowserRouter>
  );
}

export default App;

import './App.css';
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home';
import Header from './components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUser from './pages/AddUser';
import Edit from './pages/Edit';
import Profile from './pages/Profile';

function App() {
  return (
    <>
        <div>
        <Toaster
         position="top-center"
         reverseOrder={true}
        />
     </div>
     <Header/>
     <BrowserRouter>
       <Routes>
            <Route index={true} path='/' element={<Home/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/profile/:id' element={<Profile/>}/>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;

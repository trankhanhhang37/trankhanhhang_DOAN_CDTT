import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LayoutUI from './layouts/LayoutUI';
// import LayoutAdmin from './layouts/LayoutAdmin';
import RouterSite from './router';
import './assets/sass/app.scss';
import LayoutAdmin from './layouts/LayoutAdmin';


function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<LayoutUI/>}>
        {RouterSite.RouterPublic.map(function(route,index){
          const Page = route.component;
          return <Route key ={index} path={route.path} element={<Page/>}/>
        })}          

        </Route>

        <Route path='/admin' element={<LayoutAdmin/>}>
        {RouterSite.RouterPrivate.map(function(route,index){
          const Page = route.component;
          return <Route key ={index} path={route.path} element={<Page/>}/>
        })}          

        </Route>

       </Routes>

    </BrowserRouter>
  );
} 


export default App;

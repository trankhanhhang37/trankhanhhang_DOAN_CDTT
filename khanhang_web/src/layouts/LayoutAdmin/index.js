// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './Footer';
import BackendHeader from './Header';
import LayoutSide from './LayoutSide';
import './styles.css';

function LayoutAdmin() {
    return (
        <>

                <BackendHeader/>
                <LayoutSide/>
                <Footer/>

        </>
     );
}

export default LayoutAdmin;
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";
import Thank from "./components/Thank";

// import Footer from "./components/Footer"
    const excludedRoutes = ['/thank'];

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>

                    <Route path='/' element={<Explore/>}/>
                    <Route exact path='/thank' element={<Thank/>}/>

                </Routes>
                {/* eslint-disable-next-line no-restricted-globals */}
                <Footer/>
            </Router>
            <ToastContainer/>
            {/* eslint-disable-next-line no-restricted-globals */}
            {/*  {location.pathname !== '/thank' && <Footer /> }*/}
            {/* eslint-disable-next-line no-restricted-globals */}
            {/*{!excludedRoutes.includes(location.pathname) && <Footer/>}*/}
        </>
    )
}

export default App;

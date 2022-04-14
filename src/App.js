import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";
// import Footer from "./components/Footer"



function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>

                        <Route path='/' element={<Explore/>}/>

                </Routes>
                <Footer/>
            </Router>
            <ToastContainer/>
        </>
    )
}

export default App;

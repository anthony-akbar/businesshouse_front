import './App.css';
import Navbar from './/Components/Navbar/Nabvar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Slider from './/Components/Slider/Slider';
import Footer from "./Components/Footer/Footer";
import Apartment from ".//Components/Apartment/Apartment";
import AboutOne from "./Components/AboutOne/AboutOne";
import FloorPlan from "./Components/FloorPlan/FloorPlan";


function App() {

    return (
        <div>

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Slider/>
                            <AboutOne/>
                            <Apartment/>
                            <FloorPlan/>
                        </>
                    }/>
                    <Route exact path="/new">

                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;

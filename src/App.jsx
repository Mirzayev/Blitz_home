import {useState} from 'react'
import SHeader from './components/SHeader.jsx'
import SRequest from "./sections/SRequest.jsx";
import WeServise from "./sections/WeServise.jsx";
import HomeMoskva from "./sections/HomeMoskva.jsx";
import RealEstateMarket from "./sections/RealEstateMarket.jsx";
import OurAgency from "./sections/OurAgency.jsx";
import './App.css'

function App() {

    return (
    <div className=''>

            <div className=' '>
                <SHeader/>
                <SRequest/>
                {/*<WeServise/>*/}
                <HomeMoskva/>
                <RealEstateMarket/>
                <OurAgency/>
            </div>

    </div>

    )
}

export default App

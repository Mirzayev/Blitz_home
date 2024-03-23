import SContact from "./SContact.jsx";
import {useState, useEffect} from "react";


const SSaidbar = ({openMenu}) => {

    const [showContact, setShowContact] = useState(false)

    function  notRefresh(e){
        e.prevent.default
    }

    return(
         <div className='relative bg-black h-screen z-10'>
             {showContact && <SContact/>}
        <i onClick={openMenu} className="fa-solid fa-circle-xmark absolute top-4 right-4 text-white text-2xl cursor-pointer z-40"></i>
        <div className=' absolute top-1/3 left-1/2 z-40 text-white flex justify-center text-center'>
            <div><p  className='block hover:text-blue-400 duration-100 cursor-pointer'>Home</p>
                <p  className='block hover:text-blue-400 duration-100 cursor-pointer' >Products</p>
                <p   onClick={() => setShowContact(true)} className='block hover:text-blue-400 duration-100 cursor-pointer' >Contact</p>
            </div>
        </div>
    </div>

    )
}

export default SSaidbar
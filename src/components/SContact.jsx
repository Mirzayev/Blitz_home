import {useState} from "react";


const SContact = () => {

    const [showCon, setShowCon] = useState(false)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [comment, setComment] = useState('')


    return (
        <>
            {showCon && <div className=' bg-slate-800 h-screen flex justify-center items-center  '>
                <div className=' top-0 z-20'>

                    <div className='relative bg-blue-400 h-[400px] px-10 rounded-2xl'>
                        <i onClick={() => setShowCon(false)}
                           className="fa-solid fa-circle-xmark absolute top-1 cursor-pointer  right-2 text-lg"></i>
                        <div className='flex items-center mt-10 pt-10 pb-3 gap-3 font-mono '><span>имя: </span><input
                            className='border-2 rounded-md shadow-md hover:shadow-amber-50 outline-none px-1'
                            onChange={(e) => setName(e.target.value)} type="text" placeholder='введите ваше имя'/><br/>
                        </div>
                        <div className='flex items-center py-3 gap-3 font-mono'><span>телефона номер: </span><input
                            onChange={(e) => setNumber(e.target.value)}
                            className='border-2 rounded-md shadow-md hover:shadow-amber-50 outline-none px-1'
                            type="number" placeholder='ваш номер телефона'/><br/></div>
                        <div className='flex  py-3 gap-3 font-mono'><span>комментарий: </span><textarea
                            onChange={(e) => setComment(e.target.value)}
                            className='rounded-md px-1 outline-none hover:shadow-md hover:shadow-amber-50'
                            placeholder='Оставьте свой комментарий ' name="" id="" cols="30" rows="2"></textarea><br/>
                        </div>
                        <div
                            className=' font-mono flex justify-center duration-100  bg-green-400 rounded-md text-white py-1 hover:shadow-md hover:shadow-amber-50 cursor-pointer active:bg-green-500'>
                            <button>Send</button>
                        </div>
                        <h2>Name: {name}</h2>
                        <h2>Phone number : {number}</h2>
                        <h2>Comments : {comment}</h2>
                        <div
                            className='flex justify-center gap-4 mt-4 bg-cyan-400 py-4 text-white rounded-md font-mono'>
                            <p
                                className='text-red-400'>связаться с нами :</p>
                            <p>+7 (495) 199-19-99</p>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default SContact


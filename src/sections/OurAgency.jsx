import decor_1 from '../images/long_decoration.png'
import decor_2 from '../images/medium_decoration.png'
import decor_3 from '../images/short_decoration.png'

import img_1 from '../images/Agency_1.png'
import img_2 from '../images/Agency_2.png'
import img_3 from '../images/Agency_3.png'
import img_4 from '../images/Agency_4.png'
import img_5 from '../images/Agency_5.png'
import img_6 from '../images/Agency_6.png'
import img_7 from '../images/Agency_7.png'
import img_8 from '../images/Agency_8.png'
import {useState} from 'react'

const OurAgency = () => {
    const [agency, setAgency] = useState([
            {
                id: 1,
                definition: 'Аренда жилой недвижимости',
                text_1: 'Руководитель:',
                name: 'Александр Смирнов',
                number: '+7(495)199-19-99',
                email: 'moscow@blitz.estate',
                image: img_1,
            },
            {
                id: 2,
                definition: 'Аренда жилой недвижимости',
                text_1: 'Руководитель:',
                name: 'Александр Смирнов',
                number: '+7(495)199-19-99',
                email: 'moscow@blitz.estate',
                image: img_2,
            },
            {
                id: 3,
                definition: 'Аренда жилой недвижимости',
                text_1: 'Руководитель:',
                name: 'Александр Смирнов',
                number: '+7(495)199-19-99',
                email: 'moscow@blitz.estate',
                image: img_3
            },
            {
                id: 4,
                definition: 'Аренда жилой недвижимости',
                text_1: 'Руководитель:',
                name: 'Александр Смирнов',
                number: '+7(495)199-19-99',
                email: 'moscow@blitz.estate',
                image: img_4
            },
            {
                id: 5,
                definition: 'Аренда жилой недвижимости',
                text_1: 'Руководитель:',
                name: 'Александр Смирнов',
                number: '+7(495)199-19-99',
                email: 'moscow@blitz.estate',
                image: img_5
            },
            {
                id: 6,
                definition: 'Аренда жилой недвижимости',
                text_1: 'Руководитель:',
                name: 'Александр Смирнов',
                number: '+7(495)199-19-99',
                email: 'moscow@blitz.estate',
                image: img_6
            },
            {
                id: 7,
                definition: 'Аренда жилой недвижимости',
                text_1: 'Руководитель:',
                name: 'Александр Смирнов',
                number: '+7(495)199-19-99',
                email: 'moscow@blitz.estate',
                image: img_7
            },
            {
                id: 8,
                definition: 'Аренда жилой недвижимости',
                text_1: 'Руководитель:',
                name: 'Александр Смирнов',
                number: '+7(495)199-19-99',
                email: 'moscow@blitz.estate',
                image: img_8
            }

        ]
    )


    return (
        <div>
            <div className='w-[80%] m-auto'>
                <div className=''>
                    <h2 className='flex justify-center font-bold text-[35px] my-10'>Направления нашего агентства</h2>

                    <div className='sm:grid sm:grid-cols-2 gap-8'>
                        {agency.map((event) => {
                            return (
                                <div key='id' className=' border-2 border-blue-400 rounded-lg '>

                                    <div className='relative flex gap-10'>

                                        <div className='flex'>
                                            <img className='mt-3' src={decor_1} alt=""/>
                                            <img className='mt-5  mx-1' src={decor_2} alt=""/>
                                            <img className='mt-7 ' src={decor_3} alt=""/>
                                        </div>

                                        <div className=''>
                                            <h3 className='font-bold text-[25px] flex justify-center py-4'>{event.definition}</h3>
                                            <div className='flex justify-between px-8 py-4 lg:gap-20'>
                                                <div className=' '>
                                                    <p className='text-slate-400 text-[12px]'>{event.text_1}</p>
                                                    <p className='font-semibold'>{event.name}</p>
                                                    <p className='text-[21px] my-4'>{event.number}</p>
                                                    <p className='border-b-2 border-black '>{event.email}</p>
                                                </div>
                                                <div>
                                                    <img src={event.image} alt=""/>
                                                </div>
                                        </div>

                                       </div>
                                    </div>


                                </div>
                            )
                        })}
                    </div>

                    <div className='flex justify-around text-blue-400 my-10'>
                        <div>
                            <p className='border-b-[1px] border-blue-400  my-3 hover:cursor-pointer hover:border-0 duration-100'>Blitz Estate – международная</p>
                            <p className='border-b-[1px] border-blue-400  my-3 hover:cursor-pointer hover:border-0 duration-100'>компания по управлению</p>
                            <p className='border-b-[1px] border-blue-400  my-3 hover:cursor-pointer hover:border-0 duration-100'>недвижимостью и финансами</p>
                        </div>
                        <div>
                            <p className='border-b-[1px] border-blue-400  my-3 hover:cursor-pointer hover:border-0 duration-100'>Blitz Estate – международная</p>
                            <p className='border-b-[1px] border-blue-400  my-3 hover:cursor-pointer hover:border-0 duration-100'>компания по управлению</p>
                            <p className='border-b-[1px] border-blue-400  my-3 hover:cursor-pointer hover:border-0 duration-100'>недвижимостью и финансами</p>
                        </div>
                        <div>
                            <p className='border-b-[1px] border-blue-400  my-3 hover:cursor-pointer hover:border-0 duration-100'>Blitz Estate – международная</p>
                            <p className='border-b-[1px] border-blue-400  my-3 hover:cursor-pointer hover:border-0 duration-100'>компания по управлению</p>
                            <p className='border-b-[1px] border-blue-400  my-3 hover:cursor-pointer hover:border-0 duration-100'>недвижимостью и финансами</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurAgency
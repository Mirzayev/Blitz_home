import {useState} from 'react'
import home_1 from '../images/home_1.png'
import home_2 from '../images/home_2.png'
import home_3 from '../images/home_3.png'
import home_4 from '../images/home_4.png'
import home_5 from '../images/home_5.png'
import home_6 from '../images/home_6.png'
import home_7 from '../images/home_7.png'
import home_8 from '../images/home_8.png'
import home_9 from '../images/home_9.png'
import home_10 from '../images/home_10.png'


const HomeMoskva = () => {
    const [home, setHome] = useState([
        {
            id: 1,
            img: home_1,
            location: 'Апартаменты в «башне ОКО»',
            number: 'Лот № 4536',
            cost: '25600000',
            area: 'Площадь 40 м²',
            allArea: '475 000 ₽ за м²',
            floor: 'Этаж 16'
        },
        {
            id: 2,
            img: home_2,
            location: 'Апартаменты в «башне Империя»',
            number: 'Лот № 4547',
            cost: '27900000',
            area: 'Площадь 62 м²',
            allArea: '420 000 ₽ за м²',
            floor: 'Этаж 35'
        },
        {
            id: 3,
            img: home_3,
            location: 'Апартаменты в «Neva Towers»',
            number: 'Лот № 4548',
            cost: '19000000',
            area: 'Площадь 40 м²',
            allArea: '475 000 ₽ за м²',
            floor: 'Этаж 16'
        },
        {
            id: 4,
            img: home_4,
            location: 'Апартаменты в комплексе «Федерация»',
            number: 'Лот № 4549',
            cost: '59500000',
            area: 'Площадь 110 м²',
            allArea: '540 909 ₽ за м²',
            floor: 'Этаж 84'
        },
        {
            id: 5,
            img: home_5,
            location: 'Апартаменты в «башне ОКО»',
            number: 'Лот № 4550',
            cost: '34900000',
            area: 'Площадь 88 м²',
            allArea: '396 590 ₽ за м²',
            floor: 'Этаж 29'
        },
        {
            id: 6,
            img: home_6,
            location: 'Апартаменты в  «Город столиц»',
            number: 'Лот № 4551',
            cost: '28400000',
            area: 'Площадь 57 м²',
            allArea: '498 245 ₽ за м²',
            floor: 'Этаж 48'
        },
        {
            id: 7,
            img: home_7,
            location: 'Апартаменты в «башне ОКО»',
            number: 'Лот № 4552',
            cost: '38200000',
            area: 'Площадь 69 м²',
            allArea: '553 623 ₽ за м²',
            floor: 'Этаж 58'
        },
        {
            id: 8,
            img: home_8,
            location: 'Апартаменты в «башне Империя»',
            number: 'Лот № 4553',
            cost: '41000000',
            area: 'Площадь 74 м²',
            allArea: '554 054 ₽ за м²',
            floor: 'Этаж 41'
        },
        {
            id: 9,
            img: home_9,
            location: 'Апартаменты в   «Город столиц»',
            number: 'Лот № 4554',
            cost: '53200000',
            area: 'Площадь 94 м²',
            allArea: '565 957 ₽ за м²',
            floor: 'Этаж 59'
        },
        {
            id: 10,
            img: home_10,
            location: 'Апартаменты в «Neva Towers»',
            number: 'Лот № 4555',
            cost: '89900000',
            area: 'Площадь 140 м²',
            allArea: '642 142 ₽ за м²',
            floor: 'Этаж 61'
        },
    ])


    return (

        <div className='w-[80%] m-auto'>
            <div className='my-[50px]'>
                <h2 className='flex justify-center font-extrabold text-[35px]'>Выберите апартаменты в Москва-Сити</h2>
                <h4 className='flex justify-center mt-6'>Мы включили в наш каталог все апартаменты доступные для покупки
                    в
                    Москва-Сити</h4>

                <table className='w-full border-2 my-10'>
                    <tr className='border-2 grid pho:grid-cols-2 lg:grid-cols-4'>
                        <th className='border-2 hover:bg-slate-100 hover:cursor-pointer py-3 bg-blue-400'>Показать все
                        </th>
                        <th className='border-2 hover:bg-slate-100 hover:cursor-pointer py-3 '>От 20-30 млн</th>
                        <th className='border-2 hover:bg-slate-100 hover:cursor-pointer py-3 '>От 30-50 млн</th>
                        <th className='border-2 hover:bg-slate-100 hover:cursor-pointer py-3 '>Более 100 млн</th>
                    </tr>
                </table>

                <div className='md:grid md:grid-cols-2 gap-8 '>
                    {home.map((event) => {
                        return (
                            <div key={event.id} className='my-4 bg-slate-100 px-4 py-4 rounded-md'>
                                <img src={event.img} alt=""/>
                                <p className='font-extrabold sm:py-4 pho:py-2 px-4 hover:text-blue-400 cursor-pointer '>{event.location}</p>
                                <p className='px-4 sm:py-2 pho:py-1 '>{event.number}</p>
                                <div className='flex justify-between items-center px-4 py-1'><p
                                    className='lg:text-[33px] md:text-[22px] pho:text-[19px] font-semibold'>{event.cost} ₽</p>
                                    <p>{event.area}</p></div>
                                <div className='flex justify-between items-center px-4 sm:py-4 pho:py-2'><p
                                    className='pho:text-[19px] font-semibold'>{event.allArea}</p>
                                    <p>{event.floor}</p></div>
                                <div
                                    className='flex justify-center bg-slate-200 py-2 duration-300 hover:bg-blue-400 hover:text-white pho:rounded'>
                                    <button className=''>Назначить просмотр</button>
                                </div>
                            </div>

                        )
                    })}


                </div>

                <div>
                    <div  className='flex gap-2 justify-center items-center bg-slate-100 py-2'>

                        <button>Показать еще</button>
                        <i className="fa-solid fa-chevron-down mt-1 "></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMoskva
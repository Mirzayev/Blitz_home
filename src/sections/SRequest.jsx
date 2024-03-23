import city_1 from '../images/city_1.png'
import city_2 from '../images/city_2.png'
import {useState} from 'react'

const SRequest = () => {

    const [info, setInfo] = useState([
        {data: 'Поможем Вам приобрести, продать или арендовать необходимую недвижимость', id: 1},
        {data: 'Продадим вашу недвижимость за 21 день или выкупим сами по стоимостьи в договоре', id: 2},
        {data: 'Забронируем понравившуюся квартиру и зафиксируем стоимость для вас на момент бронирования', id: 3},
    ])

    return (
        <div className='w-[80%] m-auto'>
            <div className=''>
                <div className='my-10'>
                    <h2 className='flex justify-center text-[29px] font-extrabold'>Пройдити тест из 5 вопросов</h2>
                    <p className='flex justify-center font-semibold my-1'>Мы подберём 20 покупателей готовых купить вашу
                        недвижимость в течение 24 часов</p>
                </div>

                <div className='lg:flex  mt-0 '>
                    <div className='border-2 px-6 py-4'><h2 className='font-bold '>Выберите местоположение объекта</h2>
                        <div className='flex text-center justify-between gap-3 py-4'>
                            <div className='cursor-pointer'><img src={city_1} alt=""/> <p className='font-bold'>В России</p></div>
                            <div className='cursor-pointer'><img src={city_2} alt=""/> <p className='font-bold'>За границой</p></div>
                        </div>
                        <hr/>
                        <div className='flex justify-between lg:pt-10'>
                            <p>Вы ответили на: 0/5 вопросов</p>
                            <div className='flex gap-3 text-blue-400 items-center hover:cursor-pointer'><p>Продолжить </p>
                                <i className="fa-solid fa-arrow-right text-lg "></i>
                            </div>
                        </div>
                    </div>


                  <div className='items-center border px-4 py-0'>
                      {info.map((event) => {
                          return (
                              <div key={event.id} className='flex items-center leading-1 gap-3 my-10'>
                                  <i className="fa-regular fa-square-check text-blue-400 text-3xl"></i>
                                  <p className=' lg:w-[280px]'>{event.data}</p>
                              </div>
                          )
                      })}
                  </div>
                </div>
            </div>
        </div>
    )
}

export default SRequest
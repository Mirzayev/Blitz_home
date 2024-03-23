import  drink from '../images/drink.png'
import logoImage from '../images/Logo.png'
import SSaidbar from "./SSaidbar.jsx";
import SContact from "./SContact.jsx";
import {useState} from "react";



import './SHeader.css'


const SHeader = () => {



    return (
        <div className=''>


           <div className=''>

               <div className='header  '>
                   <div className=' flex justify-between items-center w-[80%] m-auto'>

                       <div onClick={() => setShowMenu(true)}
                            className='flex gap-3 hover:cursor-pointer flex-wrap duration-900'>
                           <i className="fa-solid fa-bars text-xl "></i>
                           <p>Меню</p>
                       </div>

                       <div className='flex gap-4 items-center pho:mt-4'>
                           <img className='pho:w-[100px] sm:w-auto' src={logoImage} alt=""/>
                           <p className='w-[200px] pho:hidden '>Продажа недвижимости в Москва-Сити</p>
                       </div>

                       <div className='pho:hidden md:block'>
                           <p>+7 (495) 199-19-99</p>
                           <button
                               className='border-2  border-blue-300 px-4 py-1 mt-1 duration-300 hover:bg-slate-200'>Заказать
                               звонок
                           </button>
                       </div>
                   </div>

                   <div className='w-[80%] m-auto'>
                       <h2 className='xl:text-[50px] w-[586px] font-bold lg:text-[45px] lg:w-[500px] md:text-[40px] md:w-[450px] sm:text-[35px] sm:w-[350px] pho:text-[30px] pho:w-[280px] '>Агентство
                           с международным
                           именем Blitz Estate</h2>
                       <p className='sm:w-[400px] my-4 pho:w-[260px] ipad:w-[320px]'>Поможем продать, купить и арендовать недвижимость в Москве, районе Сити и
                           области</p>
                       <div className='ipad:flex md:gap-10 my-8 flex-wrap pho:gap-0 pho:block'>
                           <div className='flex ipad:gap-3 items-center  pho:gap-2 pho:my-2 pho:ml-1'>
                               <p className=" md:text-[50px] sm:text-[30px] pho:text-[30px]">17</p>
                               <p className="md:w-[130px]  pho:leading-5 pho:w-auto" >Работаем в 17 странах</p>
                           </div>
                           <div className='flex ipad:gap-3 items-center pho:gap-2 pho:my-2 pho:ml-1'>
                               <p className="lg:text-[50px] md:text-[40px] sm:text-[30px] pho:text-[30px] ">1963</p>
                               <p className="md:w-[130px]  pho:leading-5 pho:w-auto">Помогли 1963-м клиентам</p>
                           </div>
                           <div className='flex ipad:gap-3 items-center pho:gap-2 pho:my-2 pho:ml-1'>
                               <p className="lg:text-[50px] md:text-[40px] sm:text-[30px] pho:text-[30px]">10</p>
                               <p className="md:w-[130px] pho:leading-5 pho:w-auto">Лет на рынке недвижимости</p>
                           </div>
                       </div>

                       <div className='flex gap-6 items-center  '>
                           <img src={drink} alt=""/>
                           <p className='w-[376px] pho:w-[226px]'>Пройди тест и получи в подарок бутылку шампанского <span className='font-bold'>Veuve Clicquot</span> </p>
                       </div>
                       <button className='text-white bg-blue-500 px-4 py-2 my-8 rounded-lg duration-300 hover:bg-blue-600'>Подобрать недвижимость</button>

                   </div>
               </div>
           </div>
        </div>

    )
}
export default SHeader
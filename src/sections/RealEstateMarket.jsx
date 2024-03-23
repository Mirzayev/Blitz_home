import image_1 from '../images/estate_1.png'
import image_2 from '../images/estate_2.png'
import image_3 from '../images/estate_3.png'
import image_4 from '../images/estate_4.png'
import image_5 from '../images/estate_5.png'

const RealEstateMarket = () => {


    return (
        <div className='bg-slate-200 '>
            <div className='w-[80%] m-auto max-w-[1920px] '>
                <div className='xl:grid xl:grid-cols-2 pho:flex  pho:flex-col-reverse   m-auto gap-10 py-10 '>
                    <div className='' >
                        <h3 className='sm:text-[35px] pho:text-[25px] sm:leading-[48px] sm:my-6 font-bold'>Blitz Estate - на рынке недвижимости с 2008 года</h3>
                        <p className='my-8'>Blitz Estate – международная компания по управлению недвижимостью и финансами. Основана в
                            2008 г. в Австрии. На сегодня представлена в Англии, Испании, Латвии, ОАЭ, Австрии и России,
                            кроме того имеет партнерскую сеть более чем в десяти странах мира.
                        </p>
                        <p className='my-8'> Мы предоставляем услуги полного цикла по приобретению и продаже недвижимости и управлению
                            активами, предоставляя клиентам неизменно высокое качество сервиса. Наш подход позволяет
                            оптимизировать инвестиционный портфель, диверсифицировать риски и обеспечить полную
                            конфиденциальность сделки.</p>
                        <button className='text-white bg-blue-500 px-4 py-2 sm:my-7 rounded-lg duration-300 hover:bg-blue-600'>Узнать больше</button>
                    </div>
                    <div className=''>
                        <img className='w-full ' src={image_1} alt=""/>
                        <div className='pho:flex flex-wrap my-2 gap-4  justify-between '>
                            <img src={image_2} alt=""/>
                            <img src={image_3} alt=""/>
                            <img src={image_4} alt=""/>
                            <img src={image_5} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default RealEstateMarket
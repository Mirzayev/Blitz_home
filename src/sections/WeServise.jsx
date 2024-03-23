import img_1 from '../images/servise_section_img_1.png'
import img_2 from '../images/servise_section_img_2.png'
import img_3 from '../images/servise_section_img_3.png'
import img_4 from '../images/servise_section_img_4.png'
import img_5 from '../images/servise_section_img_5.png'
import img_6 from '../images/servise_section_img_6.png'
import './Servise.css'

const WeServise = () => {


    return (
        <div>
            <div className='w-[80%] m-auto'>
                <h2 className='font-bold text-[22px]'>Наши услуги на международном рынке</h2>

                <div className="">
                    <div className='w-1/3'>
                        <img src={img_1} alt=""/>
                        <img src={img_2} alt=""/>
                    </div>
                    <div className='w-2/3'>
                        <img src={img_2} alt=""/>
                        <img src={img_3} alt=""/>
                    </div>
                </div>

                <img src={img_4} alt=""/>
                <img src={img_5} alt=""/>
                <img src={img_6} alt=""/>

            </div>
        </div>
    )
}


export default WeServise
import moment from "moment/moment";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ZodiacContext } from "../../store/ZodiacContext";
import SignCards from "./SignCards"

const Horoscope = () => {
  const [sign,setSign]=useState('')
  const ctx=useContext(ZodiacContext)

  //to get date that user put
    const today = new Date();
  
    const [date, setDate] = useState(today)
    
    const onSetDate = (event) => {
      setDate(new Date(event.target.value))
  }

   //to calculate date to get sign
  useEffect(() => {
    if (date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;

        // Determine the Zodiac sign based on the birth date
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
            setSign("Aries");
        else if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
            setSign("Taurus")
        else if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
            setSign("Gemini");
        else if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
            setSign("Cancer");
        else if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
            setSign("Leo");
        else if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
            setSign("Virgo");
        else if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
            setSign("Libra");
        else if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
            setSign("Scorpio");
        else if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
            setSign("Sagittarius");
        else if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
            setSign("Capricorn");
        else if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
            setSign("Aquarius");
        else if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
            setSign("Pisces");
        else
            console.log('there is no sign');
    }
}, [date])

//submit handler
  const submitHandler=(e)=>{
    e.preventDefault();

    //to pass sign to get data according to sign
      ctx.getSignDetail(sign)

    //to redirect detail component
      ctx.setIsShowDetail(true)
  }

  return (
    <div className=" mx-8 md:mx-20 lg:mx-24 pb-3">
        <h1 className="text-center mt-8 text-2xl md:text-3xl lg:text-4xl font-semibold">Horoscope Forecasts</h1>
        <div className="flex justify-center mt-4">
            <form action="" onSubmit={submitHandler} className=" flex bg-white w-[400px] rounded-xl shadow-lg overflow-hidden">
                <button type="submit"><i className="ri-search-line ps-3 bg-orange-300 p-4 text-white"></i></button>
                <input type="date" onChange={onSetDate}  className="outline-none py-2 px-3  w-full"/>
            </form>
        </div>

        <SignCards/>        
    </div>
  )
}

export default Horoscope

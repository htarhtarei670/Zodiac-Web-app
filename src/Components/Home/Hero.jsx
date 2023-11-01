import wallpaper from "../../../public/wallpaper.jpg"
import Horoscope from "./Horoscope"

const Hero = () => {
  return (
    <div>
        <img src={wallpaper} alt="" className="w-full"/>
        <Horoscope/>
    </div>
  )
}

export default Hero

import { useState } from "react"
import { useContext ,useEffect} from "react"
import { ZodiacContext } from "../../store/ZodiacContext"
import SignDetail from "../Details/SignDetail"
import Hero from "./Hero"

const Zodiac = () => {
    const ctx=useContext(ZodiacContext);
    const [btnShow,setBtnShow]=useState(false);
        
    window.scroll(top);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

          }, []);

    return (
        <>
            {ctx.isShowDetail ? <SignDetail data={ctx.detail}/> : <Hero/>}
            
            {/* scrolll up btn */}
            <button  onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} className="bg-orange-500 text-white fixed bottom-4 right-7 p-2 rounded-md">
                <i className="ri-arrow-up-double-line text-xl"></i>
            </button>
        </>
    )
}

export default Zodiac
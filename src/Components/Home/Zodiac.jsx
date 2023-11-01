import { useContext } from "react"
import { ZodiacContext } from "../../store/ZodiacContext"
import SignDetail from "../Details/SignDetail"
import Hero from "./Hero"

const Zodiac = () => {
    const ctx=useContext(ZodiacContext);
        
    return (
        <div className="bg-orange-50">
            {ctx.isShowDetail ? <SignDetail data={ctx.detail}/> : <Hero/>}
\        </div>
    )
}

export default Zodiac
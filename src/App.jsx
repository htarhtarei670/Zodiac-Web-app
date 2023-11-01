import { useState } from "react"

//components
import Zodiac from "./Components/Home/Zodiac"
import { DATA } from "./data/data"
import { ZodiacContext } from "./store/ZodiacContext"


const App = () => {
    const [isShowDetail,setIsShowDetail]=useState(false);
    const data=DATA.ZodiacSignsDetail;
    const [detail,setDetail]=useState('');

    //to get data 
    const detailHandler=(sign)=>{
        const signDetail=data.filter(da=>da.Name === sign);
        setDetail(signDetail[0]);        
    }

    //inital value for context
    const initalValue = {
        data,
        detail,
        isShowDetail,
        setIsShowDetail,
        getSignDetail:detailHandler
    }

    return ( 
        <ZodiacContext.Provider value = { initalValue } >
          <Zodiac/>
        </ZodiacContext.Provider>
    )
}

export default App
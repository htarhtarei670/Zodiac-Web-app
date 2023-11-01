import React from "react"

export const ZodiacContext = React.createContext({
    data:[],
    detail:'',
    isShowDetail:false,
    setIsShowDetail:()=>{},
    getSignDetail:(sign)=>{}
});
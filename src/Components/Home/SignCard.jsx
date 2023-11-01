import { useContext } from "react";
import { ZodiacContext } from "../../store/ZodiacContext";

const SignCard = ({data}) => {
  const ctx=useContext(ZodiacContext);

  const clickHandler=()=>{
    //to pass clicked sign to app component
    ctx.getSignDetail(data.Name);

    //to redirect detail page
    ctx.setIsShowDetail(true);
  }

  return (
    <div onClick={clickHandler} className="w-full flex flex-col items-center px-4 py-8 bg-white rounded-lg shadow-lg">
        <div className="bg-orange-100 rounded-full w-[100px] h-[100px] flex justify-center items-center p-2">
            <img src={data.ZodiacSignImageUrl} alt="" className="w-[60px] "/>
        </div>
        <h2 className="text-center pt-2 text-xl font-semibold">{data.Name}</h2>
        <p className="text-[.9rem] text-sm">{data.Dates}</p>
    </div>
  )
}

export default SignCard

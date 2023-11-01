import { useContext } from "react";
import { ZodiacContext } from "../../store/ZodiacContext";
import SignCard from "./SignCard";


const SignCards = () => {
  const ctx=useContext(ZodiacContext);
  const datas=ctx.data;

  return (
        <div className="mt-12 cursor-pointer grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {datas.map((data,index)=>
                <SignCard
                   key={index}
                   data={data}
                />)}
        </div>
  )
}

export default SignCards

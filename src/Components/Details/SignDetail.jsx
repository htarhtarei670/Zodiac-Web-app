
//components

import { useContext } from "react";
import { ZodiacContext } from "../../store/ZodiacContext";
import ApexChart from "./ApexChart";
import SingleDetail from "./SingleDetail";

const SignDetail = ({data}) => {
  const ctx=useContext(ZodiacContext);
  
  return (
    <div className="mx-4 sm:mx-12 md:mx-18 lg:mx-40 py-8">
      {/* back arrow */}
      <div className="" onClick={()=>{ctx.setIsShowDetail(false)}}>
        <i className="ri-arrow-left-line text-xl text-orange-500 font-bold"></i>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-orange-100 rounded-full w-[100px] h-[100px] flex justify-center items-center p-2">
            <img src={data.ZodiacSignImageUrl} alt="" className="w-[60px] "/>
        </div>
        <h1 className="text-2xl font-bold pt-3">မြန်မာလ - {data.MyanmarMonth}</h1>
        <p className="text-[.9rem] pt-1">{data.Dates}</p>
      </div>

      <div className="bg-white mt-6 rounded-3xl flex justify-center lg:justify-between">
        <div className="p-4 sm:p-8 md:p-12 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            <img src={data.ZodiacSign2ImageUrl} alt="signImage" className=" rounded-3xl" />
            <ApexChart traits={data.Traits}/>
          </div>

          <SingleDetail title='Life Purpose' text={data.LifePurpose}/>
          <SingleDetail title='Loyal' text={data.Loyal}/>
          <SingleDetail title='Angry' text={data.Angry}/>
          <SingleDetail title='Pretty Features' text={data.PrettyFeatures}/>
          <SingleDetail title='Character' text={data.Character}/>
          
          <div className="my-12">
            <h1 className="text-2xl md:text-4xl font-bold pb-4">Representative Flower</h1>
            <div className=" md:flex">
              <img src={data.RepresentativeUrl} alt="" className=" w-[100%] md:w-[500px] h-[100%] lg:h-[500px] mb-5"/>
              <p className=" border-s-4 border-orange-400 ps-3 text-md md:text-lg">{data.RepresentativeFlower}</p>
            </div>
          </div>

        </div>

         
      </div> 

    </div>
  )
}


export default SignDetail





const SingleDetail = ({title,text}) => {
  return (
    <div className="my-6">
        <h1 className="text-2xl md:text-4xl font-bold pb-4">{title}</h1>
        <p className=" border-s-4 border-orange-400 ps-3 text-md md:text-lg">{text}</p>
    </div>
  )
}

export default SingleDetail

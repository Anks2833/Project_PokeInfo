//Headings for Various Component Pages

const Headings = (props) => {

    const {value} = props

  return (
    // The heading
    <div className="w-full hidden sm:flex justify-center text-[2.5vw] text-white">
    <h1 className="link-text font-semibold bg-[#00091D] px-32 border-[2px] border-zinc-100 shadow-md shadow-teal-300 rounded-bl-full rounded-br-full">{value}</h1>
  </div>
  )
}
export default Headings
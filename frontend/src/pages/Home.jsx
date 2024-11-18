import { LuFileCode } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { generateRandomToken } from "../utils/generateRandomToken";
const Home = () => {
  const navigate = useNavigate();
  const token = generateRandomToken();    
  const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${token}`);
    }
  return (
    <div className="relative h-screen bg-grey font-mono">
        <div className="absolute top-4 left-4 flex items-center">
            <LuFileCode className="text-3xl text-emerald-500" />
            <span className="ml-2 text-2xl">codeshare</span>
        </div>
        <div className="flex flex-col bg-grey gap-8 items-center justify-center h-screen">
            <h1 className="font-bold md:text-3xl lg:text-4xl">Share Code in Real-time with Developers</h1>
            <h3 className="md:text-xl pl-6 lg:text-2xl">An online code editor for interviews, troubleshooting, teaching & more…</h3>
            <button onClick={handleSubmit} className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base lg:text-lg btn btn-outline">Share Code Now</button>
        </div>
  </div>
  )
}

export default Home

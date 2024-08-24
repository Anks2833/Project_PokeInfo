import Routing from "./utils/Routing";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Routing/>
    </div>
  )
}

export default App
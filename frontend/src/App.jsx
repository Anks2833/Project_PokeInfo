// import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from "./utils/Routing";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Routing/>
      <Footer />
    </div>
  )
}

export default App
import { Route, Routes } from "react-router-dom";
import Courses from "./component/Courses/Courses";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        {/* <Route path="/" element={}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

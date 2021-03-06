import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./component/About/About";
import Blogs from "./component/Blogs/Blogs";
import CourseDetails from "./component/Courses/CourseDetails";
import Courses from "./component/Courses/Courses";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import NotFound from "./component/NotFound/NotFound";
import Pay from "./component/Pay/Pay";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Signin from "./component/Signin/Signin";
import Signup from "./component/Signup/Signup";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/courses/:courseId" element={
          <PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        }></Route>
        <Route path="/pay" element={
          <PrivateRoute>
            <Pay></Pay>
          </PrivateRoute>
        }></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;

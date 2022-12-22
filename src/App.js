import './App.css';
import { Button } from 'reactstrap';
import { toast,ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import Header from './Components/Header';
import NavHead from './Components/NavHead';
import Course from './Components/Course';
import AllCourses from './Components/AllCourses';

function App() {
  const btnHandler=()=>{
    toast.success("DONE")
  }
  
  return (
    <div className="App">
      <ToastContainer/>
      <Home/>
      <Header/>
      <NavHead/>
      {/* <Course courses={{title:"Java Course" ,description:"This is a java courses"}}/> */}
      <AllCourses/>
    </div>
  );
}

export default App;

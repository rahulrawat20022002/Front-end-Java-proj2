import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { toast,ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import Header from './Components/Header';
import NavHead from './Components/NavHead';
import Course from './Components/Course';
import AllCourses from './Components/AllCourses';
import AddCourses from './Components/AddCourses';
import Menu from './Components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <ToastContainer/>

      <Container>
        
        <Header/>
        <Row>
          <Col md={4}><Menu/></Col>
          <Col md={8}>
            
          <BrowserRouter>

            <Routes>
              <Route path='/' element={<Home/>} exact/>
              <Route path='/addCourses' element={<AddCourses/>}/>
              <Route path='/viewCourses' element={<AllCourses/>} exact/>
              <Route path='/about' element={<Home/>}/>
            </Routes>

          </BrowserRouter>
            
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}


export default App;

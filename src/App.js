import './App.css';
import { Col, Container, Row } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import Header from './Components/Header';
import AllCourses from './Components/AllCourses';
import AddCourses from './Components/AddCourses';
import Menu from './Components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateCourses from './Components/UpdateCourses';


function App() {
  
  return (
    <div className="App">
      <ToastContainer/>

      <Container>
        
        <Header/>
        <Row>
          <Col className='my-4' md={3}><Menu/></Col>
          <Col md={9}>
            
          <BrowserRouter>

            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/addCourses' element={<AddCourses/>}/>
              <Route path='/viewCourses' element={<AllCourses/>} />
              <Route path='/about' element={<Home/>}/>
              <Route path='/updateCourses' element={<UpdateCourses/>}/>
        
            </Routes>

          </BrowserRouter>
  
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}


export default App;

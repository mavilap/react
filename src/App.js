
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
//import Layout from "./paginas/Layout";
import Home from "./paginas/Home";
import Blogs from "./paginas/Blogs";
import Contact from "./paginas/Contact";
import NoPage from "./paginas/NoPage";
//Componenets
import Header from "./components/Header";
import Aside from "./components/Aside";
//import Main from "./components/Main";
import Footer from "./components/Footer";
import Nav from './components/Nav';

export default function App() {
  /*return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );*/
  return (
    <BrowserRouter>
      <div class="contenedor">
        <Header/>
        <Nav/>
        <Aside/>
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route index element={<Home/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );

}
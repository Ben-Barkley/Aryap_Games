import {  Route, Routes } from 'react-router-dom';
import Fifa from './Components/Fifa';




// import Home from "./Components/Home";


import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
// import Pes from './Components/Pes';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
  {/* <Navbar/> */}
<Routes>
    

      <Route >
      
        <Route path="/" element={ <Navbar/>}/>
        {/* <Route path="/pes"/> */}
        <Route path="/fifa"  exact/>
        <Route path="/hero" element={ <Hero />} exact/>
      </Route>
     </Routes>
  
 
  {/* <BrowserRouter>
    <Navbar/>
  

   

     <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/pes" element={ <Pes/>}/>
      <Route path="/fifa" element={ <Fifa />}/>
      <Route path="/hero" element={ <Hero />} exact/>

     </Routes>

     </BrowserRouter> */}

     
    {/* <Pes/> */}
    <Fifa/> 
     <Footer/>
    {/* <Hero/>  */}



  
   
    
    
    </div>

    

  );
}

export default App;




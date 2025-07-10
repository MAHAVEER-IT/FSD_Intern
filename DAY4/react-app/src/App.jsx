import './App.css'
import Card from './Components/Card'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import InputToCard from './Components/InputToCard'
import React,{useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom/client'

import image1 from '/coding.png';
import image2 from '/hacker.png';
import ToDO from './Components/ToDO'
import LocalStorage from './Components/LocalStorage'

function App() {

  // const [toogle,setToggle] = useState(false);

  /*const[src, setSrc] = useState(image1);

  const handleClickUseState = ()=>{
      setSrc(image2);
  }*/

  /*let imgRef = useRef();

  const handleClick = ()=>{
    console.log(imgRef.current);
    imgRef.current.src = image2;
    imgRef.current.height = 300;
    imgRef.current.width = 300;
  }*/
  return (
    <>
    {/* {toogle && <h3>Only show when its true</h3>}
    {toogle ? <h3>Hello World</h3> : <h3>Not a hello World</h3>}
     <button className='btn' onClick={()=>{setToggle(!toogle)}}>Click Me</button> */}

     {/* <img src={src} alt="image 1" height={400} width={400}/> */}
     {/*<img src={image1} alt="image 1" ref={imgRef}  height={400} width={400}/>*/}
      {/* <NavBar />
      <InputToCard />
      <Footer /> */}
      {/* {React.createElement('h1',null,'Hello World')} */}
      {/* <ToDO /> */}
      {/* <LocalStorage /> */}
    </>
  )
}

// render the element inside the root

// const element = React.createElement('div',{className: 'Container'},
//   React.createElement('h2', null, 'This is Title'),
//   React.createElement('p', null, 'This is a paragraph'),
// );
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(element);

export default App

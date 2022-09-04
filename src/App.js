import React from 'react';
 import Info from './components/Info.js';
import styled from 'styled-components';
import About from './components/About';
import Interests from './Interests.js';



//styled components variable must aalways start with Capital letter
const MainContent=styled.div`
width: 400px;
height: 600px;
margin: auto 35%;
margin-top: 10vh;
background-color: #243a4c;
border-radius: 22px;
color: #b08330;
`


function App() {
  return (
    <>
    <MainContent>
    <Info />
    <About />
    <Interests />
    </MainContent>
    </>
  );
}

const pok=["bulbasur","reem","noppr"];
const x=pok.map(a=> `<p>${a}<p>`);
console.log(x);

export default App;

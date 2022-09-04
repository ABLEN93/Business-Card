import React from "react";
import img from '../images/omer-haktan-bulut-MooyhOZJ3NE-unsplash.jpg';
import styled from 'styled-components';



const InfoStyle=styled.div`
width: 200px;
height: 200px;
margin: auto 25%;
padding-top: 30px;
background-size: cover;
text-align: center;
.myImage{
width: 200px;
height: 200px;
background-size: cover;
padding-top: 10px;
border-radius: 10px;
}
`

const MAinText=styled.div`
text-align: center;
`
const MyButtons=styled.button`
cursor: pointer;
background-color: lightblue;
margin-left: 5px;
border: 5px solid #b08330;
border-radius: 10px;
width: 80px;
height: 40px;
`

function Info() {
  return (
      <>
    <InfoStyle>
    <div className="myImage" style={{ backgroundImage:`url(${img})` }}></div>  
        </InfoStyle>
        <MAinText>
      <h2>Laura Smith</h2>
    <h2>Frontend Developer</h2>

    <MyButtons>E-mai</MyButtons>
    <MyButtons>linkedIn</MyButtons>
        </MAinText>

    </>
  )
}

export default Info
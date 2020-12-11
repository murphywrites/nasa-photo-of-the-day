import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Photo from "./components/Photo/Photo"
import PhotoInfo from "./components/PhotoInfo/PhotoInfo"
import Header from "./components/Header/Header"
import styled from 'styled-components'




export default function App() {
const [photoObj, setPhotoObj] = useState('');
const [date, setDate] = useState('');
const [photo, setPhoto] = useState('')
const [info, setInfo] = useState('')
const [displayOn, setDisplayOn] = useState(true)

const toggleDisplay = e => {
  setDisplayOn( !displayOn )
}


useEffect(() => {
  const fetchPhotoOfDay = () => {
    axios.get(URL = 'https://api.nasa.gov/planetary/apod?api_key=wDhtM0iiz4v9puJ8o0dmffW2hvx6W724caHOcazZ')
    .then((res) => {
      setPhotoObj( res.data)
      setPhoto( res.data.url );
      setDate( res.data.date );
      setInfo ( res.data.explanation)
    }).catch( (err) => {
      console.log(err);
    }

    )
  }
  fetchPhotoOfDay();
}, []);

console.log("here's the display", displayOn)

const WrapperDiv = styled.div`

font-family: 'Montserrat', sans-serif;
background-image: url(${photoObj.url});
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
background-color: black;
background-size: auto;
opacity: 1;`

const ToggleDisplayDiv = styled.div`

visibility: ${ displayOn?'visible':'hidden'};
transition: visibility 10s linear 1s;
`

// visibility: ${ displayOn?'visible':'hidden'};
  return (
                <WrapperDiv  onDoubleClick = { toggleDisplay } >
                  <ToggleDisplayDiv > 
                  <Header date = {date}/>
                  <Photo  photo = {photo}/>
                  {/* <PhotoList /> */}
                  <PhotoInfo info = {info} />
                  </ToggleDisplayDiv >
                </WrapperDiv>)
}

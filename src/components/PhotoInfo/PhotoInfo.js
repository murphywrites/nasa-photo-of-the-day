import React from "react";
import styled from 'styled-components'

const WrapperDiv = styled.div`
color: white;
text-align:center;
width: 50%;
margin: 0 auto;
background-color:black;
border-radius: 10px;
opacity:0.75;
`
const NoticeH3 = styled.h3`
font-size: .75rem;
`

export default function PhotoInfo(props) {

    const { info } = props;
  
    return (
      <WrapperDiv>
        <NoticeH3>Double-click anywhere on the page to toggle full-size</NoticeH3>
        <p><span style={{fontWeight:"bold" }}>Photo Explanation: </span>
        {info}</p>
      </WrapperDiv>
    );
  }
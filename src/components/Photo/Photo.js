import React from "react";
import styled from 'styled-components'

const WrapperDivPhoto = styled.div`
border: 10px solid white;
border-radius: 120px;
text-align: center;
width: 50%;
display: flex;
margin:auto;
overflow: hidden;
`
const ImgOfDay = styled.img`
margin:auto;
`

export default function Photo (props) {
    const { photo } = props;
    return (
      <WrapperDivPhoto>
        <ImgOfDay src = {photo}/><br/>
      </WrapperDivPhoto>
    );
  }
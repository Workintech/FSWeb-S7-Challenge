import React from "react";
import styled from "styled-components";

const SCCerceve = styled.div`
  border: 3px solid black;
  width: 22%;
  padding: 15px;
  margin: 20px;
  box-sizing: border-box;
`;
const SCImage = styled.img`
  width: 100%;
  height: 250px;
  background-size: cover;
`;

export default function Stores(props) {
  const { fakeStores } = props;
  return (
    <>
      <SCCerceve>
        <SCImage src={fakeStores.image} />
        <h4>{fakeStores.restaurant}</h4>
        <p>{fakeStores.explanation}</p>
        <p>{fakeStores.preptime}</p>
        <p>{fakeStores.cost}</p>
      </SCCerceve>
    </>
  );
}

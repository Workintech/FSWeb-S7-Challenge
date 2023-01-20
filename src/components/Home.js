import React from "react";
import styled from "styled-components";
import Stores from "./Stores";
import fakeStores from "./fakeData";

const SCSection = styled.section`
  background-image: url("https://images.deliveryhero.io/image/fd-tr/LH/t5vx-hero.jpg?width=1600&height=400&quality=45");
  height: 400px;
  text-align: center;
`;
const SCButton = styled.button`
  margin-top: 150px;
  display: inline-block;
  text-align: center;
  color: white;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  background: rgba(20, 0, 0, 0.5);
  padding: 10px;
  font-weight: bold;
  &:hover {
    font-size: 30px;
    padding: 15px;
  }
`;
const SCFood = styled.h3`
  margin-top: 20px;
  text-align: center;
`;
const SCStoresDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home(props) {
  // clickButton sipariş formu sayfasına yönlendiriyor.
  const { clickButton } = props;
  return (
    <>
      <SCSection>
        <SCButton onClick={clickButton} data-cy="home-button">
          Let's get your pizza ready
        </SCButton>
      </SCSection>
      <SCFood>Food Delivery in San Francisco City</SCFood>
      <SCStoresDiv>
        {fakeStores.map((event) => (
          <Stores fakeStores={event} />
        ))}
      </SCStoresDiv>
    </>
  );
}

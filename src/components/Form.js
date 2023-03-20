import React from "react";
import styled from "styled-components";
import dataInput from "./dataInput";
import Success from "./Success";

const SCForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: #1b2a41;
  padding: 30px 0 30px 0;
`;
const SCBox = styled.p`
  width: 40%;
  background-color: #0e141f;
  padding: 20px;
  margin: 5px;
`;
const SCSubmit = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
`;
const SCLabel = styled.label`
  color: white;
  font-weight: 700;
`;
const SCError = styled.p`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;
const SCText = styled.span`
  color: white;
  font-weight: 700;
  margin-right: 4px;
`;
const SCChecked = styled.label`
  color: white;
  font-weight: 500;
`;
const SCOrder = styled.div`
  width: 40%;
  padding: 20px;
  margin: 5px;
  color: white;
  font-weight: 500;
  font-size: 20px;
`;
const SCOptional = styled.span`
  font-size: 10px;
  font-weight: 300;
`;
export default function Form(props) {
  const {
    handleChange,
    formData,
    handleSubmit,
    errors,
    buttonDisable,
    newOrder,
  } = props;

  return (
    <>
      <SCForm id="pizza-form" onSubmit={handleSubmit} data-cy="form-submit">
        <SCBox>
          <p>
            <SCLabel
              htmlFor="name-input"
              className="name--label"
              data-cy="isim-label"
            >
              Name:{" "}
            </SCLabel>
            <input
              id="name-input"
              name="isim"
              type="text"
              placeholder="name"
              value={formData.isim}
              onChange={handleChange}
              data-cy="isim-input"
            />
          </p>
          <SCError data-cy="isim-error">{errors.isim}</SCError>
        </SCBox>
        <SCBox>
          <p>
            <SCLabel
              htmlFor="adress-input"
              className="name--label"
              data-cy="adres-label"
            >
              Adress:{" "}
            </SCLabel>
            <input
              id="adress-input"
              name="adress"
              type="text"
              placeholder="adress"
              value={formData.adress}
              onChange={handleChange}
              data-cy="adres-input"
            />
          </p>
          <SCError data-cy="adres-error">{errors.adress}</SCError>
        </SCBox>
        <SCBox>
          <p>
            <SCLabel htmlFor="phone-input" data-cy="telefon-label">
              Phone:{" "}
            </SCLabel>
            <input
              id="phone-input"
              name="phone"
              type="text"
              placeholder="phone"
              value={formData.phone}
              onChange={handleChange}
              data-cy="telefon-input"
            />
          </p>
          <SCError data-cy="telefon-error">{errors.phone}</SCError>
        </SCBox>
        <SCBox>
          <p>
            <SCText>Types of Pizza:</SCText>
            <select
              id="typesOfPizza"
              name="types"
              value={formData.types}
              onChange={handleChange}
              data-cy="typesOfPizza-input"
            >
              <option value="">--Select Types--</option>
              <option value="margherita">Margherita Pizza</option>
              <option value="pepperoni">Pepperoni Pizza</option>
              <option value="bbqchicken">BBQ Chicken Pizza</option>
              <option value="hawaiian">Hawaiian Pizza</option>
            </select>
          </p>
          <SCError data-cy="typesOfPizza-error">{errors.types}</SCError>
        </SCBox>
        <SCBox>
          <p>
            <SCText>Pizza Size:</SCText>
            <select
              id="size-dropdown"
              name="boyut"
              value={formData.boyut}
              onChange={handleChange}
              data-cy="size-select"
            >
              <option value="">--Select Size--</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="x-large">X-Large</option>
            </select>
          </p>
          <SCError data-cy="size-error">{errors.boyut}</SCError>
        </SCBox>
        <SCBox>
          <SCText>
            Extra Ingredients: <SCOptional>(Optional)</SCOptional>
          </SCText>
          <p>
            {dataInput.map((event) => (
              <p>
                <input
                  id={event.id}
                  type="checkbox"
                  name={event.name}
                  checked={formData[event.name]}
                  value={event.malzemeAdı}
                  onChange={handleChange}
                />
                <SCChecked htmlFor={event.id}>{event.malzemeAdı}</SCChecked>
              </p>
            ))}
          </p>
        </SCBox>
        <SCBox>
          <SCLabel htmlFor="special-text">
            Order Note: <SCOptional>(Optional)</SCOptional>{" "}
          </SCLabel>
          <input
            id="special-text"
            name="özel"
            type="text"
            value={formData.özel}
            onChange={handleChange}
            data-cy="özel-input"
            placeholder="order note"
          />
        </SCBox>
        <SCBox>
          <SCLabel htmlFor="numberOfOrders" data-cy="özel-label">
            Number of orders:{" "}
          </SCLabel>
          <input
            id="numberOfOrders"
            name="siparisSayisi"
            type="number"
            value={formData.siparisSayisi}
            onChange={handleChange}
            data-cy="siparisSayisi-input"
          />
          <SCError data-cy="siparisSayisi-error">
            {errors.siparisSayisi}
          </SCError>
        </SCBox>
        <SCBox>
          <p>
            <SCSubmit
              type="submit"
              id="order-button"
              disabled={buttonDisable}
              data-cy="buttonOrder"
            >
              Add to Orders
            </SCSubmit>
          </p>
        </SCBox>
        <SCOrder>
          <Success newOrder={newOrder} />
        </SCOrder>
      </SCForm>
    </>
  );
}

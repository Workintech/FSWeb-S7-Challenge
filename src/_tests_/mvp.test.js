import React from "react";
import axios from 'axios'
import App from "../App";
import { Router, MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

jest.mock('axios')

describe("Pizza test, sprint 7 challenge", () => {
  it('Anasayfa route\'u "/", #order-pizza linki mevcut.', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(history.location.pathname).toBe('/')
    const orderPizza = document.querySelector('#order-pizza')
    expect(orderPizza).toBeInTheDocument();
  })

  it('Anasayfadan "/" ,  #order-pizza ya tıklandığında, "/pizza" ya yönlendiriyor.', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(history.location.pathname).toBe('/')
    const orderPizza = document.querySelector('#order-pizza')
    expect(orderPizza).toBeInTheDocument();
    fireEvent.click(orderPizza)
    expect(history.location.pathname).toBe('/pizza')
  });

  it('"/pizza" sayfasında #pizza-form elementi bulundu', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const pizzaForm = document.querySelector('#pizza-form')
    expect(pizzaForm).toBeInTheDocument()
  });

  it('#name-input idli bir input bulundu.', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const nameInput = document.querySelector('#name-input')
    expect(nameInput).toBeInTheDocument()
  });

  it('#name-input \'da "İsim en az 2 karakter olmalıdır" hata mesajıyla bir form doğrulama tespit edildi', async () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const nameInput = document.querySelector('#name-input')
    expect(nameInput).toBeInTheDocument()
    fireEvent.input(nameInput, {
      target: {value: 'a'}
    })
    await waitFor(() => {
      expect(screen.getByText('İsim en az 2 karakter olmalıdır')).toBeInTheDocument()
    })
    nameInput.value = ''
  });

  it('#size-dropdown idli pizza boyutu için bir dropdown tespi edildi.', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const sizeDropdown = document.querySelector('#size-dropdown')
    expect(sizeDropdown).toBeInTheDocument()
  });

  it('Form\'da malzeme seçimleri için en az 4 adet checkbox tespit edildi.', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const toppingsChecklist = document.querySelectorAll('[type="checkbox"]')
    expect(toppingsChecklist.length).toBeGreaterThanOrEqual(4)
  });

  it('#special-text id li bir özel seçim inputu bulundu.', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const specialInstructions = document.querySelector('#special-text')
    expect(specialInstructions).toBeInTheDocument()
  });

  it("#pizza-form doldurulabiliyor, #pizza-form gönderiliyor https://reqres.in/api/orders ", async () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );

    expect(testLocation.pathname).toBe('/pizza')
    const pizzaForm = document.querySelector('#pizza-form')
    expect(pizzaForm).toBeInTheDocument()

    const nameInput = document.querySelector('#name-input')
    const sizeDropdown = document.querySelector('#size-dropdown')
    const toppingsChecklist = document.querySelectorAll('[type="checkbox"]')
    const specialInstructions = document.querySelector('#special-text')
    const sizeOptions = screen.getAllByRole('option')

    userEvent.type(nameInput, 'Tony Stark')
    userEvent.selectOptions(sizeDropdown, sizeOptions[1])

    userEvent.click(toppingsChecklist[1])
    userEvent.click(toppingsChecklist[2])
    userEvent.type(specialInstructions, 'Ozel istekler mevcut')

    await waitFor(() => {
      expect(screen.getByDisplayValue(/tony stark/i)).toBeInTheDocument()
    })
    expect(sizeOptions[1].selected).toBe(true)
    expect(toppingsChecklist[0]).not.toBeChecked()
    expect(toppingsChecklist[1]).toBeChecked()
    expect(toppingsChecklist[2]).toBeChecked()
    expect(screen.getByDisplayValue(/Ozel istekler mevcut/i)).toBeInTheDocument()

    const testOrder = {}
    testOrder[nameInput.name] = nameInput.value
    testOrder[sizeDropdown.name] = sizeDropdown.value
    testOrder[specialInstructions.name] = specialInstructions.value
    toppingsChecklist.forEach(top => {
      testOrder[top.name] = top.checked ? true : false
    })

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({testOrder})
    );
    const orderButton = document.querySelector('#order-button')
    userEvent.click(orderButton)
    expect(axios.post("https://reqres.in/api/orders", testOrder));
  });
});

import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import axios from "axios";
import * as Yup from "yup";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./components/Header";

const formSchema = Yup.object().shape({
  isim: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Please enter valid name"),
  adress: Yup.string()
    .min(6, "Adress must be at least 6 characters")
    .required("Please enter valid adress"),
  boyut: Yup.string().required("Please select size"),
  types: Yup.mixed()
    .oneOf(
      ["margherita", "pepperoni", "bbqchicken", "hawaiian"],
      "Please select types"
    )
    .required(),
  malzeme1: Yup.boolean(),
  malzeme2: Yup.boolean(),
  malzeme3: Yup.boolean(),
  malzeme4: Yup.boolean(),
  malzeme5: Yup.boolean(),
  özel: Yup.string(),
  siparisSayisi: Yup.number()
    .positive()
    .min(1, "Must be more than 1")
    .required("Please enter valid number of orders"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
});

// formData state ine atadım. Başlangıçta nasıl görünmesini istiyorsak ona göre yapıyoruz.
const dummyData = {
  isim: "",
  adress: "",
  types: "",
  boyut: "",
  malzeme1: false,
  malzeme2: false,
  malzeme3: false,
  malzeme4: false,
  malzeme5: false,
  özel: "",
  siparisSayisi: "",
  phone: "",
};

// errors state ine atadım.
const dummyErrors = {
  isim: "",
  adress: "",
  boyut: "",
  types: "",
  malzeme1: "",
  malzeme2: "",
  malzeme3: "",
  malzeme4: "",
  malzeme5: "",
  özel: "",
  siparisSayisi: "",
  phone: "",
};
const App = () => {
  // Anasayfadaki buttonu sipariş formu sayfasına yönlendirmek için useHistory kullandım. Home sayfasına yönlendirdim.
  let history = useHistory();
  function clickButton() {
    history.push("/pizza");
  }
  //............................

  // Inputlarda yazdığımız şeyler sadece inputta görünüyor,state almamız gerekiyor.formDatalarını tek bir yerde toplamak için state tanımlıyoruz. Yukarıda tanımladığımız dummyData'yı kullandık.
  const [formData, setFormData] = useState(dummyData);

  // Form hataları için state oluşturacağız.
  const [errors, setErrors] = useState(dummyErrors);

  //ilk etapta formda button için state tanımladık.
  const [buttonDisable, setButtonDisable] = useState(true);

  //yeni sipariş için
  const [newOrder, setNewOrder] = useState(null);
  function checkFormErrors(name, value) {
    Yup.reach(formSchema, name) //reach ile yup ta yaptığımız formSchema değişkenindeki namelere ulaştık.
      .validate(value) //name in karşısındaki value değerlerini doğrulamak için validate edeceğiz.bize olan dönüşün then ile gitmesini sağlamak için then yapıyoruz. Hataları aldık bir state toplamalıyız. (errors / setErrors)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        }); //eğer bir hata yoksa name'i boş string yap diyoruz.
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }
  //evente bağlı bir fonksiyon yazıyoruz. Checkbox'larda value kullanmıyoruz. checked kullanıyoruz.Bu duruma göre fonksiyonu yazıyoruz.
  const handleChange = (event) => {
    const { value, name, type, checked } = event.target;
    let deger = value;
    if (type === "checkbox") {
      deger = checked;
    }
    checkFormErrors(name, deger);
    setFormData({
      ...formData,
      [name]: deger,
    });
  };
  //console.log(errors);

  //preventDefault sayfa yenilenmesin diye yapıyoruz.
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        setNewOrder(response.data);
        setFormData(dummyData);
      })
      .catch((err) => console.log(err));
  };

  //useEffect i formData her değiştiğinde kontrol edecek.Tüm datayı kontor ediyoruz. handleChange ayrı ayrı kontrol ettik.
  useEffect(() => {
    formSchema
      .isValid(formData)
      .then((response) => setButtonDisable(!response));
  }, [formData]);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home clickButton={clickButton} />
        </Route>
        <Route path="/pizza">
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            buttonDisable={buttonDisable}
            newOrder={newOrder}
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;

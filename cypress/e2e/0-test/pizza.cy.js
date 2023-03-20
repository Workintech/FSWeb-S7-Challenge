import { slowCypressDown } from "cypress-slow-down";

//slowCypressDown(200);
describe("ilk test", function() {
  it("does not do much", function() {
    expect(true).to.equal(true);
  });
});

describe("anasayfa test", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000/"); //sayfayı visit edip o yüklendikten sonra başlasın diye beforeEach dedik
  });
  it("home sayfasındaki butona tıklayınca form sayfasına yönlendiriyor mu?", function() {
    cy.get("[data-cy=home-button]").click();
  });
});

describe("form hata testleri", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("name label ına tıklayınca input focus oluyor mu? 2 karakter yazınca hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy=isim-label]").click();
    cy.focused().should("have.attr", "data-cy", "isim-input");
    cy.get("[data-cy=isim-input]").type("ce");
    cy.get("[data-cy=isim-error]").should("exist");
  });

  it("adress label ına tıklayınca input focus oluyor mu? 5 karakter yazınca hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy=adres-label]").click();
    cy.focused().should("have.attr", "data-cy", "adres-input");
    cy.get("[data-cy=adres-input]").type("Ccccc");
    cy.get("[data-cy=adres-error]").should("exist");
  });

  it("phone label ına tıklayınca input focus oluyor mu? harf yazınca hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy=telefon-label]").click();
    cy.focused().should("have.attr", "data-cy", "telefon-input");
    cy.get("[data-cy=telefon-input]").type("c23");
    cy.get("[data-cy=telefon-error]").should("exist");
  });

  it("sipariş çeşidi seçilmeyince  hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy=typesOfPizza-input]").select("Pepperoni Pizza");
    cy.get("[data-cy=typesOfPizza-input]").select("");
    cy.get("[data-cy=typesOfPizza-error]").should("exist");
  });

  it("pizza boyutu seçilmeyince  hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy=size-select]").select("Small");
    cy.get("[data-cy=size-select]").select("");
    cy.get("[data-cy=size-error]").should("exist");
  });

  it("sipariş adedi 0 olunca hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy=siparisSayisi-input]").type("0");
    cy.get("[data-cy=siparisSayisi-error]").should("exist");
  });
});

describe("form ekstra malzemeler testi", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Extra Ingredients ta tüm malzemeler seçilebiliyor mu ?", function() {
    cy.get('[type="checkbox"]').check();
  });
  it("Extra Ingredients ta 1 veya daha fazla seçilebiliyor mu ?", function() {
    cy.get('[type="checkbox"]').check(["Olive", "Sausage", "Mushrooms"]); //check içine yazdıklarımız value değerlerinden geliyor.
  });
});

describe("Form Gönderme Testi", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("formun gerekli yerleri doldurulunca button aktif oluyor?", function() {
    cy.get("[data-cy=isim-input]").type("Ceylin");
    cy.get("[data-cy=adres-input]").type("Ankara");
    cy.get("[data-cy=telefon-input]").type("12345678");
    cy.get("[data-cy=typesOfPizza-input]").select("BBQ Chicken Pizza");
    cy.get("[data-cy=size-select]").select("large");
    cy.get('[type="checkbox"]').check(["Sausage", "Mushrooms"]);
    cy.get("[data-cy=siparisSayisi-input]").type("3");
    cy.get("[data-cy=buttonOrder]").click();
    cy.get("[data-cy=form-submit]").submit();
    cy.get("[data-cy=new-order]").should("exist");
  });
});

import React from "react";
import styled from "styled-components";

const SCSuccess = styled.p`
  background: green;
  color: white;
  padding: 10px;
  text-align: center;
`;
export default function Success(props) {
  const { newOrder } = props;
  return (
    <>
      {newOrder && (
        <SCSuccess data-cy="new-order">
          Siparişiniz başarıyla oluşturuldu.
          {newOrder.id} numaralı sipariş {newOrder.isim} isimli müşterimizin{" "}
          {newOrder.adress} adresine gönderilmek üzere hazırlanıyor.
        </SCSuccess>
      )}
    </>
  );
}

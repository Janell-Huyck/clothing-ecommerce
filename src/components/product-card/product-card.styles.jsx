import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
      img {
        opacity: 0.8;
      }
  
      button {
        opacity: 0.85;
        display: flex;
      }
    }

`

export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`

export const AddToCartButton = styled.div`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  `

  export const Name = styled.h3`
    width: 90%;
    margin-bottom: 15px;
  `

  export const Price = styled.p`
    width: 10%;
  `
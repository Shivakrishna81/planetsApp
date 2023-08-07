/* Write your CSS here */
import styled from 'styled-components/macro'

export const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (min-width: 768px) {
    height: 290px;
    width: 405px;
  }
`
export const Name = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-top: 40px;
  }
`
export const Description = styled.p`
  text-align: center;
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 16px;
  max-width: 800px;
`

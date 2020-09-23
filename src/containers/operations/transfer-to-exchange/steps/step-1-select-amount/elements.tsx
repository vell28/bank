import styled from 'styled-components';
import ArrowIcon from './arrow-red.svg';

export const ExchangeBox = styled.form`
  position: relative;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  min-height: 480px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 18px;
  font-family: Avenir, sans-serif;
  font-weight: 900;
  letter-spacing: -0.1px;
  margin: 0px;
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-grow: 2;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  padding-top: 45px;
  height: 30px;
  input {
    border-bottom: none;
    font-size: 17px;
    font-weight: 500;
    padding-top: 10px;
    text-align: left;
    padding-left: 0px;
    max-width: 180px;
  }
`;

export const DropDownButton = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: auto;
  i {
    padding-left: 9px;
    font-size: 11px;
  }
`;

export const DropDownContainer = styled.div`
  position: relative;
  min-width: 260px;
  padding: 20px 0px 20px 0px;
  min-height: 200px;
`;

export const ExchangeArrow = styled.div`
  position: relative;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  margin-top: 30px;
`;

export const Circle = styled.div`
  width: 44px;
  height: 44px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 42%;
  background-image: url(${ArrowIcon});
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(90deg);
`;

export const CurrencyCode = styled.div`
  width: 70px;
  display: inline-block;
  padding-right: 10px;
  margin: 0px 30px 13px 25px;
`;
